<template>
  <section
    ref="sectionRef"
    id="services"
    class="padding-x mb-20 overflow-x-clip"
  >
    <div class="flex w-full flex-col">
      <h3
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold uppercase leading-[0.9]"
      ></h3>

      <div
        id="services-text"
        class="grid-gap text-flax-smoke-300 mt-8 sm:mt-[5%] grid grid-cols-12 gap-y-6 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-full md:col-span-4 md:col-start-4 text-center text-nowrap"
        >
          ( NUESTRA INGENIERÍA )
        </p>
        <p
          class="heading-4 font-fancy col-span-full md:col-span-5 w-full text-balance sm:font-semibold leading-snug"
        >
          Las interfaces de alta conversión no son casualidad; son arquitectura cognitiva. Forjamos ecosistemas digitales donde la fricción muere y el ROI escala.
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="mt-12 flex flex-col justify-between gap-y-16">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          :image="card.image"
          class="border-flax-smoke-500/50 sticky border-t bg-[#0B0B0A]"
          :class="getStyle(index)"
        />
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- CTA — Conversion Pillar (Activates Discovery flow)             -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div
      class="mt-24 sm:mt-32 mb-8 flex w-full justify-center px-4"
    >
      <button
        type="button"
        @click="navigateToDiscovery"
        class="group relative inline-flex max-w-[90vw] sm:max-w-xl w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#F9F9F9] px-6 py-4 sm:px-16 sm:py-7 min-h-[56px] transition-transform duration-500 ease-out hover:scale-[1.02] focus:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F9F9F9]"
      >
        <span
          class="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[#0B0B0A] transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100 group-focus:scale-y-100"
          aria-hidden="true"
        />

        <span
          class="relative z-10 flex flex-wrap items-center justify-center gap-1 sm:gap-2 font-display font-bold uppercase tracking-widest text-[#0B0B0A] transition-colors duration-500 group-hover:text-[#F9F9F9] group-focus:text-[#F9F9F9] text-sm sm:text-lg lg:text-xl"
        >
          Activa tu Metodología
          <span
            class="font-editorial lowercase tracking-normal translate-y-[1px] transition-colors duration-500 text-xl sm:text-2xl lg:text-3xl"
          >
            — discovery
          </span>
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { useGsap } from '@/composables/useGsap';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  // Service images
  import imgUxDesign from '@/assets/images/services/ux-design.png';
  import imgCustomBespoke from '@/assets/images/services/custom-bespoke.png';
  import imgDevVanguard from '@/assets/images/services/dev-vanguard.png';

  const sectionRef = ref<HTMLElement | null>(null);
  const whatIDo = ref('My services /');

  const { ctx, initCtx } = useGsap();

  const servicesCardProps = [
    {
      title: 'Fricción Cero (UX/UI)',
      body: 'El usuario nunca debe pensar a dónde ir. Eliminamos todo obstáculo entre el deseo del cliente y la acción de compra mediante arquitecturas de flujo clínico.',
      headings: ['Arquitectura Cognitiva', 'Flujos sin Resistencia', 'Motion de Lujo'],
      shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
      image: imgUxDesign,
    },
    {
      title: 'Personalización Absoluta',
      body: 'Rechazamos las plantillas. Entendemos el ADN único de tu negocio para construir ecosistemas digitales a medida, sirviendo como el marco silencioso para tu autoridad.',
      headings: [
        'Diseño Bespoke',
        'Sistemas Escalables',
        'Stealth Wealth',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
  </svg>
  `,
      image: imgCustomBespoke,
    },
    {
      title: 'Desarrollo de Vanguardia',
      body: 'Un segundo de retraso destroza ventas. Desplegamos código implacable y tecnología moderna para lograr carga milimétrica y rendimiento de grado militar.',
      headings: [
        'Performance Inflexible',
        'Ingeniería de Lujo',
        'Zero Dirty Patches',
      ],
      shape: `<svg  viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
  </svg>
  `,
      image: imgDevVanguard,
    },
  ];

  const navigateToDiscovery = () => {
    window.dispatchEvent(
      new CustomEvent('navigate-with-transition', {
        detail: { route: '/discovery' },
      })
    );
  };

  onBeforeMount(() => {
    whatIDo.value = textSplitterIntoChar('Metodología /', true);
  });

  onMounted(() => {
    if (!sectionRef.value) return;
    initCtx(sectionRef);

    ctx.value!.add(() => {
      animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
    });
  });

  const getStyle = (index: number) => {
    if (index === 0) {
      return 'top-[calc(10vh_+_0em)] sm:top-[calc(20vh_+_0em)] mb-[10em] sm:mb-[17.25em]';
    }

    if (index === 1) {
      return 'top-[calc(10vh_+_4em)] sm:top-[calc(20vh_+_5.75em)] mb-[7em] sm:mb-[11.5em]';
    }

    if (index === 2) {
      return 'top-[calc(10vh_+_8em)] sm:top-[calc(20vh_+_11.5em)] mb-[4em] sm:mb-[5.75em]';

    }
  };
</script>
