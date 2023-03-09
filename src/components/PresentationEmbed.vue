<template>
  <div class="presentation_hero">
    <h3 v-if="headingText" class="presentation_embed--heading">
      {{ headingText }}
    </h3>
    <div class="presentation-container">
      <iframe sandbox="allow-scripts" class="presentation--iframe" :title="presentationTitle"
        :src="presentationSource" style="border:0"
        webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PresentationEmbed',
  props: {
    presentationSource: {
      required: true,
      type: String,
    },
    headingText: {
      required: false,
      type: String,
    },
    presentationTitle: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.presentation_hero {
  display: flex;
  background-color: #D6ECEE;
  height: 50rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media #{$mobile} {
    height: 21rem;
  }
}

.presentation-container {
  width: 60%;
  height: 100%;

  @media #{$mobile} {
    width: 100%;
  }
}

.presentation_embed--heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  color: #0d5b67;
  font-size: 1.8rem;

  @media #{$mobile} {
    font-size: 1.2rem;
    word-wrap: break-word;
  }
}

.presentation--iframe {
  width: 100%;
  height: 100%;
}
</style>
