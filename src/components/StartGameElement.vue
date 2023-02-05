<template>
  <div class="play_game--item">
    <h3 class="play_game--heading__h3">
      {{ headingText }}
    </h3>
    <div class="play_game--image">
      <img :src="image">
    </div>
    <div class="play_game--text">
      <vue-markdown :source="teaserText" />
    </div>
    <div class="play_game--cta">
      <a :href="buttonLink">
        <button v-if="!buttonEnabled" class="play_game--cta__button" disabled>
          {{ buttonText }}
        </button>
        <button v-else class="play_game--cta__button">
          {{ buttonText }}
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  name: 'PlayTheGame',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      image: require(`../assets/img/${this.imageSource}`),
    };
  },
  props: {
    headingText: {
      required: true,
      type: String,
    },
    imageSource: {
      required: true,
      type: String,
    },
    teaserText: {
      required: true,
      type: String,
    },
    buttonText: {
      required: true,
      type: String,
    },
    buttonLink: {
      required: true,
      type: String,
    },
    buttonEnabled: {
      required: true,
      type: Boolean,
    },
  },
});
</script>

<style scoped>
.play_game--item {
  display: flex;
  background-color: #ADE3EA;
  max-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-left: 20px;
  margin-right: 20px;
}

.play_game--heading__h3 {
  font-family: Kiwi-Days;
  font-weight: 400;
  color: #0D5B67;
  font-size: 24px;
}

.play_game--image {
  display: flex;
  width: 40vh;
  height: 60vh;
  justify-content: center;
  align-items: center;
}

.play_game--cta__button {
  position: relative;
  background-color: #844EA5;
  border: none;
  border-radius: 50px;
  color: white;
  height: 6rem;
  width: 16em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  font-weight: 700;
  font-size: 2em;
}

.play_game--cta__button:disabled {
  background-color: #959595;
}

.play_game--text {
  font-family: 'Rubik';
  font-weight: '400';
  width: 25rem;
  display: inline-block;
  font-size: 14px;
  color: #0D5B67;
  padding-top: 5%;
  height: 10rem;
}
</style>
