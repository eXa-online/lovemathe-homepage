<template>
  <div class="about-row" :class="expanded ? 'active' : ''">
    <h3>{{ props.title }}</h3>
    <vue-markdown
      v-if="props.markdown"
      class="about-row__markdown"
      :source="expanded ? mdFullText : mdAbstract"
    />
    <p v-else>
      {{ expanded ? props.plain.fullText : props.plain.abstract }}
    </p>
    <atoms-expand-button class="about-text__expand-button" @expand="expand" @collapse="collapse" />
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { defineComponent } from 'vue'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

interface TextWithAbstract {
  abstract: string,
  fullText: string,
}

const props = defineProps<{
  title: string,
  markdown?: string,
  plain?: TextWithAbstract,
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
    collapse () {
      this.expanded = false
    }
  }
})
</script>

<style lang="scss" scoped>
.about-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15rem;
  transition: height 0.2s ease-in;
  padding: 0 0 2rem;

  border-top: 2px solid #{$divider-color};
  border-bottom: 2px solid #{$divider-color};

  @media #{$desk}, #{$big} {
    flex-direction: row;
    padding: 2rem 0;
  }

  h3 {
    text-align: center;

    @media #{$desk}, #{$big} {
      text-align: start;
    }
  }

  &.active {
    height: 30rem;
  }

  h3, p, .about-row__markdown {
    width: 90%;

    @media #{$desk}, #{$big} {
      width: 33%;
      text-align: start;
    }
  }
  .about-text__expand-button {
    width: 50%;

    @media #{$desk}, #{$big} {
      margin-left: 8rem;
      width: calc(33% - 8rem);
    }
  }
}
</style>
