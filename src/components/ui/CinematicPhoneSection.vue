<template>
  <div
    ref="containerRef"
    :class="cn('relative w-screen h-screen overflow-hidden flex items-center justify-center font-sans antialiased', containerClass)"
    :style="{ perspective: '1500px', background: '#0B0B0A', color: '#f4f4f1' }"
  >
    <!-- Film Grain Overlay -->
    <div class="cinematic-film-grain" aria-hidden="true" />
    <!-- Grid Background -->
    <div class="cinematic-bg-grid absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

    <!-- BACKGROUND LAYER: Hero Texts -->
    <div class="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform" style="transform-style: preserve-3d;">
      <h2 class="text-track cinematic-gsap-reveal cinematic-text-3d-matte text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
        {{ tagline1 }}
      </h2>
      <h2 class="text-days cinematic-gsap-reveal cinematic-text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
        {{ tagline2 }}
      </h2>
    </div>

    <!-- BACKGROUND LAYER 2: Tactile CTA Buttons -->
    <div class="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 cinematic-gsap-reveal pointer-events-auto will-change-transform">
      <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight cinematic-text-silver-matte">
        {{ ctaHeading }}
      </h2>
      <p class="text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed" style="color: rgba(244, 244, 241, 0.5);">
        {{ ctaDescription }}
      </p>
      <div class="flex justify-center w-full">
        <a href="#" aria-label="Request Access" class="cinematic-btn-modern-light flex flex-col items-center justify-center px-10 py-5 sm:px-14 sm:py-6 rounded-[1.75rem] group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <div class="text-center">
            <div class="text-xs sm:text-sm font-bold tracking-wider text-neutral-500 uppercase mb-1">SOLICITAR ACCESO</div>
            <div class="text-2xl sm:text-3xl font-bold leading-none tracking-tight">Círculo Privado</div>
          </div>
        </a>
      </div>
    </div>

    <!-- FOREGROUND LAYER: The Physical Deep Blue Card -->
    <div class="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style="perspective: 1500px;">
      <div
        ref="mainCardRef"
        class="main-card cinematic-premium-depth-card relative overflow-hidden cinematic-gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
      >
        <div class="cinematic-card-sheen" aria-hidden="true" />

        <!-- Dynamic Responsive Grid -->
        <div class="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

          <!-- 1. TOP (Mobile) / RIGHT (Desktop): BRAND NAME -->
          <div class="card-right-text cinematic-gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
            <h2 class="text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter cinematic-text-card-silver-matte lg:mt-0">
              {{ brandName }}
            </h2>
          </div>

          <!-- 2. MIDDLE (Mobile) / CENTER (Desktop): IPHONE MOCKUP -->
          <div class="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style="perspective: 1000px;">
            <div class="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-85 lg:scale-100">
              <!-- The iPhone Bezel -->
              <div
                ref="mockupRef"
                class="relative w-[280px] h-[580px] rounded-[3rem] cinematic-iphone-bezel flex flex-col will-change-transform"
                style="transform-style: preserve-3d;"
              >
                <!-- Physical Hardware Buttons -->
                <div class="absolute top-[120px] -left-[3px] w-[3px] h-[25px] cinematic-hardware-btn rounded-l-md z-0" aria-hidden="true" />
                <div class="absolute top-[160px] -left-[3px] w-[3px] h-[45px] cinematic-hardware-btn rounded-l-md z-0" aria-hidden="true" />
                <div class="absolute top-[220px] -left-[3px] w-[3px] h-[45px] cinematic-hardware-btn rounded-l-md z-0" aria-hidden="true" />
                <div class="absolute top-[170px] -right-[3px] w-[3px] h-[70px] cinematic-hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                <!-- Inner Screen Container -->
                <div class="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden text-white z-10" style="box-shadow: inset 0 0 15px rgba(0,0,0,1);">
                  <div class="absolute inset-0 cinematic-screen-glare z-40 pointer-events-none" aria-hidden="true" />

                  <!-- Dynamic Island Notch -->
                  <div class="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3" style="box-shadow: inset 0 -1px 2px rgba(255,255,255,0.1);">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style="box-shadow: 0 0 8px rgba(34,197,94,0.8);" />
                  </div>

                  <!-- App Interface -->
                  <div class="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                    <div class="phone-widget flex justify-between items-center mb-8">
                      <div class="flex flex-col">
                        <span class="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">Status</span>
                        <span class="text-xl font-bold tracking-tight text-white drop-shadow-md">System</span>
                      </div>
                      <div class="w-9 h-9 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-sm border border-white/10" style="box-shadow: 0 8px 16px rgba(0,0,0,0.5);">ND</div>
                    </div>

                    <div class="phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8" style="filter: drop-shadow(0 15px 25px rgba(0,0,0,0.8));">
                      <svg class="absolute inset-0 w-full h-full" aria-hidden="true">
                        <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="12" />
                        <circle class="cinematic-progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#3B82F6" stroke-width="12" />
                      </svg>
                      <div class="text-center z-10 flex flex-col items-center">
                        <span class="counter-val text-4xl font-extrabold tracking-tighter text-white">0</span>
                        <span class="text-[8px] text-blue-200/50 uppercase tracking-[0.1em] font-bold mt-0.5">{{ metricLabel }}</span>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="phone-widget cinematic-widget-depth rounded-2xl p-3 flex items-center">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center mr-3 border border-blue-400/20 shadow-inner">
                          <svg class="w-4 h-4 text-blue-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <div class="h-2 w-20 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                          <div class="h-1.5 w-12 bg-neutral-600 rounded-full shadow-inner" />
                        </div>
                      </div>
                      <div class="phone-widget cinematic-widget-depth rounded-2xl p-3 flex items-center">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center mr-3 border border-emerald-400/20 shadow-inner">
                          <svg class="w-4 h-4 text-emerald-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <div class="h-2 w-16 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                          <div class="h-1.5 w-24 bg-neutral-600 rounded-full shadow-inner" />
                        </div>
                      </div>
                    </div>

                    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full" style="box-shadow: 0 1px 2px rgba(0,0,0,0.5);" />
                  </div>
                </div>
              </div>

              <!-- Floating Glass Badges -->
              <div class="floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] cinematic-floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/10 flex items-center justify-center border border-blue-400/30 shadow-inner">
                  <span class="text-base lg:text-xl drop-shadow-lg" aria-hidden="true">🔔</span>
                </div>
                <div>
                  <p class="text-white text-xs lg:text-sm font-bold tracking-tight">Paciente nuevo confirmado</p>
                  <p class="text-blue-200/50 text-[10px] lg:text-xs font-medium">Sin referidos. Sin anuncios. Solo tu web.</p>
                </div>
              </div>
              <div class="floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] cinematic-floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-indigo-500/20 to-indigo-900/10 flex items-center justify-center border border-indigo-400/30 shadow-inner">
                  <span class="text-base lg:text-lg drop-shadow-lg" aria-hidden="true">💼</span>
                </div>
                <div>
                  <p class="text-white text-xs lg:text-sm font-bold tracking-tight">Caso nuevo asignado</p>
                  <p class="text-blue-200/50 text-[10px] lg:text-xs font-medium">Cliente llegó solo · Tu reputación digital funcionó</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. BOTTOM (Mobile) / LEFT (Desktop): ACCOUNTABILITY TEXT -->
          <div class="card-left-text cinematic-gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
            <h3 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
              {{ cardHeading }}
            </h3>
            <p class="hidden md:block text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
              <slot name="cardDescription">
                <span class="text-white font-semibold">{{ brandName }}</span> diseña ecosistemas digitales donde la psicología del consumidor y la arquitectura de software de ultra-lujo se fusionan para aniquilar la indecisión y garantizar rentabilidad.
              </slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface CinematicHeroProps {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  containerClass?: string;
}

const props = withDefaults(defineProps<CinematicHeroProps>(), {
  brandName: 'NODOTO',
  tagline1: 'Zero Friction,',
  tagline2: 'Absolute Conversion.',
  cardHeading: 'El Protocolo de Inmersión.',
  metricValue: 98,
  metricLabel: 'Conversion Rate %',
  ctaHeading: 'Acelera la decisión.',
  ctaDescription: 'Integramos sistemas de alta disponibilidad y diseño predictivo para las marcas más exigentes del mundo.',
  containerClass: '',
});

const containerRef = ref<HTMLDivElement | null>(null);
const mainCardRef = ref<HTMLDivElement | null>(null);
const mockupRef = ref<HTMLDivElement | null>(null);
let requestId = 0;
let gsapCtx: gsap.Context | null = null;

// 1. High-Performance Mouse Interaction Logic
function setupMouseInteraction() {
  const handleMouseMove = (e: MouseEvent) => {
    if (window.scrollY > window.innerHeight * 2) return;
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(() => {
      if (mainCardRef.value && mockupRef.value) {
        const rect = mainCardRef.value.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        mainCardRef.value.style.setProperty('--mouse-x', `${mouseX}px`);
        mainCardRef.value.style.setProperty('--mouse-y', `${mouseY}px`);

        const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
        const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(mockupRef.value, {
          rotationY: xVal * 12,
          rotationX: -yVal * 12,
          ease: 'power3.out',
          duration: 1.2,
        });
      }
    });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return handleMouseMove;
}

// 2. Complex Cinematic Scroll Timeline
function setupScrollTimeline() {
  const isMobile = window.innerWidth < 768;

  gsapCtx = gsap.context(() => {
    // Initial states
    gsap.set('.text-track', { autoAlpha: 0, y: 60, scale: 0.85, filter: 'blur(20px)', rotationX: -20 });
    gsap.set('.text-days', { autoAlpha: 1, clipPath: 'inset(0 100% 0 0)' });
    gsap.set('.main-card', { y: window.innerHeight + 200, autoAlpha: 1 });
    gsap.set(['.card-left-text', '.card-right-text', '.mockup-scroll-wrapper', '.floating-badge', '.phone-widget'], { autoAlpha: 0 });
    gsap.set('.cta-wrapper', { autoAlpha: 0, scale: 0.8, filter: 'blur(30px)' });

    // Intro animation
    const introTl = gsap.timeline({ delay: 0.3 });
    introTl
      .to('.text-track', { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)', rotationX: 0, ease: 'expo.out' })
      .to('.text-days', { duration: 1.4, clipPath: 'inset(0 0% 0 0)', ease: 'power4.inOut' }, '-=1.0');

    // Main scroll timeline
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top top',
        end: () => isMobile ? '+=2500' : '+=3500', // <--- Drastically shortened for snappier mobile smooth scroll response
        pin: true,
        scrub: 1.2, // Increased scrub smoothing slightly for a buttery feel
        anticipatePin: 1,
      },
    });

    scrollTl
      .to(['.hero-text-wrapper', '.cinematic-bg-grid'], { scale: 1.15, filter: 'blur(20px)', opacity: 0.2, ease: 'power2.inOut', duration: 2 }, 0)
      .to('.main-card', { y: 0, ease: 'power4.inOut', duration: 2.5 }, 0)
      .to('.main-card', { width: '100%', height: '100%', borderRadius: '0px', ease: 'power3.inOut', duration: 1.5 })
      .fromTo('.mockup-scroll-wrapper',
        { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
        { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: 'expo.out', duration: 2.5 },
        '-=0.8'
      )
      .fromTo('.phone-widget',
        { y: 40, autoAlpha: 0, scale: 0.95 },
        { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: 'back.out(1.2)', duration: 1.5 },
        '-=1.5'
      )
      .to('.cinematic-progress-ring', { strokeDashoffset: 60, duration: 2, ease: 'power3.inOut' }, '-=1.2')
      .to('.counter-val', { innerHTML: props.metricValue, snap: { innerHTML: 1 }, duration: 2, ease: 'expo.out' }, '-=2.0')
      .fromTo('.floating-badge',
        { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
        { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: 'back.out(1.5)', duration: 1.5, stagger: 0.2 },
        '-=2.0'
      )
      .fromTo('.card-left-text', { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: 'power4.out', duration: 1.5 }, '-=1.5')
      .fromTo('.card-right-text', { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: 'expo.out', duration: 1.5 }, '<')
      .to({}, { duration: 2.5 })
      .set('.hero-text-wrapper', { autoAlpha: 0 })
      .set('.cta-wrapper', { autoAlpha: 1 })
      .to({}, { duration: 1.5 })
      .to(['.mockup-scroll-wrapper', '.floating-badge', '.card-left-text', '.card-right-text'], {
        scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: 'power3.in', duration: 1.2, stagger: 0.05,
      })
      .to('.main-card', {
        width: isMobile ? '92vw' : '85vw',
        height: isMobile ? '92vh' : '85vh',
        borderRadius: isMobile ? '32px' : '40px',
        ease: 'expo.inOut',
        duration: 1.8,
      }, 'pullback')
      .to('.cta-wrapper', { scale: 1, filter: 'blur(0px)', ease: 'expo.inOut', duration: 1.8 }, 'pullback')
      .to('.main-card', { y: -window.innerHeight - 300, ease: 'power3.in', duration: 1.5 });
  }, containerRef.value!);
}

let mouseHandler: ((e: MouseEvent) => void) | null = null;

onMounted(() => {
  mouseHandler = setupMouseInteraction();
  setupScrollTimeline();
});

onUnmounted(() => {
  if (mouseHandler) {
    window.removeEventListener('mousemove', mouseHandler);
  }
  cancelAnimationFrame(requestId);
  if (gsapCtx) {
    gsapCtx.revert();
  }
});
</script>

<style scoped>
.cinematic-gsap-reveal {
  visibility: hidden;
}

/* Film Grain */
.cinematic-film-grain {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
}

/* Grid Background */
.cinematic-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(244, 244, 241, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(244, 244, 241, 0.05) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

/* Text Effects (hardcoded NODOTO palette) */
.cinematic-text-3d-matte {
  color: #f4f4f1;
  text-shadow:
    0 10px 30px rgba(244, 244, 241, 0.2),
    0 2px 4px rgba(244, 244, 241, 0.1);
}

.cinematic-text-silver-matte {
  background: linear-gradient(180deg, #f4f4f1 0%, rgba(244, 244, 241, 0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateZ(0);
  filter:
    drop-shadow(0px 10px 20px rgba(244, 244, 241, 0.15))
    drop-shadow(0px 2px 4px rgba(244, 244, 241, 0.1));
}

.cinematic-text-card-silver-matte {
  background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateZ(0);
  filter:
    drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.8))
    drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.6));
}

/* Deep Physical Card */
.cinematic-premium-depth-card {
  background: linear-gradient(145deg, #162C6D 0%, #0A101D 100%);
  box-shadow:
    0 40px 100px -20px rgba(0, 0, 0, 0.9),
    0 20px 40px -20px rgba(0, 0, 0, 0.8),
    inset 0 1px 2px rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.04);
  position: relative;
}

.cinematic-card-sheen {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 50;
  background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06) 0%, transparent 40%);
  mix-blend-mode: screen;
  transition: opacity 0.3s ease;
}

/* iPhone Mockup Hardware */
.cinematic-iphone-bezel {
  background-color: #111;
  box-shadow:
    inset 0 0 0 2px #52525B,
    inset 0 0 0 7px #000,
    0 40px 80px -15px rgba(0, 0, 0, 0.9),
    0 15px 25px -5px rgba(0, 0, 0, 0.7);
  transform-style: preserve-3d;
}

.cinematic-hardware-btn {
  background: linear-gradient(90deg, #404040 0%, #171717 100%);
  box-shadow:
    -2px 0 5px rgba(0, 0, 0, 0.8),
    inset -1px 0 1px rgba(255, 255, 255, 0.15),
    inset 1px 0 2px rgba(0, 0, 0, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.cinematic-screen-glare {
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 45%);
}

.cinematic-widget-depth {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.05),
    inset 0 -1px 1px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.cinematic-floating-ui-badge {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 25px 50px -12px rgba(0, 0, 0, 0.8),
    inset 0 1px 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px 1px rgba(0, 0, 0, 0.5);
}

/* Buttons */
.cinematic-btn-modern-light {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.cinematic-btn-modern-light {
  background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
  color: #0F172A;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 12px 24px -4px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 1),
    inset 0 -3px 6px rgba(0, 0, 0, 0.06);
}

.cinematic-btn-modern-light:hover {
  transform: translateY(-3px);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 6px 12px -2px rgba(0, 0, 0, 0.15),
    0 20px 32px -6px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 1),
    inset 0 -3px 6px rgba(0, 0, 0, 0.06);
}

/* Progress Ring */
.cinematic-progress-ring {
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: 402;
  stroke-dashoffset: 402;
  stroke-linecap: round;
}
</style>
