<template>
  <div class="manual-row" :class="{ inverted: inverted }">
    <atoms-content-card class="manual-row__card">
      <h3>{{ title }}</h3>
      <template v-if="$slots.lightbox">
        <vue-markdown class="manual-row__markdown" :source="md" />

        <atoms-lightbox :button-text="buttonText">
          <slot name="lightbox" />
        </atoms-lightbox>
      </template>
      <template v-else>
        <vue-markdown class="manual-row__markdown" :source="expanded ? mdFullText : mdAbstract" />
        <atoms-expand-link
          class="manual-row__expand-button"
          @expand="expand"
          @retract="retract"
        />
      </template>
    </atoms-content-card>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { defineComponent } from 'vue'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const props = defineProps<{
  title: string,
  markdown: string,
  buttonText?: string,
  inverted?: boolean,
}>()

const md = requireMarkdown(props.markdown)
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
.filler-image {
  z-index: -1;
  width: 30%;
  height: 100%;
  padding-top: 2rem;

  @media #{$tiny},#{$mob} {
    display: none;
  }
}
.manual-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding) 0;
  // margin: var(--padding) 0;

  background-image: url('~/assets/img/manual-filler-right.svg');
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: 90% 100%;

  &.inverted {
    background-image: url('~/assets/img/manual-filler-left.svg');
    background-position: -0 100%;
    flex-direction: row-reverse;
  }

  @media #{$tiny},#{$mob} {
    background: none;
    justify-content: center;
  }

  @media #{$tab} {
    background-size: auto 50%;
    background-position: 100% 100%;
  }
}

.manual-row__card {
  @media #{$tiny},#{$mob} {
    flex-grow: 1;
  }
  width: 55.5%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

h3, p, .manual-row__markdown {
  text-align: left;
  width: 100%;
}

h3 {
  margin: 1rem 0;
  @media #{$tiny}, #{$mob} {
    font-size: var(--sub-heading-textsize);
  }
}

.manual-row__expand-button {
  margin: 0;
  width: fit-content;
}
</style>
