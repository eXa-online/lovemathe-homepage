<template>
  <div id="description">
    <h2>Projekt&shy;beschreibung</h2>
    <vue-markdown
      class="description__markdown"
      :source="mdText"
    />
    <div id="description-texts">
      <description-column title="1. Projektidee" markdown="description/idea.md" />
      <description-column title="2. Mehrwert von digitalen Tests" markdown="description/advantages.md" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const mdText = requireMarkdown("description/description.md")
</script>

<style lang="scss" scoped>
#description {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  p {
    text-align: start;
  }

  h2 {
    font-size: var(--section-heading-textsize-small);
    margin-bottom: 2rem; 
    @media #{$desk} {
      margin-bottom: 4rem; 
    }
  }
}

.description__markdown {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #{$divider-color}
}

#description-texts {
  display: flex;
  flex-direction: column;
  @media #{$desk}, #{$big} {
    flex-direction: row;
  }
  align-items: flex-start;
}
</style>
