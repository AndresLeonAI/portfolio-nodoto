<template>
  <!-- ═══════════════════════════════════════════════════════════════════════ -->
  <!-- DISCOVERY VIEW — Split Layout + Monumental Footer                     -->
  <!-- ═══════════════════════════════════════════════════════════════════════ -->
  <div class="relative w-full">
    <!-- SECTION 1: Split Hero — Light / Calendar -->
    <section
      ref="sectionRef"
      class="relative z-10 min-h-screen w-full overflow-hidden bg-[#E7DBCB] pt-32 pb-20 lg:pt-40 lg:pb-28 rounded-b-[2rem] sm:rounded-b-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] mb-[100vh]"
    >
      <!-- Atmospheric noise (ultra-subtle on light) -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.018]"
        style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"
      />

      <!-- Subtle radial warmth -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(140,140,115,0.06)_0%,transparent_70%)]" />
        <div class="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(140,140,115,0.04)_0%,transparent_70%)]" />
      </div>

      <div class="relative z-10 mx-auto max-w-[100rem] px-[3%]">
        <!-- Back navigation -->
        <div ref="backRef" class="mb-12">
          <a
            href="/"
            @click.prevent="$router.push('/')"
            class="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[#111111]/35 uppercase transition-colors duration-300 hover:text-[#111111]/70"
          >
            <span class="inline-block w-6 h-px bg-[#111111]/25 transition-all duration-500 group-hover:w-10 group-hover:bg-[#111111]/60" />
            Volver al inicio
          </a>
        </div>

        <!-- Split Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-[100rem] mx-auto px-4 sm:px-8 pt-40 pb-32">
          <!-- ═══════════════════════════════════════════════ -->
          <!-- LEFT: Copy Column                              -->
          <!-- ═══════════════════════════════════════════════ -->
          <div class="col-span-1 lg:col-span-5 lg:sticky lg:top-[20vh] flex flex-col gap-6">
            
            <div ref="heroTextRef" class="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-10 lg:p-12 border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <!-- Eyebrow -->
              <p
                class="mb-8 font-mono text-[0.65rem] tracking-[0.3em] text-[#111111]/40 uppercase"
              >
                ( Discovery Session )
              </p>

              <!-- Title -->
              <h1
                class="kinetic-hero-text mb-6 font-fancy text-[clamp(2.5rem,5vw,4.5rem)] lg:text-[4rem] font-extrabold leading-[0.92] tracking-tight text-[#111111]"
                style="perspective: 1000px;"
                v-html="heroTitleHtml"
              ></h1>

              <!-- Body copy -->
              <p
                class="kinetic-hero-text text-[clamp(0.95rem,1.15vw,1.15rem)] leading-relaxed text-[#111111]/50 max-w-md"
                style="perspective: 1000px;"
                v-html="heroDesc1Html"
              ></p>

              <p 
                class="kinetic-hero-text mt-4 max-w-[38ch] text-[clamp(0.9rem,1.1vw,1.05rem)] leading-[1.75] text-[#111111]/40"
                style="perspective: 1000px;"
                v-html="heroDesc2Html"
              ></p>
            </div>

            <!-- Specs Pill -->
            <div ref="heroSpecsRef" class="hero-specs bg-[#111111] text-white rounded-full px-8 py-6 flex items-center justify-center border border-white/10 shadow-2xl">
              <p class="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/70 text-center">
                Sin Compromiso <span class="mx-3 text-white/30">·</span> 30 MIN <span class="mx-3 text-white/30">·</span> 100% Estratégico
              </p>
            </div>
          </div>

          <!-- ═══════════════════════════════════════════════ -->
          <!-- RIGHT: Calendar Column                         -->
          <!-- ═══════════════════════════════════════════════ -->
          <div class="lg:col-span-7">
            <div
              ref="calendarWrapperRef"
              class="calendar-wrapper w-full h-full min-h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <!-- Subtle top accent line -->
              <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C8C73]/30 to-transparent z-10" />

              <iframe
                src="https://cal.com/nodoto/30min"
                class="w-full h-full min-h-[700px] border-none"
                loading="lazy"
                title="Agenda tu Discovery Session con NODOTO"
              />
            </div>

            <!-- Calendar caption -->
            <p ref="calendarCaptionRef" class="mt-4 text-center font-mono text-[0.6rem] tracking-[0.3em] text-[#111111]/20 uppercase">
              Powered by Cal.com · Zona horaria detectada automáticamente
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════ -->
    <!-- SECTION 2: Monumental Footer — Dark Glass                            -->
    <!-- ═══════════════════════════════════════════════════════════════════════ -->
    <footer
      ref="footerRef"
      class="fixed left-0 bottom-0 h-screen w-full bg-[#0B0B0A] flex flex-col justify-end -z-10 py-12 sm:py-20"
    >
      <!-- Atmospheric mesh gradient -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-[20%] top-[15%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(140,140,115,0.06)_0%,transparent_70%)]" />
        <div class="absolute -right-[15%] bottom-[-10%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,transparent_65%)]" />
      </div>

      <!-- Noise grain -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"
      />

      <div class="relative z-10 mx-auto w-full max-w-[100rem] px-[3%] flex flex-col h-full justify-between">
        <!-- HUD Details -->
        <div ref="hudRef" class="flex items-start justify-between mt-12 sm:mt-24 mb-16 sm:mb-24">
          <div class="flex flex-col gap-1 opacity-0" ref="hudLeftRef">
            <p class="font-mono text-[0.6rem] tracking-[0.4em] text-white/20 uppercase sm:text-[0.65rem]">
              NODOTO / Sistema Restringido
            </p>
            <p class="font-mono text-[0.55rem] tracking-[0.3em] text-white/12 uppercase">
              Discovery Protocol v2.0
            </p>
          </div>
          <div class="flex flex-col items-end gap-1 opacity-0" ref="hudRightRef">
            <p class="font-mono text-[0.6rem] tracking-[0.4em] text-white/20 uppercase sm:text-[0.65rem]">
              © {{ new Date().getFullYear() }}
            </p>
            <p class="font-mono text-[0.55rem] tracking-[0.3em] text-white/12 uppercase text-right">
              Bogotá, Colombia — <span class="text-white/40 font-bold">{{ currentTime }}</span>
            </p>
          </div>
        </div>

        <div>
          <!-- Divider -->
          <div ref="dividerRef" class="h-px w-full bg-white/5 mb-12 sm:mb-16 origin-left scale-x-0" />

          <!-- Contact info row -->
          <div ref="contactRowRef" class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16 sm:mb-24 opacity-0">
            <div>
              <p class="font-mono text-[0.65rem] tracking-[0.35em] text-white/25 uppercase mb-2">
                Contacto Directo
              </p>
              <a
                href="mailto:contacto@nodoto.agency"
                class="font-fancy text-[clamp(1rem,1.5vw,1.3rem)] font-medium text-white/50 transition-colors duration-300 hover:text-white/80"
              >
                contacto@nodoto.agency
              </a>
            </div>
            <a
              href="/"
              @click.prevent="$router.push('/')"
              class="group inline-flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] text-white/25 uppercase transition-colors duration-300 hover:text-white/60"
            >
              Volver al inicio
              <span class="inline-block w-6 h-px bg-white/20 transition-all duration-500 group-hover:w-10 group-hover:bg-white/50" />
            </a>
          </div>

          <!-- ════════════════════════════════════════════ -->
          <!-- MASSIVE TYPOGRAPHIC ELEMENT                 -->
          <!-- ════════════════════════════════════════════ -->
          <div ref="massiveTextWrapper" class="overflow-hidden">
            <h2
              ref="massiveTextRef"
              class="font-editorial text-[clamp(5rem,15vw,18rem)] leading-[0.85] tracking-tighter select-none transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:tracking-widest hover:opacity-100 opacity-80 cursor-pointer"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.9) 0%,
                  rgba(255, 255, 255, 0.6) 40%,
                  rgba(255, 255, 255, 0.15) 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              "
            >
              Agendar.
            </h2>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { textSplitterIntoChar } from '@/functions';

gsap.registerPlugin(ScrollTrigger);

// ─── Reactive Text HTML ──────────────────────────────────────────────────────
const heroTitleHtml = ref('');
const heroDesc1Html = ref('');
const heroDesc2Html = ref('');

// ─── Time & Clock Engine ─────────────────────────────────────────────────────
const currentTime = ref('');
let clockInterval: ReturnType<typeof setInterval>;

const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

// ─── Refs ────────────────────────────────────────────────────────────────────
const sectionRef = ref<HTMLElement | null>(null);
const backRef = ref<HTMLElement | null>(null);
const heroTextRef = ref<HTMLElement | null>(null);
const heroSpecsRef = ref<HTMLElement | null>(null);
const calendarWrapperRef = ref<HTMLElement | null>(null);
const calendarCaptionRef = ref<HTMLElement | null>(null);

// Footer refs
const footerRef = ref<HTMLElement | null>(null);
const hudLeftRef = ref<HTMLElement | null>(null);
const hudRightRef = ref<HTMLElement | null>(null);
const dividerRef = ref<HTMLElement | null>(null);
const contactRowRef = ref<HTMLElement | null>(null);
const massiveTextWrapper = ref<HTMLElement | null>(null);
const massiveTextRef = ref<HTMLElement | null>(null);

// ─── GSAP Context ────────────────────────────────────────────────────────────
let ctx: gsap.Context | null = null;

onBeforeMount(() => {
  heroTitleHtml.value = 
    `<span class="block">${textSplitterIntoChar('Tu', true, false)}</span>` +
    `<span class="font-editorial block">${textSplitterIntoChar('Evolución', true, false)}</span>` +
    `<span class="block">${textSplitterIntoChar('Comienza Aquí.', true, false)}</span>`;

  heroDesc1Html.value = 
    textSplitterIntoChar('Selecciona el horario que mejor se adapte a tu agenda. En esta sesión de ', true, false) +
    `<span class="font-editorial text-[1.05em] text-[#111111] leading-none" style="display:inline-block; margin-inline: 0.15rem; transform: translateY(1px);">${textSplitterIntoChar('30 minutos', true, false)}</span>` +
    textSplitterIntoChar(', auditaremos tu arquitectura digital y trazaremos la hoja de ruta hacia tu dominancia en el mercado.', true, false);

  heroDesc2Html.value = textSplitterIntoChar('Sin compromisos, solo claridad absoluta.', true, false);
});

onMounted(() => {
  // Start clock
  updateClock();
  clockInterval = setInterval(updateClock, 1000);

  ctx = gsap.context(() => {
    // ═══════════════════════════════════════════════
    // SPLIT HERO ENTRANCE (onMounted — NO ScrollTrigger)
    // ═══════════════════════════════════════════════

    const tl = gsap.timeline({ delay: 0.2 });

    // Entrance: Back link
    tl.from(backRef.value, {
      opacity: 0,
      y: 10,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Entrance: Hero Text block
    const heroLetters = heroTextRef.value?.querySelectorAll('.kinetic-hero-text .letters');
    if (heroLetters && heroLetters.length) {
      gsap.set(heroLetters, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
      
      tl.to(heroLetters, {
        y: '0%',
        rotateX: 0,
        opacity: 1,
        stagger: 0.015,
        duration: 1.2,
        ease: 'power4.out',
      }, "-=0.4");
    } else {
      // Fallback
      tl.from(heroTextRef.value, { 
        y: 50, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'expo.out' 
      }, "-=0.6");
    }

    // Entrance: Specs pill & caption
    tl.from([heroSpecsRef.value, calendarCaptionRef.value], {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'expo.out'
    }, "-=0.6");

    // Entrance: Calendar wrapper
    tl.from(calendarWrapperRef.value, { 
      y: 40, 
      opacity: 0, 
      scale: 0.98, 
      duration: 1.5, 
      ease: 'power4.out' 
    }, "-=0.8");

    // ═══════════════════════════════════════════════
    // MONUMENTAL FOOTER — ScrollTrigger orchestration
    // ═══════════════════════════════════════════════

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.value,
        // Al usar un footer sticky, la animación se debe lanzar cuando 
        // el usuario descubre el final de la sección principal
        start: 'top 80%', 
        toggleActions: 'play none none reverse',
      },
    });

    footerTl.to([hudLeftRef.value, hudRightRef.value], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    });

    footerTl.to(
      dividerRef.value,
      {
        scaleX: 1,
        duration: 1.4,
        ease: 'expo.out',
      },
      '-=0.7'
    );

    footerTl.to(
      contactRowRef.value,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.8'
    );

    gsap.set(massiveTextRef.value, { yPercent: 100 });

    gsap.to(massiveTextRef.value, {
      yPercent: 0,
      duration: 1.8,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: massiveTextWrapper.value,
        start: 'bottom bottom', // Ajustado para un reveal más dramático al final
        toggleActions: 'play none none reverse',
      },
    });
  });
});

onUnmounted(() => {
  if (clockInterval) clearInterval(clockInterval);
  ctx?.revert();
});
</script>

<style scoped>
/* Ensure iframe loads without flash */
iframe {
  color-scheme: light;
}

/* ═══════════════════════════════════ */
/* KINETIC TEXT PERFORMANCE           */
/* ═══════════════════════════════════ */
.kinetic-hero-text :deep(.letters) {
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

.kinetic-hero-text :deep(.text-nowrap) {
  overflow: clip;
  display: inline-block;
  padding-top: 0.1em;
  padding-bottom: 0.25em;
  margin-bottom: -0.35em;
}
</style>

