<template>
  <section
    ref="sectionRef"
    id="authority-bridge"
    class="relative bg-[#0B0B0A] overflow-hidden"
  >
    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- PROFUNDIDAD TÁCTIL: Capa de ruido de grano fino        -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <div class="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- BENTO GRID MATRIZ: Filosofía & Detalles Técnicos         -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <div class="relative z-10 mx-auto flex max-w-[100rem] flex-col gap-4 px-4 pb-20 pt-24 sm:gap-6 sm:px-8 lg:pb-32 lg:pt-32">
      <!-- Fila Superior: Manifiesto Principal + Celdas Minorísticas -->
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-12 sm:gap-6">
        
        <!-- Celda Principal: Manifiesto (Col 1-8) -->
        <div class="authority-bento-card col-span-1 flex flex-col justify-between border border-black/5 bg-[#E7DBCB]/90 backdrop-blur-[16px] p-8 sm:p-12 lg:col-span-8 lg:p-16 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_8px_32px_rgba(0,0,0,0.05)]">
          
          <!-- Textura de Ruido (Densidad Premium) -->
          <div class="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          <p
            ref="eyebrowRef"
            class="relative z-10 authority-eyebrow mb-12 font-fancy text-xs uppercase tracking-[0.35em] text-gray-500 opacity-0 sm:mb-20 sm:text-sm"
          >
            ( Nuestra Filosofía )
          </p>
          <div
            ref="manifestoRef"
            id="manifesto-text"
            v-html="manifestoHtml"
            class="relative z-10 manifesto-type font-fancy font-medium text-[#111]"
          ></div>
        </div>

        <!-- Columna de Micro-Celdas (Col 9-12) Nigredo Cards -->
        <div class="col-span-1 flex flex-col gap-4 lg:col-span-4 sm:gap-6">
          
          <!-- Glass Card 1: Nuestra Obsesión (120 FPS Sostenidos) -->
          <div ref="card1Ref" class="authority-bento-card flex flex-1 flex-col justify-between border border-white/10 bg-[#1A1A1A]/40 backdrop-blur-[12px] p-8 sm:p-10 relative overflow-hidden opacity-0 translate-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            
            <!-- Atmósfera Cinética (Glass Frame) -->
            <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.35] mix-blend-luminosity grayscale">
              <div class="absolute inset-[-30%] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200')] bg-cover bg-center filter blur-[40px] will-change-transform scale-110"></div>
            </div>
            
            <!-- Textura de Ruido (Densidad Premium) -->
            <div class="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>

            <!-- Patrón Grid Milimétrico (Panel Técnico) -->
            <div class="absolute inset-0 z-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(#111 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Shimmer Diagonal (Reflejo Material Animado en GSAP) -->
            <div class="shimmer-glass-effect absolute top-0 bottom-0 -left-[100%] z-20 w-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

            <p class="relative z-10 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#A1A1AA]">
              <span class="relative flex h-1.5 w-1.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
              </span>
              120 FPS Sostenidos
            </p>
            <div 
              class="relative z-10 mt-8 sm:mt-auto metrics-type font-fancy text-[#E5E5E5] font-medium" 
              v-html="obsessionHtml"
            ></div>
          </div>

          <!-- Glass Card 2: Filosofía Técnica -->
          <div ref="card2Ref" class="authority-bento-card flex flex-1 flex-col justify-between border border-white/10 bg-[#1A1A1A]/40 backdrop-blur-[12px] p-8 sm:p-10 relative overflow-hidden opacity-0 translate-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            
            <!-- Atmósfera Cinética (Light Trail) -->
            <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.35] mix-blend-luminosity grayscale">
              <div class="absolute inset-[-30%] bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200')] bg-cover bg-center filter blur-[40px] will-change-transform scale-110"></div>
            </div>
            
            <!-- Textura de Ruido (Densidad Premium) -->
            <div class="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>

            <!-- Patrón Grid Milimétrico (Panel Técnico) -->
            <div class="absolute inset-0 z-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(#111 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Shimmer Diagonal (Reflejo Material Animado en GSAP) -->
            <div class="shimmer-glass-effect absolute top-0 bottom-0 -left-[100%] z-20 w-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

            <p class="relative z-10 font-mono text-[0.65rem] uppercase tracking-widest text-[#A1A1AA]">Filosofía Técnica</p>
            <div 
              class="relative z-10 mt-8 sm:mt-auto metrics-type font-fancy text-[#E5E5E5] font-medium" 
              v-html="philosophyHtml"
            ></div>
          </div>
          
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════ -->
      <!-- FASE 2 — MARQUESINA BENTO (Panorámica 100%)            -->
      <!-- ═══════════════════════════════════════════════════════ -->
      <div ref="marqueeCardRef" class="authority-bento-card flex flex-col gap-8 border border-black/5 bg-[#E7DBCB]/90 p-6 sm:gap-12 sm:p-10 lg:p-12 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_8px_32px_rgba(0,0,0,0.05)]">
        
        <div class="flex items-center justify-between px-2 sm:px-4">
          <p
            ref="marqueeLabelRef"
            class="font-fancy text-[0.65rem] uppercase tracking-[0.35em] text-gray-500 opacity-0 sm:text-xs"
          >
            Marcas Globales & Ecosistemas
          </p>
          <div class="hidden sm:block ml-8 flex-grow max-w-sm">
             <div ref="dividerRef" class="h-[1px] w-0 bg-black/10"></div>
          </div>
        </div>

        <!-- Infinite logo marquee strip with real SVGs and edge fading mask removed -->
        <div class="relative w-full overflow-hidden">
          <div
            ref="marqueeTrackRef"
            class="flex w-max items-center gap-16 will-change-transform sm:gap-24"
          >
            <template v-for="(_, setIndex) in 4" :key="setIndex">
              <div
                v-for="(logoSvg, logoIndex) in clientLogos"
                :key="`${setIndex}-${logoIndex}`"
                class="logo-item flex h-8 w-24 flex-shrink-0 items-center justify-center text-black/40 sm:h-10 sm:w-32 lg:h-12 lg:w-40"
                v-html="logoSvg"
              >
              </div>
            </template>
          </div>
        </div>

      </div>

      <!-- ═══════════════════════════════════════════════════════ -->
      <!-- FASE 3 — CTA MAESTRO FINAL                             -->
      <!-- ═══════════════════════════════════════════════════════ -->
      <div class="relative flex w-full flex-col items-center justify-center pt-24 pb-12 sm:pt-32 sm:pb-16">
        <!-- CTA Monolítico (Base Gris) -->
        <div 
          ref="ctaButtonRef"
          @click="navigateToDiscovery"
          @mousemove="onMouseMove"
          @mouseleave="onMouseLeave"
          @mouseenter="onMouseEnter"
          class="group relative flex items-center justify-center overflow-hidden rounded-full bg-[#E7DBCB] px-12 py-6 sm:px-16 sm:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] cursor-pointer z-20"
        >
          <!-- Sweep Reveal Background -->
          <div class="absolute inset-x-0 bottom-0 top-0 bg-[#0B0B0A] origin-bottom scale-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"></div>

          <!-- Noise Texture over it -->
          <div class="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
          
          <span ref="ctaTextRef" class="relative z-10 flex flex-nowrap items-center gap-1 font-display text-lg sm:text-xl font-bold tracking-tight text-[#0B0B0A] transition-colors duration-500 group-hover:text-[#F9F9F9]">
            <span>Agenda un</span>
            <span class="font-editorial text-2xl sm:text-3xl text-[#0B0B0A] group-hover:text-[#F9F9F9] transition-colors duration-500 lowercase mx-1 translate-y-[2px] tracking-normal">Discovery</span>
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted, onBeforeMount, onUnmounted } from 'vue';
import { textSplitterIntoChar } from '@/functions';
import { useGsap } from '@/composables/useGsap';
import { useMagnetic } from '@/composables/useMagnetic';

gsap.registerPlugin(ScrollTrigger);

// ─── Refs ───────────────────────────────────────────────
const sectionRef = ref<HTMLElement | null>(null);
const eyebrowRef = ref<HTMLElement | null>(null);
const manifestoRef = ref<HTMLElement | null>(null);
const dividerRef = ref<HTMLElement | null>(null);
const marqueeLabelRef = ref<HTMLElement | null>(null);
const marqueeTrackRef = ref<HTMLElement | null>(null);
const marqueeCardRef = ref<HTMLElement | null>(null);
const card1Ref = ref<HTMLElement | null>(null);
const card2Ref = ref<HTMLElement | null>(null);
const ctaButtonRef = ref<HTMLElement | null>(null);
const ctaTextRef = ref<HTMLElement | null>(null);

// ─── Composable ─────────────────────────────────────────
const { ctx, initCtx } = useGsap();
const { onMouseMove, onMouseLeave: magneticLeave } = useMagnetic(ctaButtonRef, 0.4);

const onMouseLeave = () => {
  magneticLeave();
  gsap.to(ctaButtonRef.value, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  gsap.to(ctaTextRef.value, { letterSpacing: '0em', duration: 0.5, ease: 'power3.out' });
};
const onMouseEnter = () => {
  gsap.to(ctaButtonRef.value, { scale: 1.05, duration: 0.4, ease: 'back.out(2)' });
  gsap.to(ctaTextRef.value, { letterSpacing: '0.02em', duration: 0.4, ease: 'power3.out' });
};

// ─── CTA Routing (Global Transition Bus) ───────────────────────────────────
const navigateToDiscovery = () => {
  window.dispatchEvent(
    new CustomEvent('navigate-with-transition', { detail: { route: '/discovery' } })
  );
};

const manifestoHtml = ref('');
const obsessionHtml = ref('');
const philosophyHtml = ref('');

// ─── Marquee timeline ref (for velocity control) ────────
let marqueeTl: gsap.core.Tween | null = null;
let velocityProxy = { value: 1 };
let velocityTween: gsap.core.Tween | null = null;

// ─── Client SVGs (Real World Tech/Luxury Look) ──────────
const clientLogos = [
  // Figma
  `<svg viewBox="0 0 38 57" fill="currentColor" class="w-full h-full max-h-full"><path d="M19 28.5C19 33.747 14.747 38 9.5 38C4.253 38 0 33.747 0 28.5C0 23.253 4.253 19 9.5 19H19V28.5Z"/><path d="M0 47.5C0 52.747 4.253 57 9.5 57C14.747 57 19 52.747 19 47.5V38H9.5C4.253 38 0 43.253 0 47.5Z"/><path d="M19 0L9.5 0C4.253 0 0 4.253 0 9.5C0 14.747 4.253 19 9.5 19H19V0Z"/><path d="M19 19H28.5C33.747 19 38 14.747 38 9.5C38 4.253 33.747 0 28.5 0H19V19Z"/><path d="M38 28.5C38 33.747 33.747 38 28.5 38C23.253 38 19 33.747 19 28.5C19 23.253 23.253 19 28.5 19C33.747 19 38 23.253 38 28.5Z"/></svg>`,
  // Vercel
  `<svg viewBox="0 0 512 512" fill="currentColor" class="w-full h-full max-h-full"><path d="M256 0L512 443H0L256 0Z"/></svg>`,
  // Radix UI
  `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full max-h-full"><path d="M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M6 3h5v5h-5l0 -5" /><path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005" /></svg>`,
  // Notion
  `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full max-h-full"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>`,
  // GitHub
  `<svg viewBox="0 0 32 32" fill="currentColor" class="w-full h-full max-h-full"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.02 3.864-0.02 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg>`,
  // OpenAI
  `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full max-h-full"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>`
];

// ─── Lifecycle ──────────────────────────────────────────
onBeforeMount(() => {
  // Construct the manifesto with exact weights, blocks, and inline SVG
  const block1T1 = textSplitterIntoChar('Tu web debe dejar de ser un ', true, false);
  const block1T2 = `<span class="font-editorial text-[110%] tracking-normal" style="display:inline-block; margin-right: 0.25rem;">${textSplitterIntoChar('gasto', true, false)}</span>`;
  const block1T3 = textSplitterIntoChar(' y convertirse en tu mejor vendedor.', true, false);
  const block1 = `${block1T1}${block1T2}${block1T3}`;
  
  const block2_part1 = textSplitterIntoChar('Fusionamos el diseño de ', true, false);
  const altaCostura = textSplitterIntoChar('Alta Costura Digital', true, false);
  
  // The hand-drawn circle SVG overlay - Organic path with red stroke, black text
  const highlightedAltaCostura = `
    <span class="relative inline-block font-black whitespace-nowrap text-[#111] leading-none px-1">
      <svg class="manifesto-circle absolute inset-0 w-[130%] h-[160%] -left-[15%] -top-[30%] pointer-events-none drop-shadow-sm" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <!-- Organic, hand-drawn path -->
        <path class="draw-path" d="M30,70 C5,60 10,20 150,15 C280,10 295,45 285,75 C270,100 180,95 100,85 C50,80 30,65 30,60" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ${altaCostura}
    </span>
  `;

  const block2_part2 = textSplitterIntoChar(' con ', true, false);
  const ecosistemas = textSplitterIntoChar('ecosistemas digitales implacables.', true, false);
  const destacadoEcosistemas = `<span class="font-black text-[#111]">${ecosistemas}</span>`;

  const block3T1 = textSplitterIntoChar('Creamos plataformas donde la ', true, false);
  const block3T2 = `<span class="font-editorial text-[110%] tracking-normal" style="display:inline-block; margin-right: 0.25rem;">${textSplitterIntoChar('exclusividad', true, false)}</span>`;
  const block3T3 = textSplitterIntoChar('visual acelera la decisión de compra, posicionando tu negocio como la opción indiscutible en su mercado.', true, false);
  const block3 = `${block3T1}${block3T2}${block3T3}`;

  manifestoHtml.value = `
    <p class="mb-12">${block1}</p>
    <p class="mb-12">${block2_part1}${highlightedAltaCostura}${block2_part2}${destacadoEcosistemas}</p>
    <p>${block3}</p>
  `;

  // Nigredo Cards HTML building
  obsessionHtml.value = textSplitterIntoChar('Nuestra obsesión: Que tu marca respire lujo y autoridad instantánea.', true, false);
  philosophyHtml.value = textSplitterIntoChar('Diseñamos para la tensión estética, codificamos para el ROI.', true, false);
});

onMounted(() => {
  if (!sectionRef.value) return;
  initCtx(sectionRef);

  ctx.value!.add(() => {
    // ═══════════════════════════════════
    // 1. EYEBROW — soft fade in
    // ═══════════════════════════════════
      gsap.to(eyebrowRef.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: eyebrowRef.value,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
        fastScrollEnd: true,
      },
    });

    // ═══════════════════════════════════
    // 2. MANIFESTO — scrub-driven letter reveal
    // ═══════════════════════════════════
    const letters = manifestoRef.value?.querySelectorAll('.letters');
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
        stagger: 0.008,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: manifestoRef.value,
          start: 'top 85%',
          end: 'bottom 60%',
          scrub: 1.2,
        },
      });
    }

    // ═══════════════════════════════════
    // 2.5 CIRCLE DRAW ANIMATION
    // ═══════════════════════════════════
    const drawPath = manifestoRef.value?.querySelector('.draw-path') as SVGPathElement;
    if (drawPath) {
      const length = drawPath.getTotalLength();
      gsap.set(drawPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(drawPath, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: manifestoRef.value,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // ═══════════════════════════════════
    // 2.8 NIGREDO CARDS — Staggered Entrance
    // ═══════════════════════════════════
    const nigredoCards = [card1Ref.value, card2Ref.value];
    
    gsap.to(nigredoCards, {
      opacity: 1,
      y: 0,
      stagger: 0.2, // Sequentially
      duration: 1,
      delay: 0.3, // After manifesto starts
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: manifestoRef.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        fastScrollEnd: true,
      }
    });

    nigredoCards.forEach((card, i) => {
      if (!card) return;
      const cardLetters = card.querySelectorAll('.letters');
      if (cardLetters.length) {
        gsap.set(cardLetters, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
        
        gsap.to(cardLetters, {
          y: '0%',
          rotateX: 0,
          opacity: 1,
          stagger: 0.015,
          duration: 1.2,
          // delay relative to the text rendering + stagger specific card + offset
          delay: 0.4 + (i * 0.2),
          ease: 'expo.out',
          scrollTrigger: {
            trigger: manifestoRef.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            fastScrollEnd: true,
          }
        });
      }
    });

    // PARALLAX ON NIGREDO CARDS
    gsap.fromTo(nigredoCards, 
      { yPercent: -10 }, 
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    );

    // ═══════════════════════════════════
    // 3. DIVIDER — line width reveal
    // ═══════════════════════════════════
    if(dividerRef.value) {
      gsap.to(dividerRef.value, {
        width: '100%',
        duration: 1.6,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: dividerRef.value,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
          fastScrollEnd: true,
        },
      });
    }

    // ═══════════════════════════════════
    // 4. MARQUEE LABEL — fade in
    // ═══════════════════════════════════
    if (marqueeLabelRef.value) {
      gsap.to(marqueeLabelRef.value, {
        opacity: 1,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: marqueeLabelRef.value,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
          fastScrollEnd: true,
        },
      });
    }

    // ═══════════════════════════════════
    // 5. INFINITE MARQUEE — with velocity-reactive timeScale & Parallax
    // ═══════════════════════════════════
    
    // PARALLAX ON MARQUEE CONTAINER
    if (marqueeCardRef.value) {
      gsap.fromTo(marqueeCardRef.value,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );
    }
    
    if (marqueeTrackRef.value) {
      const track = marqueeTrackRef.value;
      const items = track.children;
      if (items.length > 0) {
        const singleSetCount = clientLogos.length;
        let singleSetWidth = 0;
        for (let i = 0; i < singleSetCount; i++) {
          singleSetWidth += (items[i] as HTMLElement).offsetWidth;
        }
        
        const computedGap = parseFloat(getComputedStyle(track).columnGap || '64');
        singleSetWidth += computedGap * singleSetCount;

        gsap.set(track, { x: 0 });

        const MARQUEE_BASE_SPEED = 60; // px/s
        const baseDuration = singleSetWidth / MARQUEE_BASE_SPEED;

        marqueeTl = gsap.to(track, {
          x: -singleSetWidth,
          duration: baseDuration,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(gsap.utils.wrap(-singleSetWidth, 0), 'px'),
          },
        });

        ScrollTrigger.create({
          trigger: sectionRef.value,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            const clampedVelocity = gsap.utils.clamp(0, 3000, velocity);
            const targetTimeScale = gsap.utils.mapRange(0, 3000, 1, 5, clampedVelocity);

            velocityProxy.value = targetTimeScale;

            if (velocityTween) velocityTween.kill();
            if (marqueeTl) marqueeTl.timeScale(targetTimeScale);

            velocityTween = gsap.to(velocityProxy, {
              value: 1,
              duration: 1.8,
              ease: 'power3.out',
              onUpdate: () => {
                if (marqueeTl) marqueeTl.timeScale(velocityProxy.value);
              },
            });
          },
        });
      }
    }

    // ═══════════════════════════════════
    // 6. SHIMMER DE CRISTAL (Right Cards)
    // ═══════════════════════════════════
    const glassShimmers = document.querySelectorAll('.shimmer-glass-effect');
    if (glassShimmers.length) {
      gsap.to(glassShimmers, {
        x: '250%',
        duration: 2.5,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 5
      });
    }

    // ═══════════════════════════════════
    // 7. CTA MAESTRO — Entrada & Shimmer
    // ═══════════════════════════════════
    if (ctaButtonRef.value && ctaTextRef.value) {
      // Entrada
      gsap.from(ctaButtonRef.value, {
        yPercent: 60,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: ctaButtonRef.value,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
          fastScrollEnd: true,
        }
      });

      // Shimmer Inercial
      const shimmer = ctaButtonRef.value.querySelector('.cta-shimmer');
      if (shimmer) {
        gsap.to(shimmer, {
          x: '200%',
          duration: 2.2,
          ease: 'power2.inOut',
          repeat: -1,
          repeatDelay: 3.5
        });
      }
    }

  });
});

onUnmounted(() => {
  if (velocityTween) velocityTween.kill();
  if (marqueeTl) marqueeTl.kill();
});
</script>

<style scoped>
/* ═══════════════════════════════════════════════ */
/* BENTO ARCHITECTURE — Cards and Fluid Spacing    */
/* ═══════════════════════════════════════════════ */

.authority-bento-card {
  border-radius: clamp(1.5rem, 4vw, 2.5rem);
}

/* ═══════════════════════════════════ */
/* MANIFESTO FLUID TYPOGRAPHY         */
/* ═══════════════════════════════════ */

.manifesto-type {
  font-size: clamp(1.2rem, 1rem + 2vw, 2.7rem);
  line-height: 1.25;
  letter-spacing: -0.015em;
  perspective: 1000px;
}

/* Individual letter perf hints */
.manifesto-type :deep(.letters) {
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Word wrapper overflow clip (reinforced) */
.manifesto-type :deep(.text-nowrap) {
  overflow: clip;
  display: inline-block;
  padding-top: 0.1em;
  padding-bottom: 0.25em; /* Prevents descender clipping due to line-height 1.25 */
  margin-bottom: -0.35em;
}

/* ═══════════════════════════════════ */
/* NIGREDO METRICS TYPOGRAPHY         */
/* ═══════════════════════════════════ */

.metrics-type {
  font-size: clamp(1rem, 1rem + 1vw, 2rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  perspective: 1000px;
}

.metrics-type :deep(.letters) {
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

.metrics-type :deep(.text-nowrap) {
  overflow: clip;
  display: inline-block;
  padding-bottom: 0.2em;
  margin-bottom: -0.2em;
}

/* ═══════════════════════════════════ */
/* MARQUEE LOGO ITEMS                 */
/* ═══════════════════════════════════ */

.logo-item {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  opacity: 1;
}

.logo-item:hover {
  transform: scale(1.05); /* Premium magnetic micro-interaction */
}

.logo-item :deep(svg) {
  width: 100%;
  height: auto;
}
</style>

