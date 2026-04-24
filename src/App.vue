<template>
  <LoadingScreen v-cloak="true" />

  <template v-if="isSamsungBrowser">
    <SamsungError />
  </template>

  <div class="hidden md:block pointer-events-none fixed inset-0 z-50">
    <svg
      class="h-[150vh] w-[100vw] object-cover object-center"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise-base">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect class="h-[150vh] w-[100vw]" filter="url(#noise-base)" opacity="0.15" />

      <filter id="noise-dense">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect
        class="h-[150vh] w-[100vw]"
        filter="url(#noise-dense)"
        opacity="-0.88"
      />
    </svg>
  </div>

  <Cursor />
  <PageTransition ref="pageTransitionRef" />
  <Navbar @isLocked="lockScroll" />
  <WhatsAppFloat />

  <router-view />
</template>

<script setup lang="ts">
  import { onMounted, ref, nextTick, defineAsyncComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {
    LoadingScreen,
    PageTransition,
  } from '@/components/design';
  
  const SamsungError = defineAsyncComponent(() => import('@/components/design/SamsungError.vue'));
  const Cursor = defineAsyncComponent(() => import('@/components/design/Cursor.vue'));
  const WhatsAppFloat = defineAsyncComponent(() => import('@/components/ui/WhatsAppFloat.vue'));

  import { Navbar } from './components/common';
  import { lenis } from '@/lib/lenis';

  const isSamsungBrowser = /samsung/i.test(navigator.userAgent);
  const router = useRouter();

  // ─── PageTransition ref ────────────────────────────────────────────────────
  const pageTransitionRef = ref<InstanceType<typeof PageTransition> | null>(null);

  // ─── Scroll Lock (Menu) ────────────────────────────────────────────────────
  const lockScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  // ─── Route Transition Guard ────────────────────────────────────────────────
  // Intercepts every route change to execute the cinematic curtain transition.
  // Skips on initial load (LoadingScreen handles that) and same-path hash changes.
  let isTransitioning = false;

  router.beforeEach(async (to, from, next) => {
    // Skip transition on initial page load
    if (!from.name) {
      next();
      return;
    }

    // Skip if same path (hash-only navigation on same route)
    if (to.path === from.path) {
      next();
      return;
    }

    // Skip if already mid-transition (prevents double-fire from navigate-with-transition)
    if (isTransitioning) {
      next();
      return;
    }

    isTransitioning = true;

    try {
      // 1. Curtain covers screen + garbage collection
      if (pageTransitionRef.value) {
        await pageTransitionRef.value.executeTransitionOut();
      }

      // 2. Allow navigation
      next();

      // 3. Wait for DOM hydration
      await nextTick();
      await nextTick(); // Double tick for nested component mounts

      // 4. Allow GSAP contexts in new view to initialize
      await new Promise((r) => setTimeout(r, 200));

      // 5. Curtain reveals new page
      if (pageTransitionRef.value) {
        await pageTransitionRef.value.executeTransitionIn();
      }
    } finally {
      isTransitioning = false;
    }
  });

  // ─── Utility: Double requestAnimationFrame for guaranteed paint ─────────────
  const doubleRAF = (): Promise<void> => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resolve();
        });
      });
    });
  };

  onMounted(() => {
    document.body.classList.add('stop-scrolling');

    // ─── GLOBAL CTA TRANSITION EVENT ──────────────────────────────────────────
    // CTAs in child components dispatch this event to navigate with full cinematic
    // curtain transition. This prevents $router.push from bypassing the curtain.
    // Flow: Curtain OUT (full GC) → router.push → hydration → Curtain IN
    window.addEventListener('navigate-with-transition', async (e: any) => {
      const route = e.detail?.route;
      if (!route || isTransitioning) return;

      isTransitioning = true;
      try {
        // 1. Curtain covers screen + full garbage collection
        if (pageTransitionRef.value) {
          await pageTransitionRef.value.executeTransitionOut();
        }

        // 2. Push route (beforeEach will see isTransitioning=true and skip)
        await router.push(route);

        // 3. Wait for DOM hydration
        await nextTick();
        await nextTick();

        // 4. Allow GSAP contexts in new view to initialize
        await new Promise((r) => setTimeout(r, 200));

        // 5. Curtain reveals new page
        if (pageTransitionRef.value) {
          await pageTransitionRef.value.executeTransitionIn();
        }
      } finally {
        isTransitioning = false;
      }
    });

    // ─── INTERNAL HASH TRIGGER (Burger Menu Intra-Page Navigation) ────────────
    // MANDATO 2: Mathematically precise sequence.
    // ScrollTriggers MUST NOT be killed — they survive the hash jump.
    // ScrollTrigger.refresh(true) fires in total darkness between curtain states.
    window.addEventListener('nav-curtain-trigger', async (e: any) => {
      if (isTransitioning) return;
      isTransitioning = true;
      try {
        // 1. Curtain covers screen (NO garbage collection — STs survive)
        if (pageTransitionRef.value) {
          await pageTransitionRef.value.executeTransitionOutLight();
        }

        // 2. Lenis jumps instantaneously to anchor
        lenis.start();
        lenis.scrollTo(e.detail.url, { duration: 0, immediate: true });

        // 3. Double requestAnimationFrame — guarantees browser has painted
        //    the new scroll position before we measure bounding rects
        await doubleRAF();

        // 4. ScrollTrigger.refresh(true) in TOTAL DARKNESS
        //    Safe = true forces a full recalculation of all trigger positions
        ScrollTrigger.refresh(true);

        // 5. Buffer for Lenis to settle and any pending raf-driven layout
        //    to finish before we reveal — prevents text/layout snap on reveal.
        await new Promise((r) => setTimeout(r, 80));

        // 6. Curtain reveals the page at the correct scroll position
        if (pageTransitionRef.value) {
          await pageTransitionRef.value.executeTransitionIn();
        }
      } finally {
        isTransitioning = false;
      }
    });
  });
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
