import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll singleton
const lenis = new Lenis({
  lerp: 0.08, // Physics premium (smoothWheel implícito)
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
