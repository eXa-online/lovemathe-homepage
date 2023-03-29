<template>
  <div class="two-rows" :style="cssProps">
    <h3 class="two-rows--heading">{{ heading }}</h3>
    <div class="row two-rows--text">
      <div class="two-rows--text__body">
        <vue-markdown :source="markdownLeft" />
      </div>
    </div>
    <div class="row two-rows--text">
      <div class="two-rows--text__body">
        <vue-markdown :source="markdownRight" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';
const { $requireMarkdown } = useNuxtApp()

const props = defineProps({
  heading: {
    required: false,
    type: String,
  },
  textSourceLeft: {
    required: true,
    type: String,
  },
  textSourceRight: {
    required: true,
    type: String,
  },
  flexDirection: {
    required: true,
    type: String,
  },
})

const cssProps = { '--flex-direction': props.flexDirection }

const markdownLeft = $requireMarkdown(props.textSourceLeft)
const markdownRight = $requireMarkdown(props.textSourceRight)
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TwoRowsWithImage',
});
</script>

<style lang="scss" scoped>
.row {
  width: 100%;

  @media #{$mobile} {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}

.two-rows {
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: flex-start;
  align-content: space-between;
  flex-direction: var(--flex-direction);
  padding-top: 2rem;

  @media #{$mobile} {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
  }
}

.two-rows--text {
  display: flex;
  flex-direction: column;
  max-width: 80%;

  @media #{$mobile} {
    max-width: 100%;
  }
}

.two-rows--text__heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  color: #0d5b67;
  font-size: 1.8rem;

  @media #{$mobile} {
    font-size: 1.2rem;
  }
}

.two-rows--text__body {
  font-family: Rubik;
  font-weight: 400;
  color: #0d5b67;
  font-size: 1.1rem;
  text-align: left;
  line-height: 1rem;

  @media #{$mobile} {
    font-size: 0.9rem;
  }
}
</style>
