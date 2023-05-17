<template>
  <div class="lightbox">
    <button class="lightbox-button--open" @click="showLightbox">
      {{ props.buttonText }}
    </button>
    <div v-if="lightboxVisible" class="lightbox-content">
      <div class="lightbox-content--box">
        <div class="lightbox-button--close" @click="hideLightbox" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

const props = defineProps({
  buttonText: {
    required: false,
    type: String,
    default: 'Mehr'
  }
})
</script>

<script lang="ts">
export default defineComponent({
  data () {
    return { lightboxVisible: false }
  },
  methods: {
    showLightbox () {
      this.lightboxVisible = true
      document.addEventListener('click', this.handleOutsideClick)
    },
    hideLightbox () {
      this.lightboxVisible = false
      document.removeEventListener('click', this.handleOutsideClick)
    },
    handleOutsideClick (event: { target: any; }) {
      const lightboxContent = document.querySelector('.lightbox-content--box')
      const lightboxIsTarget = lightboxContent.contains(event.target) || event.target.classList.contains('lightbox-button--open')
      if (this.lightboxVisible && !lightboxIsTarget) {
        this.hideLightbox()
      }
    }
  }
})
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

.lightbox-content--box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 3rem;
  margin-right: 20%;
  margin-left: 20%;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  justify-content: flex-start;

  max-height: 80vh;
  max-width: 80vw;
  overflow: scroll;

  @media #{$mobile} {
    padding: 1rem;
    margin-right: 5%;
    margin-left: 5%;
    font-size: 0.9rem;
  }
}

.lightbox-content h3 {
  font-family: Kiwi-Days;
  font-weight: 400;
  color: #0d5b67;
  font-size: 1.8rem;

  @media #{$mobile} {
    font-size: 1.2rem;
    word-wrap: break-word;
  }
}

.lightbox-button--open {
  position: relative;
  background-color: #844EA5;
  border: none;
  border-radius: 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  margin-top: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 1.2rem 2.4rem;
  cursor: pointer;

  @media #{$mobile} {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
}

.lightbox-button--close {
  display: flex;
  position: relative;
  flex-shrink: 0;
  margin-left: auto;
  width: 2rem;
  height: 2rem;
  background: url("~/assets/img/badge-close-dark.svg") center / 100% no-repeat;
  cursor: pointer;

  @media #{$mobile} {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
