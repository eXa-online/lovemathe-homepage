<template>
  <atoms-content-card id="literature">
    <h2 class="smaller">
      Literatur
    </h2>
    <atoms-lightbox button-text="Mehr">
      <vue-markdown style="{ text-align: left !important; }" :source="content" />
    </atoms-lightbox>
  </atoms-content-card>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const content = requireMarkdown('documentation/literature.md')
</script>

<style lang="scss" scoped>
#literature {
  margin: 4rem 0;
  @extend .switching-flex-direction;
  justify-content: space-between;
}
</style>
