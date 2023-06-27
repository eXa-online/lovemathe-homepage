<template>
  <div id="hamburger">
    <div id="hamburger-button" @click="open"></div>
    <div :class="{ active: isActive }" id="hamburger-menu">
      <div id="hamburger-menu__close-button" @click="close"></div>
      <AtomsNavigationLink target="/#games" text="Spiele starten" @click="close" />
      <AtomsNavigationLink target="/#about" text="Über das Projekt" @click="close" />
      <AtomsNavigationLink target="/#instruction" text="An&shy;leitung" @click="close" />
      <AtomsNavigationLink target="/#documentation" text="Doku&shy;mentation" @click="close" />
      <AtomsNavigationLink
        target="/#description"
        text="Projekt&shy;beschrei&shy;bung"
        @click="close"
      />
      <AtomsNavigationLink target="/#literature" text="Literatur" @click="close" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data () {
    return { isActive: false }
  },
  methods: {
    open () {
      this.isActive = true
    },
    close () {
      this.isActive = false
    }
  }
})
</script>

<style lang="scss" scoped>
#hamburger {
  width: calc(var(--cookie-button-size) * 0.8);
  height: calc(var(--cookie-button-size) * 0.8);
}

#hamburger-button {
  width: calc(var(--cookie-button-size) * 0.8);
  height: calc(var(--cookie-button-size) * 0.8);

  @media #{$mob}, #{$tiny} {
    position: absolute;
    left: 0;
    top: 1rem;
  }

  background: url("~/assets/img/Hamburger.svg") center / 100% no-repeat;
}
#hamburger-menu {
  position: absolute;
  left: 0;
  top: var(--header-height);
  transform: translate(-150%);
  transition: transform 0.5s ease-in-out, visibility 0.5s ease-in;
  padding: calc(var(--padding) / 2);
  max-width: 100%;
  z-index: 3;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: #FFFFFF;
  box-shadow: 0px 4px 34px rgba(135, 165, 193, 0.25);
  border-radius: 0 50px 50px;

  @media #{$mob}, #{$tiny} {
    padding: 2rem;
  }

  @media #{$mobile} {
    transform: translate(-100%);
    width: 100vw;
    top: 0;
    left: calc(-1 * var(--page-padding-side));
    border-radius: 0;
    overflow-y: scroll;
  }
}

#hamburger-menu.active {
  transform: translate(0);
  transition: transform 0.5s ease-in;
  visibility: visible;
}

#hamburger-menu__close-button {
  height: 64px;
  aspect-ratio: 1;
  margin-bottom: calc(var(--padding) / 2);
  background: url("~/assets/img/badge-close-dark.svg") center / 100% no-repeat;
}
.expand-link {
  position: relative;
  color: #9D66C8;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;

  @media #{$mobile} {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
}
</style>
