<template>
  <div class="imprint">
    <h1>Impressum</h1>
    <div class="imprint-data">
      <vue-markdown
        class="imprint-data__column"
        :source="imprintLeft"
      />
      <vue-markdown
        class="imprint-data__column"
        :source="imprintRight"
      />
    </div>
    <atoms-button-pill @click="() => router.push({ path: '/' })">
      Zurück zur Startseite
    </atoms-button-pill>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { useMarkdownImport } from '~/composables/use-requires'

const router = useRouter()
const requireMarkdown = useMarkdownImport()

const imprintLeft = requireMarkdown('imprint/imprint_left.md')
const imprintRight = requireMarkdown('imprint/imprint_right.md')
</script>

<style lang="scss" scoped>
  .imprint {
    padding-top: calc(2rem + var(--header-height));
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: calc(100vh - var(--footer-height));
    box-sizing: border-box;
  }
  .imprint-data {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media #{$tab}, #{$desk}, #{$big} {
      flex-direction: row;
    }

    justify-content: space-evenly;
  }

  .imprint-data__column {
    padding: 0 1rem;
  }
</style>
