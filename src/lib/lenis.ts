import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Touch-device detection — mobile gets native scroll, desktop gets Lenis cinema
const isTouch =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

// Smooth scroll singleton
const lenis = new Lenis({
  lerp: isTouch ? 0.15 : 0.08,
  smoothWheel: !isTouch,
  syncTouch: false,
  touchMultiplier: 1,
});

// Integración arquitectónica: GSAP manda, Lenis obedece
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/**
 * resetScroll — Nuclear reset for route transitions.
 * Kills Lenis inertia, teleports to top, and refreshes ScrollTrigger.
 */
const resetScroll = () => {
  lenis.stop();
  lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
  // Delay refresh to allow DOM hydration
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    lenis.start();
  });
};

export { lenis, resetScroll };
