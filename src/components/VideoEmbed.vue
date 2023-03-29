<template>
  <div class="video_hero">
    <iframe sandbox="allow-scripts" width="1120" height="630" :src="videoSource" frameborder="0" :title="videoTitle"
      allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
    </iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoEmbed',
  props: {
    videoSource: {
      required: true,
      type: String,
    },
    videoTitle: {
      required: true,
      type: String,
    },
  },
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
</style>
