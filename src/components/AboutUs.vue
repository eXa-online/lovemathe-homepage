<template>
  <div id="about" class="about_us">
    <h2 class="about_us--heading">Über das Projekt</h2>
    <TwoRowsWithImage heading="Die Idee" textSource="about_us/idea.md" image-source="kid_writing.jpg"
      flex-direction="row-reverse" />
    <TwoRowsWithImage heading="Ferry Porsche Challenge" textSource="about_us/ferry_porsche_challenge.md"
      image-source="porsche.jpg" flex-direction="row" />
    <FullSizeText heading="Relevanz" textSource="about_us/relevance.md"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TwoRowsWithImage from '@/components/TwoRowsWithImage.vue';
import FullSizeText from '@/components/FullSizeText.vue';

export default defineComponent({
  name: 'AboutUs',
  components: {
    TwoRowsWithImage,
    FullSizeText,
  },
});
</script>

<style lang="scss" scoped>
.about_us {
  display: flex;
  flex-direction: column;
  background-color: #d6ecee;
  justify-content: center;
  align-items: center;
}

.about_us--heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  font-size: 2.8rem;
  color: #0d5b67;

  @media #{$mobile} {
    font-size: 1.8rem;
  }
}
</style>
