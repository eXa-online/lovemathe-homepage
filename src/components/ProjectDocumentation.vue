<template>
  <div id="documentation" class="project_documentation">
    <h2 class="project_documentation--heading">Dokumentation</h2>
    <PresentationEmbed video-source="documentation.jpg" heading-text="Präsentation" />
    <FullSizeText heading="Projektbeschreibung" textSource="documentation/project_description.md" />
    <FullSizeText heading="Literatur" textSource="documentation/literature.md" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FullSizeText from '@/components/FullSizeText.vue';
import PresentationEmbed from '@/components/PresentationEmbed.vue';

export default defineComponent({
  name: 'ProjectDocumentation',
  components: {
    FullSizeText,
    PresentationEmbed,
  },
});
</script>

<style lang="scss" scoped>
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

  @media #{$mobile} {
    font-size: 1.8rem;
  }
}
</style>
