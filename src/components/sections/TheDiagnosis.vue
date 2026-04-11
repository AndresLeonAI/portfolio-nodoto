<template>
  <section 
    ref="diagnosisSection" 
    id="the-diagnosis" 
    class="relative z-20 bg-[#E7DBCB] w-full min-h-screen py-24 sm:py-32 overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.6)]"
  >
    <!-- Grid Bento Mágico -->
    <div class="relative z-10 mx-auto px-4 sm:px-8 max-w-[100rem]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        
        <!-- Celda Header (col-span-12) -->
        <div class="diagnosis-card hover-scale col-span-1 p-8 sm:p-12 lg:col-span-12 rounded-3xl transition-transform duration-500 ease-out hover:scale-[1.01]">
          <p class="font-mono text-[0.65rem] uppercase tracking-widest text-gray-500 mb-6 sm:mb-10 bento-text opacity-0 translate-y-4">( LA CRUDA VERDAD )</p>
          <h2 ref="titleRef" class="font-display text-4xl sm:text-5xl lg:text-7xl text-[#111] leading-[1.05] tracking-tight max-w-5xl">
            El Costo de la
            <span class="relative inline-flex items-center justify-center font-black font-editorial text-black text-[110%]">
              Mediocridad
              <!-- Trazo Cinético Orgánico Círculo Perfecto -->
              <svg class="absolute w-[130%] h-[160%] -left-[15%] -top-[30%] pointer-events-none z-0 drop-shadow-sm" viewBox="0 0 320 100" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="mediocridadPathRef" class="hidden sm:block opacity-0" d="M30,70 C5,60 10,20 150,15 C280,10 295,45 285,75 C270,100 180,95 100,85 C50,80 30,65 30,60" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            &nbsp;Digital.
          </h2>
          <p class="mt-8 text-gray-600 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed bento-text" v-html="card1DescHtml"></p>
        </div>

        <!-- Celda Autoridad (col-span-12 lg:col-span-8 lg:row-span-2) -->
        <div class="diagnosis-card hover-scale col-span-1 bg-[#0B0B0A] p-8 sm:p-12 lg:col-span-8 lg:row-span-2 rounded-3xl flex flex-col justify-end min-h-[300px] lg:min-h-[500px] relative overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.15)] transition-transform duration-500 ease-out hover:scale-[1.01]">
          <!-- Light Gradient Radial Bottom Center -->
          <div class="absolute inset-x-0 bottom-0 top-[30%] bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08)_0%,transparent_80%)] pointer-events-none"></div>

          <h3 class="relative z-10 font-display text-3xl sm:text-4xl lg:text-5xl text-[#F9F9F9] mb-4 bento-text" v-html="card2TitleHtml"></h3>
          <p class="relative z-10 text-[#A1A1AA] text-base sm:text-lg max-w-2xl leading-relaxed bento-text" v-html="card2DescHtml"></p>
        </div>

        <!-- Celda Der-Arriba (lg:col-span-7) -->
        <div class="diagnosis-card hover-scale col-span-1 bg-[#1A1A1A]/40 border border-white/10 backdrop-blur-[12px] p-8 sm:p-10 lg:col-span-7 rounded-3xl flex flex-col justify-end min-h-[250px] relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_8px_30px_rgb(0,0,0,0.2)] transition-transform duration-500 ease-out hover:scale-[1.01]">
          
          <!-- Atmósfera Cinética (Light Trail) -->
          <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.35] mix-blend-luminosity grayscale">
            <div class="absolute inset-[-30%] bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200')] bg-cover bg-center filter blur-[40px] will-change-transform scale-110"></div>
          </div>
          
          <!-- Textura de Ruido (Densidad Premium) -->
          <div class="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <filter id="noiseFilterD1">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilterD1)" />
            </svg>
          </div>

          <!-- Patrón Grid Milimétrico (Panel Técnico) -->
          <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px;"></div>

          <!-- Shimmer Diagonal -->
          <div class="shimmer-glass-effect absolute top-0 bottom-0 -left-[100%] z-20 w-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <h3 class="relative z-10 font-display text-2xl sm:text-3xl text-black mb-3 bento-text" v-html="card3TitleHtml"></h3>
          <p class="relative z-10 text-white text-sm sm:text-base leading-relaxed bento-text" v-html="card3DescHtml"></p>
        </div>

        <!-- Celda Der-Abajo (lg:col-span-5) -->
        <div class="diagnosis-card hover-scale col-span-1 bg-[#1A1A1A]/40 border border-white/10 backdrop-blur-[12px] p-8 sm:p-10 lg:col-span-5 lg:translate-y-12 rounded-3xl flex flex-col justify-end min-h-[250px] relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_8px_30px_rgb(0,0,0,0.2)] transition-transform duration-500 ease-out hover:scale-[1.01]">
          
          <!-- Atmósfera Cinética -->
          <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.35] mix-blend-luminosity grayscale">
            <div class="absolute inset-[-30%] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200')] bg-cover bg-center filter blur-[40px] will-change-transform scale-110"></div>
          </div>
          
          <!-- Textura de Ruido (Densidad Premium) -->
          <div class="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <filter id="noiseFilterD2">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilterD2)" />
            </svg>
          </div>

          <!-- Patrón Grid Milimétrico (Panel Técnico) -->
          <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px;"></div>

          <!-- Shimmer Diagonal -->
          <div class="shimmer-glass-effect absolute top-0 bottom-0 -left-[100%] z-20 w-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <h3 class="relative z-10 font-display text-2xl sm:text-3xl text-black mb-3 bento-text" v-html="card4TitleHtml"></h3>
          <p class="relative z-10 text-white text-sm sm:text-base leading-relaxed bento-text" v-html="card4DescHtml"></p>
        </div>

        <!-- FASE 3: EL CIERRE MAGNÉTICO (COLISIONADOR PANORÁMICO) -->
        <div class="diagnosis-card col-span-1 lg:col-span-12 mt-6 lg:mt-16 flex w-full flex-col items-center justify-center overflow-visible">
          <!-- CTA Monolítico (Base Gris) -->
          <div 
            ref="epicCtaRef"
            @mousemove="epicMouseMove" 
            @mouseleave="epicMouseLeave" 
            class="group relative flex items-center justify-center overflow-hidden rounded-full bg-[#E5E5E5] px-12 py-10 sm:px-16 sm:py-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] cursor-pointer z-20 w-full"
          >
            <!-- Sweep Reveal Background -->
            <div class="absolute inset-x-0 bottom-0 top-0 bg-[#0B0B0A] origin-bottom scale-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"></div>

            <!-- Noise Texture over it -->
            <div class="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
            
            <span ref="epicCtaTextRef" class="relative z-10 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#0B0B0A] transition-colors duration-500 group-hover:text-[#F9F9F9] pointer-events-none will-change-transform">
              <span class="uppercase whitespace-nowrap">Inicia tu</span>
              <span class="font-editorial text-3xl sm:text-5xl text-[#0B0B0A] group-hover:text-[#F9F9F9] transition-colors duration-500 lowercase mx-1 translate-y-[2px] tracking-normal whitespace-nowrap">transformación</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGsap } from '@/composables/useGsap';
import { textSplitterIntoChar } from '@/functions';

gsap.registerPlugin(ScrollTrigger);

const diagnosisSection = ref<HTMLElement | null>(null);
const mediocridadPathRef = ref<SVGPathElement | null>(null);
const epicCtaRef = ref<HTMLElement | null>(null);
const epicCtaTextRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);

const card1DescHtml = ref('');
const card2TitleHtml = ref('');
const card2DescHtml = ref('');
const card3TitleHtml = ref('');
const card3DescHtml = ref('');
const card4TitleHtml = ref('');
const card4DescHtml = ref('');

onBeforeMount(() => {
  card1DescHtml.value = textSplitterIntoChar('Tu sitio actual no es una herramienta, es un ', true, false) +
    `<span class="font-editorial text-[110%] tracking-normal" style="display:inline-block; margin-right: 0.25rem;">${textSplitterIntoChar('gasto', true, false)}</span>` +
    textSplitterIntoChar('. Diseñamos ecosistemas para líderes de industria.', true, false);

  card2TitleHtml.value = textSplitterIntoChar('La Estética Dicta Tu Precio.', true, false);
  card2DescHtml.value = textSplitterIntoChar('Una percepción premium te permite cobrar lo que realmente mereces. Eliminamos la fricción de venta antes de la primera llamada.', true, false);

  card3TitleHtml.value = textSplitterIntoChar('Ingeniería de Conversión.', true, false);
  card3DescHtml.value = textSplitterIntoChar('No coleccionamos visitas. Orquestamos recorridos psicológicos que transforman tráfico frío en clientes de alto ', true, false) +
    `<span class="font-editorial text-[110%] text-white tracking-normal" style="display:inline-block; margin-left: 0.25rem;">${textSplitterIntoChar('valor', true, false)}</span>.`;

  card4TitleHtml.value = textSplitterIntoChar('Monopolio de Percepción.', true, false);
  card4DescHtml.value = textSplitterIntoChar('Aniquila a tu competencia convirtiéndote en su referente y viéndote 10 años en el ', true, false) +
    `<span class="font-editorial text-[110%] text-white tracking-normal" style="display:inline-block; margin-left: 0.25rem;">${textSplitterIntoChar('futuro', true, false)}</span>.`;
});
const { ctx, initCtx } = useGsap();
let xTo1: any;

const epicMouseMove = (e: MouseEvent) => {
  if (!epicCtaRef.value || !xTo1) return;
  const rect = epicCtaRef.value.getBoundingClientRect();
  const xOffset = ((e.clientX - rect.left) / rect.width - 0.5) * 80; // Desplazamiento reactivo de +-40px
  xTo1(xOffset);
};

const epicMouseLeave = () => {
  if (xTo1) xTo1(0);
};

onMounted(() => {
  initCtx(diagnosisSection);

  ctx.value!.add(() => {

    // 1. Interpolación de AuthorityBridge (Card Stacking Termodinámico CERO PINNING SOTD)
    const prevSectionWrapper = document.getElementById('authority-scale-target');
    const darkOverlay = document.getElementById('authority-dark-overlay');
    if (prevSectionWrapper && darkOverlay && diagnosisSection.value) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: diagnosisSection.value,
          start: 'top bottom', // When TheDiagnosis's top hits the viewport bottom
          end: 'top top',      // When TheDiagnosis's top reaches the viewport top
          scrub: true,
        }
      });
      // Escalado suave geométrico
      tl.to(prevSectionWrapper, {
        scale: 0.95,
        ease: 'none',
      }, 0);
      // Apagado Óptico (Performance Seguro, evita Bugs the Renderizado)
      tl.to(darkOverlay, {
        opacity: 0.65,
        ease: 'none',
      }, 0);
    }

    // FASE 1: LA GRAVEDAD DE LAS TARJETAS (CARD STAGGER)
    const cards = diagnosisSection.value?.querySelectorAll('.diagnosis-card');
    if (cards && cards.length) {
      gsap.from(cards, {
        y: 120,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '#the-diagnosis',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    // FASE 2: ANIMACIÓN DE TEXTOS POR TARJETA (NUESTRA FILOSOFÍA ESTILO)
    const cardsArray = diagnosisSection.value?.querySelectorAll('.diagnosis-card');
    cardsArray?.forEach((card, i) => {
      const letters = card.querySelectorAll('.bento-text .letters');
      if (letters && letters.length) {
        gsap.set(letters, {
          y: '120%',
          rotateX: -20,
          opacity: 0,
          willChange: 'transform, opacity',
        });

        gsap.to(letters, {
          y: '0%',
          rotateX: 0,
          opacity: 1,
          stagger: 0.015,
          duration: 1.2,
          delay: i * 0.15, // escalonamiento entre tarjetas para que parezca un flujo continuo
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    // FASE 3: ANIMACIÓN SEGURA DEL TÍTULO Y EL SVG
    if (titleRef.value) {
      gsap.from(titleRef.value, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.value,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    if (mediocridadPathRef.value && titleRef.value) {
      const length = mediocridadPathRef.value.getTotalLength();
      gsap.set(mediocridadPathRef.value, { 
        strokeDasharray: length, 
        strokeDashoffset: length,
        opacity: 1
      });
      
      gsap.to(mediocridadPathRef.value, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: titleRef.value,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    // Shimmer Metálico Cíclico en Tarjetas Nigredo
    const glassShimmers = diagnosisSection.value?.querySelectorAll('.shimmer-glass-effect');
    if (glassShimmers && glassShimmers.length) {
      gsap.to(glassShimmers, {
        x: '250%',
        duration: 2.5,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 5
      });
    }

    // Shimmer y Efecto quickTo (CTA Panorámico)
    xTo1 = gsap.quickTo(epicCtaTextRef.value, "x", {duration: 0.4, ease: "power3", 
      // Ensure we don't snap to integer pixels for smoother results
    });

    const epicShimmers = diagnosisSection.value?.querySelectorAll('.epic-cta-shimmer');
    if (epicShimmers && epicShimmers.length) {
      gsap.to(epicShimmers, {
        x: '350%',
        duration: 3,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 4
      });
    }

  });
});
</script>
