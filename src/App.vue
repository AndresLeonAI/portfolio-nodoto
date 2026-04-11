<template>
  <LoadingScreen v-cloak="true" />

  <template v-if="isSamsungBrowser">
    <SamsungError />
  </template>

  <div class="pointer-events-none fixed inset-0 z-50">
    <svg
      class="h-[150vh] w-[100vw] object-cover object-center"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise-base">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect class="h-[150vh] w-[100vw]" filter="url(#noise-base)" opacity="0.15" />

      <filter id="noise-dense">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect
        class="h-[150vh] w-[100vw]"
        filter="url(#noise-dense)"
        opacity="-0.88"
      />
    </svg>
  </div>

  <Cursor />
  <Navbar @isLocked="lockScroll" />

  <router-view />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import {
    LoadingScreen,
    SamsungError,
    Cursor,
  } from '@/components/design';

  import { Navbar } from './components/common';
  import { lenis } from '@/lib/lenis';

  const isSamsungBrowser = /samsung/i.test(navigator.userAgent);

  const lockScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  onMounted(() => {
    document.body.classList.add('stop-scrolling');
    // TODO:
    // window.scrollTo(0, 0);
  });
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
