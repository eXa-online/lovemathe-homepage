<template>
  <div id="nav">
    <router-link v-scroll-to="'#game'" to="#">Starten</router-link>
    <router-link v-scroll-to="'#about'" to="#">Über</router-link>
    <router-link v-scroll-to="'#instructions'" to="#">Anleitung</router-link>
    <router-link v-scroll-to="'#documentation'" to="#">Dokumentation</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: 'Rubik';
  src: url(./assets/fonts/Rubik-Regular.woff) format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Rubik';
  src: url(./assets/fonts/Rubik-Bold.woff) format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Kiwi-Days';
  src: url(./assets/fonts/Kiwi-Days.woff2) format('woff2');
  font-weight: 400;
  font-style: normal;
}

#nav {
  margin: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: right;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: linear-gradient(180deg, rgba(58, 80, 83, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

  @media #{$mobile} {
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

#nav a {
  color: #FFFFFF;
  margin-right: 5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Rubik';
  font-weight: 700;

  @media #{$mobile} {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: 0.85rem;
    font-weight: 500;
  }
}

#nav a:hover {
  color: rgba(255, 255, 255, 0.6);
}

</style>
