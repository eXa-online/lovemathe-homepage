<template>
  <div class="full_size_image">
    <h3 v-if="headingText" class="full_size_image--heading">
      {{ headingText }}
    </h3>
    <img loading="lazy" class="full_size_image--image" :src="imageAssetUrl" :alt="altText" />
</div>
</template>


<script setup lang="ts">
const { $requireImg } = useNuxtApp()

const props = defineProps({
  imageSource: {
    required: true,
    type: String,
  },
  altText: {
    required: true,
    type: String,
  },
  headingText: {
    required: false,
    type: String,
  },
})

const imageAssetUrl = $requireImg(props.imageSource)
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FullSizeText',
});
</script>

<style lang="scss" scoped>
.full_size_image {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

.full_size_image--image {
  width: 60%;
  // height: 35rem;
  // object-fit: cover;

  @media #{$mobile} {
    // height: 8rem;
  }
}

.full_size_image--heading {
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
