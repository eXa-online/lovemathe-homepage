<template>
  <div class="description-column">
    <h3>{{ title }}</h3>

    <div class="description-column__markdown">
      <vue-markdown
        v-if="props.markdown"
        class="description-column__markdown__content"
        :source="mdAbstract"
      />
      <Collapse :when="isExpanded">
        <vue-markdown
          v-if="props.markdown"
          class="description-column__markdown__content"
          :source="mdDetails"
        />
      </Collapse>
    </div>
    <atoms-expand-link @expand="expand" @collapse="collapse" />
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { Collapse } from 'vue-collapsed'
import { defineComponent } from 'vue'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const props = defineProps<{
  title: string,
  markdown: string
}>()

const md = props.markdown ? requireMarkdown(props.markdown) : ''
const mdAbstract = md.split('\n\n')[0]
const mdDetails = md.split('\n\n').slice(1).join(' ')
</script>

<script lang="ts">
export default defineComponent({
  data () {
    return { isExpanded: false }
  },
  methods: {
    expand () {
      this.isExpanded = true
    },
    collapse () {
      this.isExpanded = false
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
  }
}
</style>

<style lang="scss">
.description-column__markdown {
  margin: 20px; // default p tag margin
}

.description-column__markdown__content {
  ul {
    margin: 0;
  }
}
</style>
