<template>
  <section
    ref="sectionRef"
    id="work-process-section"
    class="relative w-full overflow-hidden bg-[#111111] py-24 sm:py-32 z-10 rounded-b-3xl shadow-2xl will-change-auto"
  >
    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- PROFUNDIDAD TÁCTIL: Definición de filtro SVG de ruido  -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <svg class="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id="noiseFilterAboutMe">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </defs>
    </svg>

    <!-- Grain overlay (section-level) -->
    <div class="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="100%" height="100%" filter="url(#noiseFilterAboutMe)" />
      </svg>
    </div>

    <!-- Atmospheric radial glow -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)]"
      />
      <div
        class="absolute -right-[10%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,transparent_70%)]"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-[100rem] px-[3%]">
      <!-- Section Header -->
      <div ref="headerRef" class="mb-16 sm:mb-20">
        <p
          ref="headerEyebrowRef"
          class="authority-eyebrow mb-4 font-mono text-xs tracking-[0.4em] text-white/30 uppercase opacity-0 sm:text-sm"
        >
          El Proceso
        </p>
        <h2
          ref="headerTitleRef"
          class="kinetic-text-process font-fancy text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight text-white uppercase"
          style="perspective: 1000px;"
          v-html="headerTitleHtml"
        ></h2>
      </div>

      <!-- Bento Grid -->
      <div
        class="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12"
      >
        <!-- ═══════════════════════════════════════════════════════ -->
        <!-- CELDA 01 — Estrategia (Nigredo Glass Card)            -->
        <!-- ═══════════════════════════════════════════════════════ -->
        <div
          :ref="(el) => { if (el) bentoCards[0] = el as HTMLElement }"
          class="bento-card group relative flex flex-col justify-between overflow-hidden rounded-[clamp(1.5rem,4vw,2.5rem)] border border-white/10 bg-[#1A1A1A]/90 md:bg-[#1A1A1A]/40 md:backdrop-blur-[12px] p-10 sm:p-12 lg:col-span-5 lg:row-span-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] opacity-0 translate-y-4"
        >
          <!-- Layer 1: Atmósfera Cinética -->
          <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.35] mix-blend-luminosity grayscale">
            <div class="absolute inset-[-30%] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200')] bg-cover bg-center filter blur-[40px] will-change-transform scale-110"></div>
          </div>

          <!-- Layer 2: Textura de Ruido -->
          <div class="pointer-events-none absolute inset-0 z-0 opacity-15 mix-blend-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="100%" height="100%" filter="url(#noiseFilterAboutMe)" />
            </svg>
          </div>

          <!-- Layer 3: Grid Milimétrico -->
          <div class="absolute inset-0 z-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(#111 1px, transparent 1px); background-size: 20px 20px;"></div>

          <!-- Layer 4: Shimmer Diagonal -->
          <div class="shimmer-glass-effect absolute top-0 bottom-0 -left-[100%] z-20 w-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <!-- Subtle inner glow on hover -->
          <div
            class="pointer-events-none absolute inset-0 rounded-[clamp(1.5rem,4vw,2.5rem)] z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style="background: radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 70%)"
          />

          <span
            class="relative z-10 font-mono text-xs tracking-[0.35em] text-white/40 uppercase"
            >01</span
          >

          <div class="relative z-10 mt-auto">
            <h3
              class="kinetic-text-process font-fancy mb-5 text-[clamp(1.5rem,2.5vw,2.25rem)] font-extrabold leading-tight text-white uppercase"
              style="perspective: 1000px;"
              v-html="card1TitleHtml"
            ></h3>
            <p
              class="kinetic-text-process card-text font-fancy text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-[#E5E5E5]/70"
              style="perspective: 1000px;"
              v-html="card1DescHtml"
            ></p>
          </div>

          <!-- Decorative line -->
          <div
            class="relative z-10 mt-10 h-px w-16 bg-white/15 transition-all duration-500 group-hover:w-28 group-hover:bg-white/30"
          />
        </div>

        <!-- ═══════════════════════════════════════════════════════ -->
        <!-- CELDA 02 — Psicología (Light Glass / Manifesto Style) -->
        <!-- ═══════════════════════════════════════════════════════ -->
        <div
          :ref="(el) => { if (el) bentoCards[1] = el as HTMLElement }"
          class="bento-card group relative flex flex-col justify-between overflow-hidden rounded-[clamp(1.5rem,4vw,2.5rem)] border border-black/5 bg-[#E7DBCB] md:bg-[#E7DBCB]/90 md:backdrop-blur-[16px] p-10 sm:p-12 lg:col-span-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_8px_32px_rgba(0,0,0,0.05)] opacity-0 translate-y-4"
        >
          <!-- Textura de Ruido (Premium Density) -->
          <div class="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="100%" height="100%" filter="url(#noiseFilterAboutMe)" />
            </svg>
          </div>

          <span
            class="relative z-10 font-mono text-xs tracking-[0.35em] text-[#111111]/30 uppercase"
            >02</span
          >

          <div class="relative z-10 mt-auto">
            <h3
              class="kinetic-text-process font-fancy mb-5 text-[clamp(1.5rem,2.5vw,2.25rem)] font-extrabold leading-tight text-[#111111] uppercase"
              style="perspective: 1000px;"
              v-html="card2TitleHtml"
            ></h3>
            <p
              class="kinetic-text-process card-text font-fancy text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-[#111111]/65"
              style="perspective: 1000px;"
              v-html="card2DescHtml"
            ></p>
          </div>

          <div
            class="relative z-10 mt-10 h-px w-16 bg-[#111111]/15 transition-all duration-500 group-hover:w-28 group-hover:bg-[#111111]/35"
          />
        </div>

        <!-- ═══════════════════════════════════════════════════════ -->
        <!-- CELDA 03 — Alta Costura Digital (Dark Solid Card)      -->
        <!-- ═══════════════════════════════════════════════════════ -->
        <div
          :ref="(el) => { if (el) bentoCards[2] = el as HTMLElement }"
          class="bento-card group relative flex flex-col justify-between overflow-hidden rounded-[clamp(1.5rem,4vw,2.5rem)] border border-white/5 bg-[#111111] p-10 sm:p-12 lg:col-span-4 opacity-0 translate-y-4"
        >
          <!-- Textura de Ruido -->
          <div class="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="100%" height="100%" filter="url(#noiseFilterAboutMe)" />
            </svg>
          </div>

          <div
            class="pointer-events-none absolute inset-0 rounded-[clamp(1.5rem,4vw,2.5rem)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style="background: radial-gradient(ellipse at 70% 70%, rgba(255,255,255,0.04) 0%, transparent 70%)"
          />

          <span
            class="relative z-10 font-mono text-xs tracking-[0.35em] text-white/25 uppercase"
            >03</span
          >

          <div class="relative z-10 mt-auto">
            <h3
              class="kinetic-text-process font-fancy mb-4 text-[clamp(1.3rem,2vw,1.9rem)] font-extrabold leading-tight text-white uppercase"
              style="perspective: 1000px;"
              v-html="card3TitleHtml"
            ></h3>
            <p
              class="kinetic-text-process card-text font-fancy text-[clamp(0.9rem,1.1vw,1.1rem)] leading-relaxed text-white/55"
              style="perspective: 1000px;"
              v-html="card3DescHtml"
            ></p>
          </div>

          <div
            class="relative z-10 mt-8 h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-24 group-hover:bg-white/30"
          />
        </div>

        <!-- ═══════════════════════════════════════════════════════ -->
        <!-- CELDA 04 — El Lanzamiento (Nigredo Glass Card)        -->
        <!-- ═══════════════════════════════════════════════════════ -->
        <div
          :ref="(el) => { if (el) bentoCards[3] = el as HTMLElement }"
          class="bento-card group relative flex flex-col justify-between overflow-hidden rounded-[clamp(1.5rem,4vw,2.5rem)] border border-white/10 bg-[#1A1A1A]/90 md:bg-[#1A1A1A]/40 md:backdrop-blur-[12px] p-10 sm:p-12 lg:col-span-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] opacity-0 translate-y-4"
        >
          <!-- Layer 1: Atmósfera Cinética (Light Trail) -->
          <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.35] mix-blend-luminosity grayscale">
            <div class="absolute inset-[-30%] bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200')] bg-cover bg-center filter blur-[40px] will-change-transform scale-110"></div>
          </div>

          <!-- Layer 2: Textura de Ruido -->
          <div class="pointer-events-none absolute inset-0 z-0 opacity-15 mix-blend-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="100%" height="100%" filter="url(#noiseFilterAboutMe)" />
            </svg>
          </div>

          <!-- Layer 3: Grid Milimétrico -->
          <div class="absolute inset-0 z-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(#111 1px, transparent 1px); background-size: 20px 20px;"></div>

          <!-- Layer 4: Shimmer Diagonal -->
          <div class="shimmer-glass-effect absolute top-0 bottom-0 -left-[100%] z-20 w-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <div
            class="pointer-events-none absolute inset-0 rounded-[clamp(1.5rem,4vw,2.5rem)] z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style="background: radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 70%)"
          />

          <span
            class="relative z-10 font-mono text-xs tracking-[0.35em] text-white/40 uppercase"
            >04</span
          >

          <div class="relative z-10 mt-auto">
            <h3
              class="kinetic-text-process font-fancy mb-4 text-[clamp(1.3rem,2vw,1.9rem)] font-extrabold leading-tight text-white uppercase"
              style="perspective: 1000px;"
              v-html="card4TitleHtml"
            ></h3>
            <p
              class="kinetic-text-process card-text font-fancy text-[clamp(0.9rem,1.1vw,1.1rem)] leading-relaxed text-[#E5E5E5]/70 mt-2"
              style="perspective: 1000px;"
              v-html="card4DescHtml"
            ></p>
          </div>

          <div
            class="relative z-10 mt-8 h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-24 group-hover:bg-white/30"
          />
        </div>
      </div>

      <!-- CTA Monolítico -->
      <div
        ref="ctaWrapperRef"
        class="mt-14 flex w-full justify-center sm:mt-20"
      >
        <a
          ref="ctaBtnRef"
          href="/discovery"
          @click.prevent="$router.push('/discovery')"
          class="cta-btn group relative max-w-[90vw] sm:max-w-3xl w-full overflow-hidden rounded-full bg-[#E7DBCB] px-6 py-5 sm:px-14 sm:py-9 text-center cursor-pointer select-none block"
          @mousemove="onCtaMouseMove"
          @mouseleave="onCtaMouseLeave"
        >
          <!-- Fill layer (dark) — scales from bottom on hover -->
          <span
            class="pointer-events-none absolute inset-0 rounded-full bg-[#0B0B0A] origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
            aria-hidden="true"
          />

          <!-- CTA text -->
          <span
            class="relative z-10 font-fancy text-[clamp(1.1rem,2vw,1.6rem)] font-extrabold uppercase text-[#0B0B0A] tracking-tight transition-colors duration-300 group-hover:text-white"
          >
            Inicia tu
            <span class="font-editorial text-[1.1em]">Evolución</span>
            hoy.
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGsap } from '@/composables/useGsap';
import { useMagnetic } from '@/composables/useMagnetic';
import { textSplitterIntoChar } from '@/functions';

gsap.registerPlugin(ScrollTrigger);

// ─── Text Splitter Refs ──────────────────────────────────────────────────────
const headerTitleHtml = ref('');
const card1TitleHtml = ref('');
const card1DescHtml = ref('');
const card2TitleHtml = ref('');
const card2DescHtml = ref('');
const card3TitleHtml = ref('');
const card3DescHtml = ref('');
const card4TitleHtml = ref('');
const card4DescHtml = ref('');

// ─── Refs ────────────────────────────────────────────────────────────────────
const sectionRef = ref<HTMLElement | null>(null);
const headerRef = ref<HTMLElement | null>(null);
const headerEyebrowRef = ref<HTMLElement | null>(null);
const headerTitleRef = ref<HTMLElement | null>(null);
const bentoCards = ref<HTMLElement[]>([]);
const ctaWrapperRef = ref<HTMLElement | null>(null);
const ctaBtnRef = ref<HTMLElement | null>(null);

// ─── GSAP scoped context ─────────────────────────────────────────────────────
const { ctx, initCtx } = useGsap();

// ─── Magnetic CTA ─────────────────────────────────────────────────────────────
const { onMouseMove: onCtaMouseMove, onMouseLeave: onCtaMouseLeave } =
  useMagnetic(ctaBtnRef, 0.18);

// ─── Pre-build kinetic HTML (before DOM mount) ───────────────────────────────
onBeforeMount(() => {
  // Header
  headerTitleHtml.value =
    textSplitterIntoChar('El Método ', true, false) +
    `<span class="font-editorial text-white/80">${textSplitterIntoChar('NODOTO.', true, false)}</span>`;

  // Card 01 — Estrategia
  card1TitleHtml.value = textSplitterIntoChar('Estrategia', true, false);
  card1DescHtml.value =
    textSplitterIntoChar('Antes de diseñar un solo píxel, diseccionamos tu modelo de negocio. Definimos una arquitectura con un único objetivo: la ', true, false) +
    `<span class="font-editorial text-[1.1em] text-white tracking-normal" style="display:inline-block; margin-inline: 0.2rem;">${textSplitterIntoChar('dominación absoluta', true, false)}</span>` +
    textSplitterIntoChar(' de tu mercado.', true, false);

  // Card 02 — Psicología de Conversión
  card2TitleHtml.value = textSplitterIntoChar('Psicología de Conversión', true, false);
  card2DescHtml.value =
    textSplitterIntoChar('No hacemos páginas estáticas. Construimos embudos persuasivos diseñados para transformar tráfico frío en ', true, false) +
    `<span class="font-editorial text-[1.05em] text-[#111111] tracking-normal" style="display:inline-block; margin-inline: 0.2rem;">${textSplitterIntoChar('clientes de alto valor', true, false)}</span>` +
    textSplitterIntoChar('.', true, false);

  // Card 03 — Alta Costura Digital
  card3TitleHtml.value = textSplitterIntoChar('Alta Costura Digital', true, false);
  card3DescHtml.value =
    textSplitterIntoChar('Animaciones fluidas y rendimiento extremo que proyectan una imagen de ', true, false) +
    `<span class="font-editorial text-[1.05em] text-white tracking-normal" style="display:inline-block; margin-inline: 0.2rem;">${textSplitterIntoChar('lujo innegable', true, false)}</span>` +
    textSplitterIntoChar('.', true, false);

  // Card 04 — El Lanzamiento
  card4TitleHtml.value = textSplitterIntoChar('El Lanzamiento', true, false);
  card4DescHtml.value =
    textSplitterIntoChar('Tu marca deja de competir por precio y empieza a cobrar por ', true, false) +
    `<span class="font-editorial text-[1.1em] text-white tracking-normal" style="display:inline-block; margin-inline: 0.2rem;">${textSplitterIntoChar('autoridad', true, false)}</span>` +
    textSplitterIntoChar('.', true, false);
});

// ─── Animations ──────────────────────────────────────────────────────────────
onMounted(() => {
  if (!sectionRef.value) return;
  initCtx(sectionRef);

  // Desktop-only flag: scrub-driven animations are too heavy on mobile
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  ctx.value!.add(() => {
    // ═══════════════════════════════════
    // 1. EYEBROW — soft fade in
    // ═══════════════════════════════════
    gsap.to(headerEyebrowRef.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerEyebrowRef.value,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });

    // ═══════════════════════════════════
    // 2. HEADER TITLE — scrub-driven letter reveal
    // ═══════════════════════════════════
    const headerLetters = headerTitleRef.value?.querySelectorAll('.letters');
    if (headerLetters && headerLetters.length) {
      gsap.set(headerLetters, {
        y: '120%',
        rotateX: -20,
        opacity: 0,
        willChange: 'transform, opacity',
      });

      gsap.to(headerLetters, {
        y: '0%',
        rotateX: 0,
        opacity: 1,
        stagger: 0.008,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: isDesktop
          ? {
              trigger: headerTitleRef.value,
              start: 'top 85%',
              end: 'bottom 60%',
              scrub: 1.2,
            }
          : {
              trigger: headerTitleRef.value,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
      });
    }

    // ═══════════════════════════════════
    // 3. BENTO CARDS — Staggered Entrance (AuthorityBridge pattern)
    // ═══════════════════════════════════
    const cards = bentoCards.value.filter(Boolean);

    if (cards.length) {
      // Main card entrance (opacity + y)
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.3,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Per-card kinetic letter reveal
      cards.forEach((card, i) => {
        if (!card) return;
        const kineticLetters = card.querySelectorAll('.kinetic-text-process .letters');

        if (kineticLetters.length > 0) {
          gsap.set(kineticLetters, {
            y: '120%',
            rotateX: -20,
            opacity: 0,
            willChange: 'transform, opacity',
          });

          gsap.to(kineticLetters, {
            y: '0%',
            rotateX: 0,
            opacity: 1,
            stagger: 0.015,
            duration: 1.2,
            delay: 0.4 + (i * 0.2),
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.value,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      // ═══════════════════════════════════
      // 4. PARALLAX on glass cards (01 & 04) — desktop only (scrub kills mobile)
      // ═══════════════════════════════════
      if (isDesktop) {
        const glassCards = [cards[0], cards[3]].filter(Boolean);
        if (glassCards.length) {
          gsap.fromTo(glassCards,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }
      }
    }

    // ═══════════════════════════════════
    // 5. SHIMMER DE CRISTAL (Glass Cards)
    // ═══════════════════════════════════
    // Shimmer: desktop only (infinite repeat burns mobile GPU budget)
    if (isDesktop) {
      const glassShimmers = sectionRef.value?.querySelectorAll('.shimmer-glass-effect');
      if (glassShimmers && glassShimmers.length) {
        gsap.to(glassShimmers, {
          x: '250%',
          duration: 2.5,
          ease: 'power2.inOut',
          repeat: -1,
          repeatDelay: 5,
        });
      }
    }

    // ═══════════════════════════════════
    // 6. CTA REVEAL
    // ═══════════════════════════════════
    gsap.from(ctaWrapperRef.value, {
      yPercent: 60,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: ctaWrapperRef.value,
        start: 'top 95%',
        toggleActions: 'play none none reverse',
      },
    });
  });

    // We've removed animateAboutMeSectionLeave here as it was causing overlap and gaps
    // with the newly positioned Works and Testimonials sections.
});
</script>

<style scoped>
/* ═══════════════════════════════════ */
/* KINETIC TEXT PERFORMANCE           */
/* ═══════════════════════════════════ */

.kinetic-text-process :deep(.letters) {
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

.kinetic-text-process :deep(.text-nowrap) {
  overflow: clip;
  display: inline-block;
  padding-top: 0.1em;
  padding-bottom: 0.25em;
  margin-bottom: -0.35em;
}
</style>
