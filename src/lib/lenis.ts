import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Mobile Kill Switch ─────────────────────────────────────────────────────
// On mobile (<768px), Lenis is replaced with a zero-overhead null-object stub.
// The GSAP ticker callback (60 calls/sec) is NEVER registered on mobile.
// Result: browser controls scroll natively, zero JS scroll interception.
const isMobile =
  typeof window !== 'undefined' &&
  window.matchMedia('(max-width: 768px)').matches;

/**
 * Null-object pattern — consumer code calls lenis.scrollTo() etc. unchanged.
 * On mobile these degrade gracefully to native browser scroll APIs.
 * Zero rAF loops. Zero event listeners. Zero thermal load.
 */
const noopLenis = {
  start: () => {},
  stop: () => {},
  scrollTo: (target: any, opts?: any) => {
    if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: opts?.immediate ? 'instant' as ScrollBehavior : 'smooth' as ScrollBehavior });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: opts?.immediate ? 'instant' as ScrollBehavior : 'smooth' as ScrollBehavior });
    }
  },
  on: () => {},
  off: () => {},
  raf: () => {},
  destroy: () => {},
} as unknown as Lenis;

// Desktop: full cinematic Lenis | Mobile: zero-cost stub
const lenis: Lenis = isMobile
  ? noopLenis
  : new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
    });

// GSAP ↔ Lenis bridge: desktop only (saves 60 ticker callbacks/sec on mobile)
if (!isMobile) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/**
 * resetScroll — Nuclear reset for route transitions.
 * Kills Lenis inertia, teleports to top, and refreshes ScrollTrigger.
 */
const resetScroll = () => {
  lenis.stop();
  lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    lenis.start();
  });
};

export { lenis, resetScroll };
