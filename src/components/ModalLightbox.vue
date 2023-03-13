<template>
    <div class="lightbox">
      <button @click="showLightbox">{{ openButtonText }}</button>
      <div v-if="lightboxVisible" class="lightbox-content">
        <div>
            <h3>{{ headingText }}</h3>
            <vue-markdown :source="text" />
            <button @click="hideLightbox">{{ closeButtonText }}</button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  name: 'ModalLightbox',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      text: require(`../assets/markdown/${this.textSource}`).default,
      lightboxVisible: false,
    };
  },
  props: {
    headingText: {
      required: true,
      type: String,
    },
    textSource: {
      required: true,
      type: String,
    },
    teaserText: {
      required: true,
      type: String,
    },
    openButtonText: {
      required: true,
      type: String,
    },
    closeButtonText: {
      required: true,
      type: String,
    },
  },
  methods: {
      showLightbox() {
        this.lightboxVisible = true;
      },
      hideLightbox() {
        this.lightboxVisible = false;
      },
    },
});
</script>

<style lang="scss" scoped>

    .lightbox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .lightbox-content {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .lightbox-content div {
        background-color: white;
        padding: 1rem;
        margin-right: 20%;
        margin-left: 20%;
        border-radius: 0.5rem;
    }

    .lightbox-content h3 {
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .lightbox button {
        position: relative;
        background-color: #844EA5;
        border: none;
        border-radius: 50px;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 1.4rem;
        padding: 0.5rem;
        cursor: pointer;
    }
  </style>
