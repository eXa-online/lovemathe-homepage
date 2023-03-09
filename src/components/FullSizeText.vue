<template>
  <div class="full_size_text">
    <h3 class="full_size_text--heading">{{ heading }}</h3>
    <div class="full_size_text--body">
      <vue-markdown :source="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  name: 'FullSizeText',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      text: require(`../assets/markdown/${this.textSource}`).default,
    };
  },
  props: {
    heading: {
      required: false,
      type: String,
    },
    textSource: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.full_size_text {
  max-width: 60%;
  margin-bottom: 50px;
}

.full_size_text--heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  color: #0d5b67;
  font-size: 1.8rem;

  @media #{$mobile} {
    font-size: 1.2rem;
    word-wrap: break-word;
  }
}

.full_size_text--body {
  font-family: Rubik;
  font-weight: 400;
  color: #0d5b67;
  font-size: 14px;
  text-align: left;
}
</style>
