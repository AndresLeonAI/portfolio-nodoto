<template>
  <LoadingScreen v-cloak="true" />

  <template v-if="isSamsungBrowser">
    <SamsungError />
  </template>

  <div class="pointer-events-none fixed inset-0 z-50">
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

  <router-view />
</template>

<script setup lang="ts">
  import { onMounted, ref, nextTick } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    LoadingScreen,
    SamsungError,
    Cursor,
    PageTransition,
  } from '@/components/design';

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

    // Skip if already mid-transition (prevents double-fire)
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

      // 4. Curtain reveals new page
      if (pageTransitionRef.value) {
        await pageTransitionRef.value.executeTransitionIn();
      }
    } finally {
      isTransitioning = false;
    }
  });

  onMounted(() => {
    document.body.classList.add('stop-scrolling');
  });
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
