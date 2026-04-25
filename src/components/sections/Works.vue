<template>
  <section id="works" class="common-padding relative z-10 bg-[#0B0B0A] pb-12">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        v-html="selectedWorks"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>
      <p
        class="heading-1 text-flax-smoke-400 text-opacity-50 hidden w-4/5 text-end font-extrabold sm:block"
      >
        ( {{ selectedWorksProps.length }} )
      </p>

      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          <span class="letters inline sm:hidden">( {{ selectedWorksProps.length }} )&nbsp;</span>
          <span v-html="casesSubtitle"></span>
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
          v-html="casesDesc"
        >
        </p>
      </div>
    </div>

    <div
      class="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]"
    >
      <div
        class="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex"
      >
        <span class="font-title! relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>
      <aside
        @mouseenter="showCursor"
        @mouseleave="hideCursor"
        class="relative col-span-full flex flex-col space-y-10 md:col-span-7"
      >
        <div
          v-for="(work, i) in selectedWorksProps"
          :key="i"
          class="work-card @container"
        >
          <a class="group" target="_blank" :href="work.url">
            <div
              class="flex-center relative aspect-square overflow-clip rounded-lg"
            >
              <img
                alt="work-background"
                loading="lazy"
                class="absolute size-full object-cover select-none"
                :src="work.imageBg"
              />
              <div
                class="flex-center z-10 aspect-4/3 size-full overflow-clip rounded-lg object-cover"
              >
                <!-- autoplay="false" -->
                <video
                  ref="videoRefs"
                  :src="work.videoSrc"
                  muted
                  :autoplay="false"
                  type="video/webm"
                  class="size-[80%] rounded-md object-contain blur transition-all duration-500 ease-in-out"
                ></video>
              </div>
            </div>
            <div>
              <p class="heading-6 font-title! mt-[2%] mb-[1%] leading-none" v-html="work.categoryHtml"></p>
              <div class="items-center justify-between sm:flex">
                <h3 class="heading-3 font-title! font-bold uppercase" v-html="work.nameHtml"></h3>
                <div class="flex gap-1.5 select-none">
                  <p
                    class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
                    v-for="tag in work.tags"
                    :key="tag"
                  >
                    <span>{{ tag }}</span>
                  </p>
                  <p
                    class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 hover:text-flax-smoke-300 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent"
                  >
                    <span>{{ work.year }}</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref, useTemplateRef } from 'vue';
  import { useGsap } from '@/composables/useGsap';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import { useWindowSize } from '@vueuse/core';
  import { workBg1, workBg2, workBg3, workBg4, workBg5 } from '@/assets/images';

  gsap.registerPlugin(ScrollTrigger);

  const videoRefs = useTemplateRef<HTMLVideoElement[]>('videoRefs');

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('Casos Clínicos /');

  const tl = gsap
    .timeline({ defaults: { duration: 0.25 } })
    .to(['#cursor', '#inner'], {
      scale: 1,
      opacity: 1,
    })
    .paused(true);

  const showCursor = () => {
    tl.play();
  };
  const hideCursor = () => {
    tl.reverse();
  };

  const { ctx, initCtx } = useGsap();

  const casesSubtitle = ref('');
  const casesDesc = ref('');

  const selectedWorksPropsRaw = [
    {
      name: 'Madar',
      category: 'Arquitectura B2B',
      tags: ['Vue.js', 'Neuromarketing', 'Gsap'],
      videoSrc: '/videos/work5.webm',
      imageBg: workBg5,
      url: 'https://madar.services/',
      year: '2025',
    },
    {
      name: 'Iphone 15 Clone',
      category: 'Ingeniería 3D & E-commerce',
      tags: ['WebGL', 'Conversión'],
      videoSrc: '/videos/work2.webm',
      imageBg: workBg2,
      url: 'https://github.com/NODOTO/iphone15-pro-clone',
      year: '2024',
    },
    {
      name: 'Axon',
      category: 'Sistemas Complejos',
      tags: ['Vue.js', 'Machine Learning', 'AI'],
      videoSrc: '/videos/work3.webm',
      imageBg: workBg3,
      url: 'https://github.com/NODOTO/axon',

      year: '2024',
    },
    {
      name: 'Blogy',
      category: 'Plataforma de Contenidos',
      tags: ['Vue.js', 'Escalabilidad'],
      videoSrc: '/videos/work4.webm',
      imageBg: workBg4,
      url: 'https://github.com/NODOTO/blog',
      year: '2023',
    },
    {
      name: 'Pyutube',
      category: 'Infraestructura CLI',
      tags: ['Python', 'Precisión', 'Youtube'],
      videoSrc: '/videos/work1.webm',
      imageBg: workBg1,
      url: 'https://github.com/NODOTO/pyutube',
      year: '2024',
    },
  ];

  const selectedWorksProps = selectedWorksPropsRaw.map(work => ({
    ...work,
    categoryHtml: textSplitterIntoChar(work.category, true, false),
    nameHtml: textSplitterIntoChar(work.name, true, false)
  }));

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (
    index: any,
    i: any,
    selectedWorksProps: any[],
  ) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(i, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any, i: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(i, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        video.play();
        video.classList.remove('blur');
      }
    });
  };

  const stopAllVideos = () => {
    videoRefs.value?.map((video: HTMLVideoElement) => {
      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0; // Reset video to the start
      }
    });
  };
  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('Despliegues / ', true, false);
    casesSubtitle.value = textSplitterIntoChar('CASOS DE ESTUDIO', true, false);
    casesDesc.value = textSplitterIntoChar('Arquitecturas de conversión desplegadas para marcas élite. Precisión clínica, estética suprema y fricción cero.', true, false);
  });

  onMounted(() => {
    stopAllVideos();

    // Trigger a hard GSAP refresh a bit after mounting to properly calculate spacing sizes,
    // especially compensating for the massive pin-spacer introduced by CinematicHero.
    setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 500);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75, // Trigger when 75% of the video is visible
    });

    // Observe each video element
    videoRefs.value?.forEach((video) => {
      observer.observe(video);
    });

    // animateSplitText('#selectedWorks .letters', '#selected-works-text', 0.7, 0.01, 0); => Eliminado en favor de SOTD loop

    initCtx(ref(document.querySelector('#works') as HTMLElement));
    
    ctx.value!.add(() => {
      // 1. Animación del Header (Despliegues + Subtitles)
      const introLetters = document.querySelectorAll('#selectedWorks .letters, #selected-works-text .letters');
      const subtitleContainer = document.querySelector('#selected-works-text') as HTMLElement;
      if (introLetters.length) {
        gsap.set(introLetters, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
        // Reveal the subtitle container (Tailwind opacity-0) when animation fires
        if (subtitleContainer) gsap.set(subtitleContainer, { opacity: 1 });
        gsap.to(introLetters, {
          y: '0%',
          rotateX: 0,
          opacity: 1,
          stagger: isSmallScreen.value ? 0.02 : 0.012,
          duration: isSmallScreen.value ? 1 : 1.2,
          ease: 'expo.out',
          onComplete: () => gsap.set(introLetters, { clearProps: 'will-change' }),
          scrollTrigger: {
            trigger: '#selectedWorks',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            fastScrollEnd: true,
          }
        });
      }

      // 2. Animación Cinetica Pura en Works Cards
      const worksCards = document.querySelectorAll('#works .work-card');
      worksCards.forEach(card => {
        const textElements = card.querySelectorAll('.letters');
        if (textElements.length) {
          gsap.set(textElements, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
          gsap.to(textElements, {
            y: '0%',
            rotateX: 0,
            opacity: 1,
            stagger: isSmallScreen.value ? 0.02 : 0.012,
            duration: isSmallScreen.value ? 1 : 1.2,
            ease: 'expo.out',
            onComplete: () => gsap.set(textElements, { clearProps: 'will-change' }),
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              fastScrollEnd: true,
            }
          });
        }
      });
    });

    // Apply GSAP counter animations — DESKTOP ONLY (counter is hidden on mobile)
    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any, i: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            start: 'top 25%',
            end: 'bottom 25%',
            scrub: 0.01,
            onLeaveBack: () => {
              // Backward scroll animation
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index, i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            // Forward scroll animation
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
