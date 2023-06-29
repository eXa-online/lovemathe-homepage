<template>
  <div id="documentation">
    <h2>Dokumentation</h2>
    <atoms-content-card class="presentation">
      <vueper-slides
        :lazy="false"
        :lazy-load-on-drag="false"
        progress
        :touchable="true"
        :bullets="false"
        transition-speed="250"
        :dragging-distance="50"
        class="no-shadow"
        :infinite="false"
        disable-arrows-on-edges
        :slide-ratio="9/16"
        arrows-outside
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :video="slide.video"
        />
      </vueper-slides>
    </atoms-content-card>
  </div>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { useImageImport, useVideoImport } from '~/composables/use-requires'

const requireImage = useImageImport()
const requireVideo = useVideoImport()
const slides = [
  { image: requireImage('slides/1.webp') },
  { image: requireImage('slides/2.webp') },
  { image: requireImage('slides/3.webp') },
  { image: requireImage('slides/4.webp') },
  { image: requireImage('slides/5.webp') },
  { image: requireImage('slides/6.webp') },
  { image: requireImage('slides/7.webp') },
  { image: requireImage('slides/8.webp') },
  {
    video: {
      mp4: requireVideo('fpc_lm_interview/big.mp4'),
      webm: requireVideo('fpc_lm_interview/big.webm')
    }
  }
]
</script>

<style lang="scss" scoped>
#documentation {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;

  h2 {
    margin-bottom: 4rem;
    @media #{$tiny},#{$mob},#{$tab} {
      font-size: var(--section-heading-textsize-small);
    }
  }
}
</style>

<style>
.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  top: unset;
  bottom: 0;
}
</style>
