<template>
  <div class="presentation_hero">
    <h3 v-if="headingText" class="presentation_embed--heading">
      {{ headingText }}
    </h3>
    <div class="presentation-container">
      <div class="visme_d" data-title="BZ Püchau Ganztagsschulenkongreß"
        data-url="1j6kvd93-copy-of-bz-puchau-ganztagsschulenkongress-2022-ohne-video" data-w="1120" data-full-h="false"
        data-h="700" data-domain="my">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PresentationEmbed',
  props: {
    videoSource: {
      required: true,
      type: String,
    },
    headingText: {
      required: false,
      type: String,
    },
  },
  mounted() {
    const script = document.createElement('script');
    script.src = '//my.visme.co/visme-embed.js';
    script.async = true;
    document.body.appendChild(script);
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
    height: 18rem;
  }
}

.presentation-container {
  width: 60%;
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
</style>
