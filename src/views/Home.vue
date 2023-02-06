<template>
  <div class="home">
    <PageHeader
      ctaText="Testspiel starten"
      cta-link="/game"
      image-source="header_background.jpg"
      headingText="LOVEMATHE"
      teaserSource="header/header_teaser.md"
    />
    <YoutubeEmbed
      videoSource="https://www.youtube-nocookie.com/embed/CsCCcuqeid0"
    />
    <PlayTheGame />
    <AboutUs />
    <TestInstruction />
    <ProjectDocumentation />

  </div>
</template>

<script lang="ts">
import YoutubeEmbed from '@/components/YoutubeEmbed.vue';
import { defineComponent } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import PlayTheGame from '@/components/PlayTheGame.vue';
import AboutUs from '@/components/AboutUs.vue';
import TestInstruction from '@/components/TestInstruction.vue';
import ProjectDocumentation from '@/components/ProjectDocumentation.vue';

export default defineComponent({
  name: 'Home',
  components: {
    PageHeader,
    YoutubeEmbed,
    PlayTheGame,
    AboutUs,
    TestInstruction,
    ProjectDocumentation,
},
});
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
  }
</style>
