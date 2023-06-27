<template>
  <Header class="max-width-restrained" />
  <router-view />
  <Footer />
</template>

<style lang="scss">

/**
 * Smooth scrolling on the whole document
 */
html {
  scroll-behavior: smooth;
}
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

body {
  margin: 0;
  padding: 0 var(--page-padding-side);
  background-color: #{$website-background};
  background-image: url('~/assets/img/background.svg');
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
}
</style>
