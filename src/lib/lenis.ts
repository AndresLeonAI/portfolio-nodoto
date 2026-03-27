import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll singleton
const lenis = new Lenis({
  duration: 0.8,
});

function raf(time: number) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

export { lenis, raf };
