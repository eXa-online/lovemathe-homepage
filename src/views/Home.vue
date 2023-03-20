<template>
  <div class="home">
    <CookieButton />
    <PageHeader
      image-source="header_background.jpg"
      headingText="LOVEMATHE"
      teaserSource="header/header_teaser.md"
    />
    <VideoEmbed
      videoSource="https://player.vimeo.com/video/796631211?h=fcf59ebfa8&color=ff9933&byline=0&portrait=0&dnt=true"
    />
    <PlayTheGame />
    <AboutUs />
    <TestInstruction />
    <ProjectDocumentation />
    <Footer />

  </div>
</template>

<script lang="ts">
import VideoEmbed from '@/components/VideoEmbed.vue';
import { defineComponent } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import PlayTheGame from '@/components/PlayTheGame.vue';
import AboutUs from '@/components/AboutUs.vue';
import TestInstruction from '@/components/TestInstruction.vue';
import ProjectDocumentation from '@/components/ProjectDocumentation.vue';
import CookieButton from '@/components/CookieButton.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    PageHeader,
    VideoEmbed,
    PlayTheGame,
    AboutUs,
    TestInstruction,
    ProjectDocumentation,
    CookieButton,
    Footer,
},
});
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
  }
</style>
