<template>
  <div class="video_hero">
    <video 
      class="video_player desktop"
      :preload="preload"
      :poster="poster"
      playsinline
      controls
      :src="video.desktop"
    />
    <video 
      class="video_player mobile"
      :preload="preload"
      :poster="poster"
      playsinline
      controls
      :src="video.mobile"
    />
  </div>
</template>

<script setup lang="ts">
const { $requireVideo, $requireImg } = useNuxtApp()

const props = defineProps({
  videoSource: {
    required: true,
    type: String,
  },
  videoPoster: {
    required: false,
    type: String,
  },
})

const video = $requireVideo(props.videoSource)
const poster = props.videoPoster ? $requireImg(props.videoPoster) : ''
const preload = props.videoPoster ? 'none' : 'metadata'
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalVideoEmbed',
});
</script>

<style lang="scss" scoped>
.video_hero {
  display: flex;
  background-color: #D6ECEE;
  height: 75rem;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media #{$mobile} {
    height: 30rem;
  }
}

.video_player {
  max-width: 1120px;
  max-height: 630px;
  width: 100%;

  &.desktop {
    display: inherit;
  }
  &.mobile {
    display: none;
  }

  @media #{$mobile} {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: inherit;
    }
  }
}
</style>
