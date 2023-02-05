<template>
  <div id="home" class="header" :style="{
    'background-image':
      'url(' + image + ')',
  }">
    <div class="header--teaser">
      <div class="header--title">
        <h1 class="header--title__heading">
          {{ headingText }}
        </h1>
      </div>
      <div class="header--cta">
        <a :href="ctaLink">
          <button v-scroll-to="'#game'" class="header--cta__button">
            {{ ctaText }}
          </button>
        </a>
      </div>
      <div class="header--text">
        <vue-markdown :source="teaser" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  name: 'PageHeader',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      teaser: require(`../assets/markdown/${this.teaserSource}`).default,
      image: require(`../assets/img/${this.imageSource}`),
    };
  },
  props: {
    ctaText: {
      required: true,
      type: String,
      default: 'Button Text',
    },
    ctaLink: {
      required: true,
      type: String,
      default: '#',
    },
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
  },
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
}

.header--teaser {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
      rgba(214, 236, 238, 0) 0%,
      rgba(214, 236, 238, 0.354167) 48.96%,
      #d6ecee 100%);
}

.header--cta__button {
  background-color: #844ea5;
  border: none;
  border-radius: 50px;
  color: white;
  height: 4rem;
  width: 50%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: "Rubik";
  font-weight: 700;
  font-size: 1.2em;
  cursor: pointer;
}

.header--title {
  padding-top: 20%;
}

.header--title__heading {
  font-family: "Kiwi-Days";
  font-weight: 400;
  color: #0d5b67;
  font-size: 4rem;
}

.header--text {
  font-family: "Rubik";
  font-weight: "400";
  width: 50%;
  display: inline-block;
  font-size: 20px;
  color: #0d5b67;
  padding-top: 5%;
}
</style>
