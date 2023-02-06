<template>
  <div id="instructions" class="test_instruction">
    <h2 class="test_instruction--heading">Anleitung</h2>
    <FullSizeText heading="Testanleitung" textSource="instruction/test_instruction.md" />
    <FullSizeText heading="Auswertung" textSource="instruction/evaluation.md" />
    <FullSizeImage image-source="test_instruction.jpg" alt-text="Testanleitung" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FullSizeText from '@/components/FullSizeText.vue';
import FullSizeImage from './FullSizeImage.vue';

export default defineComponent({
  name: 'TestInstruction',
  components: {
    FullSizeText,
    FullSizeImage,
  },
});
</script>

<style scoped>
.test_instruction {
  display: flex;
  flex-direction: column;
  background-color: #ADE3EA;
  justify-content: center;
  align-items: center;
}

.test_instruction--heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  font-size: 2.8rem;
  color: #0D5B67;
}
</style>
