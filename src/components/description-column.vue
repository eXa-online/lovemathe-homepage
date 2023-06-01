<template>
  <div class="description-column">
    <h3>{{ title }}</h3>
    <vue-markdown
      class="description-column__markdown"
      :class="{ expanded }"
      :source="expanded ? mdFullText : mdAbstract"
    />
    <atoms-expand-link @expand="expand" @retract="retract" />
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { defineComponent } from 'vue'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const props = defineProps<{
  title: string,
  markdown: string
}>()

const md = props.markdown ? requireMarkdown(props.markdown) : ''
const mdAbstract = md.split('\n\n')[0]
const mdFullText = md.split('\n\n').join(' ')
</script>

<script lang="ts">
export default defineComponent({
  data () {
    return { expanded: false }
  },
  methods: {
    expand () {
      this.expanded = true
    },
    retract () {
      this.expanded = false
    }
  }
})
</script>

<style lang="scss" scoped>
.description-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  padding: 0 2rem;

  @media #{$tiny}, #{$mob}, #{$tab} {
    width: 100%;
    padding: 0;
  }

  p {
    text-align: start;
  }

  h3 {
    font-size: var(--sub-heading-textsize-small);
    // margin-bottom: 2rem; 
    @media #{$desk} {
      // margin-bottom: 4rem; 
    }
  }
}
</style>
