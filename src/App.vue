<template>
  <div id="nav">
    <router-link to="/#test">Starten</router-link>
    <router-link to="/#about">Über</router-link>
    <router-link to="/#guide">Anleitung</router-link>
    <router-link to="/#documentation">Dokumentation</router-link>
  </div>
  <router-view />
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
