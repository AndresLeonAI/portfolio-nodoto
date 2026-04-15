<template>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <!-- PAGE TRANSITION — Reuses Original LoadingScreen Visual Language -->
  <!-- Curved SVG path + NODOTO branding, identical to initial loader  -->
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div
    ref="curtainRef"
    id="page-transition"
    class="flex-center fixed bottom-0 z-[99998] size-full pointer-events-none"
    style="bottom: -100%; display: none;"
  >
    <div class="size-full flex-col">
      <!-- SVG Curtain with curved edge — matches LoadingScreen.vue -->
      <svg
        :width="width"
        :height="height * 2"
        class="fill-flax-smoke-800 absolute top-0 z-0 h-[calc(100%_+_300px)] brightness-50"
      >
        <path ref="pathRef" class="w-full" :d="pathData"></path>
      </svg>

      <!-- Branding — identical to original loader text -->
      <div
        ref="brandRef"
        style="transform: translateZ(0px)"
        class="text-flax-smoke-50/75 z-1 flex size-full flex-col items-center justify-center text-center text-4xl font-bold opacity-0 md:text-6xl"
      >
        <h3 class="overflow-clip">
          <span class="transition-text inline-block translate-y-full will-change-auto uppercase">
            NODOTO
          </span>
        </h3>
        <p class="overflow-clip">
          <span class="transition-text inline-block translate-y-full opacity-70 will-change-auto">
            &copy; Folio {{ new Date().getFullYear() }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { resetScroll } from '@/lib/lenis';
import { killAllScrollTriggers, isFirstLoad } from '@/animations';

gsap.registerPlugin(ScrollTrigger);

const curtainRef = ref<HTMLElement | null>(null);
const brandRef = ref<HTMLElement | null>(null);
const pathRef = ref<SVGPathElement | null>(null);

const { width, height } = useWindowSize();

// SVG path data — curved bottom edge (matches LoadingScreen)
const curveMultiplier = computed(() => {
  if (width.value < 600) return 0.15;
  if (width.value < 900) return 0.2;
  return 0.3;
});

const curveHeight = computed(() => height.value + height.value * curveMultiplier.value);

// Initial path (with curve) — curtain resting state
const curvedPathData = computed(() =>
  `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${curveHeight.value} 0 ${height.value} L0 0`
);

// Flat path (no curve) — curtain exit state
const flatPathData = computed(() =>
  `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value} L0 0`
);

const pathData = ref('');

/**
 * transitionOut — Covers the screen before route change.
 * Curtain slides up from bottom with curved SVG edge + branding text reveal.
 */
const transitionOut = (): Promise<void> => {
  return new Promise((resolve) => {
    if (!curtainRef.value || !brandRef.value) {
      resolve();
      return;
    }

    // Reset state
    pathData.value = curvedPathData.value;
    gsap.set(curtainRef.value, { bottom: '-100%', display: 'flex' });
    gsap.set(brandRef.value, { opacity: 0 });
    gsap.set('.transition-text', { y: '100%' });

    const tl = gsap.timeline({ onComplete: resolve });

    // 1. Slide curtain up
    tl.to(curtainRef.value, {
      bottom: '0%',
      duration: 0.8,
      ease: 'power2.inOut',
    });

    // 2. Reveal branding text
    tl.to(brandRef.value, {
      opacity: 1,
      duration: 0.3,
      ease: 'circ.inOut',
    }, '-=0.3');

    tl.to('.transition-text', {
      y: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      stagger: 0.1,
    }, '-=0.3');
  });
};

/**
 * transitionIn — Reveals the new page after route change.
 * Branding fades, curtain slides up & out with SVG path morph.
 */
const transitionIn = (): Promise<void> => {
  return new Promise((resolve) => {
    if (!curtainRef.value || !brandRef.value || !pathRef.value) {
      resolve();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Reset completely for next transition
        gsap.set(curtainRef.value!, { bottom: '-100%', display: 'none' });
        gsap.set(brandRef.value!, { opacity: 0 });
        gsap.set('.transition-text', { y: '100%' });
        resolve();
      },
    });

    // 1. Fade out branding text
    tl.to('.transition-text', {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    });

    // 2. Slide curtain up and out + morph SVG to flat
    tl.to(curtainRef.value, {
      bottom: '100%',
      duration: 0.8,
      ease: 'power2.inOut',
    }, '-=0.1');

    tl.to(pathRef.value, {
      duration: 0.8,
      attr: { d: flatPathData.value },
      ease: 'power2.inOut',
    }, '<20%');
  });
};

/**
 * executeTransitionOut — Full sequence: cover screen + garbage collection
 */
const executeTransitionOut = async () => {
  await transitionOut();

  // ── Garbage Collection behind the curtain ──
  killAllScrollTriggers();
  resetScroll();

  if (isFirstLoad.value) {
    isFirstLoad.value = false;
  }
};

/**
 * executeTransitionOutLight — Covers screen WITHOUT garbage collection.
 * Used for intra-page hash navigation where ScrollTriggers must survive.
 * The curtain deploys but ScrollTriggers and scroll position are preserved.
 */
const executeTransitionOutLight = async () => {
  await transitionOut();
  // No killAllScrollTriggers — animations must survive.
  // No resetScroll — scroll position will be set by the caller.
};

/**
 * executeTransitionIn — Reveal new page after DOM hydration
 */
const executeTransitionIn = async () => {
  await transitionIn();
};

onMounted(() => {
  // Ensure curtain starts hidden
  pathData.value = curvedPathData.value;
  if (curtainRef.value) {
    gsap.set(curtainRef.value, { bottom: '-100%', display: 'none' });
  }
});

defineExpose({
  executeTransitionOut,
  executeTransitionOutLight,
  executeTransitionIn,
});
</script>
