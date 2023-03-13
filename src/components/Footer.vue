<template>
  <footer>
    <div class="homepage-footer">
      <a href="https://exa-online.de">
        <div class="homepage-footer--company-logo">
          <img class="homepage-footer--company-logo--image" :src="logo" :alt="companyName">
        </div>
      </a>
      <nav class="homepage-footer--nav">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      companyName: 'eXa-online GmbH',
    };
  },
  methods: {
    imageSource(): string {
      if (screen.orientation.type === 'portrait-primary') {
        return 'footer_logo_mobile.png';
      }
      return 'footer_logo.png';
    },
  },
  computed: {
    logo(): string {
      const path = this.imageSource();
      return require(`../assets/img/${path}`);
    },
  },
});
</script>

<style lang="scss">
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem;
  background-color: #ADE2EA;
  color: #0D5B67;
  font-family: Rubik;
}

.homepage-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}

.homepage-footer--company-logo {
  height: 2rem;

  @media #{$mobile} {
    height: 3rem;
  }
}

.homepage-footer--company-logo--image {
  height: 100%;
}

.homepage-footer--nav ul {
  list-style: none;
  display: flex;
}

.homepage-footer--nav li {
  margin-right: 1rem;
}

.homepage-footer--nav a {
  color: #0D5B67;
  text-decoration: none;
}
</style>
