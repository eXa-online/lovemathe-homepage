<template>
  <div id="documentation" class="project_documentation">
    <h2 class="project_documentation--heading">Dokumentation</h2>
    <FullSizeImage image-source="documentation.jpg"
      alt-text="Bild von einem Kind, das mit einem Stift auf einem Blatt Papier schreibt" heading-text="Präsentation" />
    <FullSizeText heading="Projektbeschreibung" textSource="documentation/project_description.md" />
    <FullSizeText heading="Literatur" textSource="documentation/literature.md" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FullSizeText from '@/components/FullSizeText.vue';
import FullSizeImage from '@/components/FullSizeImage.vue';

export default defineComponent({
  name: 'ProjectDocumentation',
  components: {
    FullSizeText,
    FullSizeImage,
  },
});
</script>

<style scoped>
.project_documentation {
  display: flex;
  flex-direction: column;
  background-color: #D6ECEE;
  justify-content: center;
  align-items: center;
}

.project_documentation--heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  font-size: 2.8rem;
  color: #0D5B67;
}
</style>
