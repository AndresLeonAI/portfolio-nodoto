<template>
  <section
    ref="sectionRef"
    id="faq-section"
    class="relative w-full overflow-hidden bg-[#F9F9F9] py-24 sm:py-32 lg:py-40"
  >
    <!-- Atmospheric noise layer (ultra-subtle on light) -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.018]"
      style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"
    />

    <div class="relative z-10 mx-auto max-w-[100rem] px-[3%]">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

        <!-- ═══════════════════════════════════════════════════════════════ -->
        <!-- LEFT: Sticky Header Column                                     -->
        <!-- ═══════════════════════════════════════════════════════════════ -->
        <div class="lg:col-span-4">
          <div ref="stickyRef" class="lg:sticky lg:top-[20vh]">
            <p
              class="mb-5 font-mono text-[0.7rem] tracking-[0.45em] text-[#111111]/30 uppercase sm:text-xs"
            >
              ( FAQ )
            </p>
            <h2
              class="font-fancy text-[clamp(2.8rem,5.5vw,5.5rem)] font-extrabold leading-[0.88] tracking-tight text-[#111111]"
            >
              <span class="block overflow-hidden pb-[0.1em] mb-[-0.1em]">
                <span ref="titleLine1Ref" class="block will-change-transform">Claridad</span>
              </span>
              <span class="block overflow-hidden pb-[0.2em] mb-[-0.2em]">
                <span ref="titleLine2Ref" class="font-editorial font-normal text-[#111111]/40 block will-change-transform">Absoluta.</span>
              </span>
            </h2>
            <p
              ref="descriptionRef"
              class="mt-8 max-w-[28ch] text-[clamp(0.95rem,1.15vw,1.15rem)] leading-relaxed text-[#111111]/50 will-change-[opacity,transform]"
            >
              Destruimos la incertidumbre. Si tienes dudas sobre invertir en tu
              dominancia digital, aquí están las respuestas.
            </p>

            <!-- Decorative line -->
            <div ref="lineRef" class="mt-10 h-px w-20 bg-[#111111]/10 origin-left will-change-transform" />
          </div>
        </div>

        <!-- ═══════════════════════════════════════════════════════════════ -->
        <!-- RIGHT: Accordion Column                                        -->
        <!-- ═══════════════════════════════════════════════════════════════ -->
        <div class="lg:col-span-8">
          <div class="flex flex-col">
            <div
              v-for="(item, i) in faqItems"
              :key="i"
              ref="el => { if (el) accordionRefs[i] = el as HTMLElement }"
              class="faq-item border-t border-[#111111]/10 will-change-[padding,background-color]"
              :class="{ 'border-b': i === faqItems.length - 1 }"
              @mouseenter="onFaqMouseEnter(i)"
              @mouseleave="onFaqMouseLeave(i)"
            >
              <!-- Question trigger -->
              <button
                class="group flex w-full cursor-pointer items-start justify-between gap-6 py-8 text-left sm:py-10"
                @click="toggle(i)"
              >
                <!-- Numbering + Question -->
                <div class="flex items-start gap-5 sm:gap-8">
                  <span
                    class="mt-1 font-mono text-[0.7rem] tracking-[0.25em] text-[#111111]/25 sm:text-xs"
                  >
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>
                  <h3
                    class="font-fancy text-[clamp(1.15rem,1.8vw,1.65rem)] font-bold leading-snug tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#111111]/60"
                  >
                    {{ item.question }}
                  </h3>
                </div>

                <!-- Toggle icon (+ rotates to ×) -->
                <div
                  class="relative mt-1.5 flex h-8 w-8 flex-shrink-0 items-center justify-center"
                >
                  <!-- Horizontal bar -->
                  <span
                    :ref="el => { if (el) horizBars[i] = el as HTMLElement }"
                    class="absolute h-[1.5px] w-4 bg-[#111111]/60 will-change-transform"
                  />
                  <!-- Vertical bar (rotates to 0 when open) -->
                  <span
                    :ref="el => { if (el) vertBars[i] = el as HTMLElement }"
                    class="absolute h-[1.5px] w-4 bg-[#111111]/60 will-change-transform"
                  />
                </div>
              </button>

              <!-- Answer container (GSAP-animated height) -->
              <div
                :ref="el => { if (el) answerRefs[i] = el as HTMLElement }"
                class="overflow-hidden"
                style="height: 0px"
              >
                <div class="pb-10 pl-0 pr-4 sm:pb-12 sm:pl-[3.25rem]">
                  <p
                    :ref="el => { if (el) answerTextRefs[i] = el as HTMLElement }"
                    class="font-fancy max-w-[55ch] text-[clamp(0.95rem,1.2vw,1.15rem)] leading-[1.75] text-[#111111]/55 will-change-[opacity,transform]"
                    v-html="item.answer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════════ -->
    <!-- CTA MONOLÍTICO                                                     -->
    <!-- ═══════════════════════════════════════════════════════════════════ -->
    <div
      ref="ctaRef"
      class="relative z-10 mx-auto mt-20 max-w-[100rem] px-[3%] sm:mt-28"
    >
      <!-- Thin divider -->
      <div class="mb-14 h-px w-full bg-[#111111]/10 sm:mb-16" />

      <div class="flex flex-col items-center gap-6 text-center sm:gap-8">
        <!-- Micro-label -->
        <p class="font-mono text-[0.7rem] tracking-[0.4em] text-[#111111]/30 uppercase sm:text-xs">
          ¿Listo para dominar tu mercado?
        </p>

        <!-- CTA Button -->
        <a
          ref="ctaBtnRef"
          href="https://wa.me/967775367671"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex w-full max-w-2xl cursor-pointer select-none items-center justify-center overflow-hidden rounded-full bg-[#111111] px-10 py-7 text-center sm:px-14 sm:py-9"
          @mousemove="onCtaMouseMove"
          @mouseleave="onCtaMouseLeave"
        >
          <!-- Fill layer — #F9F9F9 sweeps up from bottom on hover -->
          <span
            class="pointer-events-none absolute inset-0 rounded-full bg-[#F9F9F9] origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
            aria-hidden="true"
          />

          <!-- Label -->
          <span
            class="relative z-10 font-fancy text-[clamp(1rem,1.8vw,1.5rem)] font-extrabold uppercase tracking-tight text-[#F9F9F9] transition-colors duration-300 group-hover:text-[#111111]"
          >
            Agenda tu
            <span class="font-editorial text-[1.08em]">Auditoría Web</span>
            GRATIS
          </span>

          <!-- Arrow -->
          <span
            class="relative z-10 ml-4 text-[#F9F9F9]/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#111111]/50"
            aria-hidden="true"
          >→</span>
        </a>

        <!-- Trust anchor -->
        <p class="font-fancy text-xs text-[#111111]/25 tracking-wide">
          Sin compromiso · Sin contratos trampa · 100% estratégico
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGsap } from '@/composables/useGsap';
import { useMagnetic } from '@/composables/useMagnetic';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: '¿Usan plantillas pre-diseñadas para acelerar el desarrollo?',
    answer:
      "Absolutamente no. Cada ecosistema se forja desde cero. Construimos arquitecturas <span class='font-editorial text-[1.05em] text-[#111111]'>ultra-personalizadas</span> basadas en la psicología de tu cliente. Las plantillas son para aficionados; nosotros hacemos Alta Costura Digital.",
  },
  {
    question:
      '¿Cómo garantizan que un diseño tan estético realmente genere ventas?',
    answer:
      "El diseño sin estrategia es solo decoración. Nuestra metodología fusiona una estética premium con verdadera <span class='font-editorial text-[1.05em] text-[#111111]'>ingeniería de conversión</span>. Diseccionamos tu nicho para crear embudos que guían al usuario hacia la compra sin ningún tipo de fricción.",
  },
  {
    question:
      '¿Las animaciones complejas afectarán la velocidad de carga de mi web?',
    answer:
      "Todo lo contrario. Nuestro stack tecnológico de élite está optimizado para un <span class='font-editorial text-[1.05em] text-[#111111]'>rendimiento implacable</span>. Obtienes animaciones fluidas a 120 FPS sin sacrificar milisegundos de carga. Google y tus usuarios lo amarán por igual.",
  },
  {
    question:
      '¿Cómo es la dinámica de trabajo con ustedes frente a otras agencias?',
    answer:
      "No actuamos como simples proveedores, operamos como tu <span class='font-editorial text-[1.05em] text-[#111111]'>socio estratégico</span>. Mantenemos una comunicación directa y sin intermediarios, asegurando que nuestra visión técnica se alinee perfectamente con tus objetivos de facturación.",
  },
];

// ─── Refs ────────────────────────────────────────────────────────────────────
const sectionRef = ref<HTMLElement | null>(null);
const stickyRef = ref<HTMLElement | null>(null);
const accordionRefs = ref<HTMLElement[]>([]);
const answerRefs = ref<HTMLElement[]>([]);
const openIndex = ref<number | null>(null);
const ctaRef = ref<HTMLElement | null>(null);
const ctaBtnRef = ref<HTMLElement | null>(null);

const titleLine1Ref = ref<HTMLElement | null>(null);
const titleLine2Ref = ref<HTMLElement | null>(null);
const descriptionRef = ref<HTMLElement | null>(null);
const lineRef = ref<HTMLElement | null>(null);

const horizBars = ref<HTMLElement[]>([]);
const vertBars = ref<HTMLElement[]>([]);
const answerTextRefs = ref<HTMLElement[]>([]);

// ─── GSAP Context ────────────────────────────────────────────────────────────
const { ctx, initCtx } = useGsap();

// ─── Magnetic CTA ─────────────────────────────────────────────────────────────
const { onMouseMove: onCtaMouseMove, onMouseLeave: onCtaMouseLeave } =
  useMagnetic(ctaBtnRef, 0.15);

// ─── Accordion Logic & Interactions ──────────────────────────────────────────
const onFaqMouseEnter = (index: number) => {
  const el = accordionRefs.value[index];
  if (el) gsap.to(el, { backgroundColor: 'rgba(0,0,0,0.015)', paddingLeft: '8px', duration: 0.35, ease: 'power2.out' });
};

const onFaqMouseLeave = (index: number) => {
  const el = accordionRefs.value[index];
  if (el) gsap.to(el, { backgroundColor: 'transparent', paddingLeft: '0px', duration: 0.35, ease: 'power2.out' });
};

const toggle = (index: number) => {
  const targetEl = answerRefs.value[index];
  const targetVertBar = vertBars.value[index];
  const targetHorizBar = horizBars.value[index];
  const targetText = answerTextRefs.value[index];
  
  if (!targetEl) return;

  // If clicking the currently open item → close it
  if (openIndex.value === index) {
    gsap.to(targetEl, { height: 0, duration: 0.55, ease: 'expo.inOut', overwrite: true });
    if (targetVertBar) gsap.to(targetVertBar, { rotation: 90, scaleY: 1, duration: 0.5, ease: 'back.out(1.7)', overwrite: true });
    if (targetHorizBar) gsap.to(targetHorizBar, { rotation: 0, duration: 0.5, ease: 'back.out(1.7)', overwrite: true });
    if (targetText) gsap.to(targetText, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.inOut', overwrite: true });
    
    openIndex.value = null;
    return;
  }

  // Close previously open item
  if (openIndex.value !== null) {
    const prevEl = answerRefs.value[openIndex.value];
    const prevVertBar = vertBars.value[openIndex.value];
    const prevHorizBar = horizBars.value[openIndex.value];
    const prevText = answerTextRefs.value[openIndex.value];

    if (prevEl) gsap.to(prevEl, { height: 0, duration: 0.55, ease: 'expo.inOut', overwrite: true });
    if (prevVertBar) gsap.to(prevVertBar, { rotation: 90, scaleY: 1, duration: 0.5, ease: 'back.out(1.7)', overwrite: true });
    if (prevHorizBar) gsap.to(prevHorizBar, { rotation: 0, duration: 0.5, ease: 'back.out(1.7)', overwrite: true });
    if (prevText) gsap.to(prevText, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.inOut', overwrite: true });
  }

  // Open the clicked item — animate to scrollHeight
  const fullHeight = targetEl.scrollHeight;
  gsap.to(targetEl, { height: fullHeight, duration: 0.65, ease: 'expo.inOut', overwrite: true });
  
  if (targetVertBar) gsap.to(targetVertBar, { rotation: 0, scaleY: 0, duration: 0.6, ease: 'back.out(1.7)', overwrite: true });
  if (targetHorizBar) gsap.to(targetHorizBar, { rotation: 180, duration: 0.6, ease: 'back.out(1.7)', overwrite: true });
  if (targetText) gsap.fromTo(targetText, 
    { opacity: 0, y: -15 }, 
    { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: 'power3.out', overwrite: true }
  );

  openIndex.value = index;
};

// ─── Scroll Animations ──────────────────────────────────────────────────────
onMounted(() => {
  initCtx(sectionRef);

  ctx.value!.add(() => {
    // ── GSAP-owned initial states (no Tailwind transform conflicts) ──
    if (titleLine1Ref.value && titleLine2Ref.value) {
      gsap.set([titleLine1Ref.value, titleLine2Ref.value], { yPercent: 100 });
    }
    if (descriptionRef.value) {
      gsap.set(descriptionRef.value, { opacity: 0, y: 32 });
    }
    if (lineRef.value) {
      gsap.set(lineRef.value, { scaleX: 0 });
    }
    vertBars.value.forEach(bar => { if (bar) gsap.set(bar, { rotation: 90 }); });
    answerTextRefs.value.forEach(el => { if (el) gsap.set(el, { opacity: 0, y: -16 }); });

    // 1. Sticky header reveal - Orchestrated Masked Title
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyRef.value,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      }
    });

    if (titleLine1Ref.value && titleLine2Ref.value) {
      headerTl.to([titleLine1Ref.value, titleLine2Ref.value], {
        yPercent: 0,
        duration: 1.3,
        stagger: 0.12,
        ease: 'expo.out'
      });
    }

    if (descriptionRef.value) {
      headerTl.to(descriptionRef.value, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.9');
    }

    if (lineRef.value) {
      headerTl.to(lineRef.value, {
        scaleX: 1,
        duration: 1.2,
        ease: 'expo.out'
      }, '-=0.8');
    }

    // 2. Accordion items cascade
    const items = accordionRefs.value.filter(Boolean);
    if (items.length) {
      gsap.from(items, {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: items[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // 3. Apple Pro CTA reveal
    if (ctaRef.value) {
      gsap.from(ctaRef.value, {
        y: 80,
        scale: 0.96,
        opacity: 0,
        duration: 1.4,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: ctaRef.value,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  });
});
</script>
