<template>
  <!-- common-padding  -->
  <section
    id="testimonials-section"
    class="common-padding relative mx-auto min-h-svh -translate-y-0 overflow-y-clip py-0 will-change-transform"
  >
    <div
      class="border-flax-smoke-300 grid w-full grid-cols-12 border-b-[1px] pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h3
        class="heading-1 max-sm:heading-2 text-flax-smoke-950 col-span-full leading-[0.95] font-bold uppercase tracking-tight will-change-auto"
      >
        NO CONFÍES EN NOSOTROS. <br />
        CONFÍA EN LOS DATOS /
      </h3>
      <div
        class="text-flax-smoke-800 col-span-full mt-[5%] flex justify-end gap-10 sm:gap-20 lg:col-span-10 tracking-tight"
      >
        <p class="heading-6 text-center text-nowrap font-bold uppercase tracking-widest text-neutral-400">
          ( VALIDACIÓN INDUSTRIAL )
        </p>
        <p class="heading-5 w-full text-balance leading-relaxed sm:max-w-[40ch]">
          El dominio del mercado deja un rastro innegable. Descubre cómo nuestros sistemas de alto rendimiento y arquitectura predictiva han redefinido por completo el estándar digital para las marcas más exigentes.
        </p>
      </div>
    </div>

    <Slider />
  </section>
</template>

<script setup lang="ts">
  // import gsap from 'gsap';
  // import { ScrollTrigger } from 'gsap/all';
  // import { onMounted } from 'vue';
  import { Slider } from '../design';

  // gsap.registerPlugin(ScrollTrigger);

  // const animatePeopleSectionLeave = (id: string) => {
  //   gsap.to(id, {
  //     scrollTrigger: {
  //       trigger: id,
  //       markers: true,
  //       start: 'top 80%',
  //       end: '100% end',
  //     },
  //     duration: 0.7,
  //     y: '0',
  //   });
  // };
  // onMounted(() => {
  //   animatePeopleSectionLeave('#testimonials-section');
  // });
</script>
