import gsap from 'gsap';
import { ref, onUnmounted, type Ref } from 'vue';

/**
 * useGsap — Composable for scoped GSAP contexts.
 * Every animation lives inside a gsap.context() bound to a DOM scope.
 * onUnmounted always calls ctx.revert() — zero orphaned ScrollTriggers.
 *
 * Also exposes `mm` (gsap.matchMedia) for desktop/mobile gating.
 * Always reverted on unmount → no leaked breakpoint listeners.
 */
export const useGsap = () => {
  const ctx = ref<gsap.Context | null>(null);
  const mm = gsap.matchMedia();

  const initCtx = (scope: Ref<HTMLElement | null>) => {
    if (!scope.value) return;
    ctx.value = gsap.context(() => {}, scope.value);
  };

  onUnmounted(() => {
    ctx.value?.revert();
    mm.revert();
  });

  return { ctx, initCtx, mm };
};
