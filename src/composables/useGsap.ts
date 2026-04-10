import gsap from 'gsap';
import { ref, onUnmounted, type Ref } from 'vue';

/**
 * useGsap — Composable for scoped GSAP contexts.
 * Every animation lives inside a gsap.context() bound to a DOM scope.
 * onUnmounted always calls ctx.revert() — zero orphaned ScrollTriggers.
 */
export const useGsap = () => {
  const ctx = ref<gsap.Context | null>(null);

  const initCtx = (scope: Ref<HTMLElement | null>) => {
    if (!scope.value) return;
    ctx.value = gsap.context(() => {}, scope.value);
  };

  onUnmounted(() => {
    ctx.value?.revert();
  });

  return { ctx, initCtx };
};
