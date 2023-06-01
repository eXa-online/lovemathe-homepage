<template>
  <Header class="max-width-restrained"/>
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
  padding: 0 $page-padding-side;
  background: darkgray;
  // background: url('~/assets/img/design_guide.png');
}
</style>
