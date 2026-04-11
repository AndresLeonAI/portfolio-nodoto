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

export { lenis };
