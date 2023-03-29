<template>
  <div id="home" class="header" :style="{ 'background-image': `url(${imageAssetUrl})` }">
    <div class="header--teaser">
      <div class="header--title">
        <h1 class="header--title__heading">
          {{ headingText }}
        </h1>
      </div>
      <div class="header--text">
        <vue-markdown :source="markdown" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';
const { $requireImg, $requireMarkdown } = useNuxtApp()

const props = defineProps({
  imageSource: {
    required: true,
    type: String,
  },
  headingText: {
    required: true,
    type: String,
  },
  teaserSource: {
    required: true,
    type: String,
  },
})

const markdown = $requireMarkdown(props.teaserSource)
const imageAssetUrl = $requireImg(props.imageSource)
</script>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PageHeader',
  });
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media #{$mobile} {
    background-position: 70%;
  }
}

.header--teaser {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
      rgba(214, 236, 238, 0) 0%,
      rgba(214, 236, 238, 0.354167) 48.96%,
      #d6ecee 100%);
}

.header--title {
  padding-top: 20%;

  @media #{$mobile} {
    padding-top: 100%;
  }
}

.header--title__heading {
  font-family: "Kiwi-Days";
  font-weight: 400;
  color: #0d5b67;
  font-size: 4rem;

  @media #{$mobile} {
    font-size: 2.5rem;
  }
}

.header--text {
  font-family: "Rubik";
  font-weight: "600";
  width: 50%;
  display: inline-block;
  font-size: 1.6rem;
  color: #0d5b67;
  padding-top: 10%;

  @media #{$mobile} {
    font-size: 1.2rem;
    width: 80%;
  }
}
</style>
