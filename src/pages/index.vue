<template>
  <div class="home">
    <CookieButton />
    <PageHeader
      image-source="header_background.webp"
      headingText="LOVEMATHE"
      teaserSource="header/header_teaser.md"
    />
    <LocalVideoEmbed
      video-source="fpc_lm_interview"
      video-poster="poster2.webp"
    />
    <PlayTheGame id="test"/>
    <AboutUs id="about"/>
    <TestInstruction id="guide"/>
    <ProjectDocumentation id="documentation"/>
    <Footer />

  </div>
</template>

<script lang="ts">
import VideoEmbed from '@/components/VideoEmbed.vue';
import LocalVideoEmbed from '@/components/LocalVideoEmbed.vue';
import { defineComponent } from 'vue';
import PageHeader from '~/components/PageHeader.vue';
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
    LocalVideoEmbed,
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
