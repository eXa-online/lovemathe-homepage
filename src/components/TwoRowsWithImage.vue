<template>
  <div class="two-rows" :style="cssProps">
    <div class="row two-rows--text">
      <h3 class="two-rows--text__heading">{{ heading }}</h3>
      <div class="two-rows--text__body">
        <vue-markdown :source="text" />
      </div>
    </div>
    <div class="row two-rows--image">
      <img class="two-rows--image__element" :src="image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  name: 'TwoRowsWithImage',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      text: require(`../assets/markdown/${this.textSource}`).default,
      image: require(`../assets/img/${this.imageSource}`),
    };
  },
  props: {
    heading: {
      required: true,
      type: String,
    },
    textSource: {
      required: true,
      type: String,
    },
    imageSource: {
      required: true,
      type: String,
    },
    flexDirection: {
      required: true,
      type: String,
    },
  },
  computed: {
    cssProps() {
      return {
        '--flex-direction': this.flexDirection,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.row {
  width: 25vw;
  margin-left: 80px;
  margin-right: 80px;

  @media #{$mobile} {
    margin-left: 0;
    margin-right: 0;
    width: 80%;
  }
}

.two-rows {
  display: flex;
  max-width: 80vw;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  flex-direction: var(--flex-direction);
  padding-top: 2rem;

  @media #{$mobile} {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}

.two-rows--image {
  max-width: 100%;

  @media #{$mobile} {
    max-width: 80%;
    padding-top: 1rem;
  }
}

.two-rows--image__element {
  max-width: 100%;
  object-fit: cover;

  @media #{$mobile} {
    max-width: 100%;
  }
}

.two-rows--text {
  display: flex;
  flex-direction: column;
  max-width: 80%;
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
  font-size: 14px;
  text-align: left;
}
</style>
