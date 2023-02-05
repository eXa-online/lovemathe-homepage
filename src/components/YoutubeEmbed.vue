<template>
  <div class="video_hero">
    <iframe width="1120" height="630" :src="videoSource" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'YoutubeEmbed',
  props: {
    videoSource: {
      required: true,
      type: String,
    },
  },
});
</script>

<style scoped>
.video_hero {
  display: flex;
  background-color: #D6ECEE;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
