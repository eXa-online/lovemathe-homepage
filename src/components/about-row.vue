<template>
  <div class="about-row">
    <h3>{{ props.title }}</h3>
    <div class="about-row__markdown">
      <vue-markdown
        v-if="props.markdown"
        class="about-row__markdown__content"
        :source="mdAbstract"
      />
      <Collapse :when="isExpanded">
        <vue-markdown
          v-if="props.markdown"
          class="about-row__markdown__content"
          :source="mdDetails"
        />
      </Collapse>
    </div>

    <atoms-expand-button class="about-text__expand-button" @expand="expand" @collapse="collapse" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { Collapse } from 'vue-collapsed'
import VueMarkdown from 'vue-markdown-render'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const props = defineProps<{
  title: string,
  markdown?: string,
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
.about-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

  .about-row__markdown {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 0;
    width: 90%;

    @media #{$desk}, #{$big} {
      width: 33%;
      text-align: start;
    }
  }

  .about-row__markdown__content {
    margin: 0;
  }

  h3 {
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

<style lang="scss">
.about-row__markdown__content {
  margin: 0;

  p {
    margin: 0;
  }
}
</style>
