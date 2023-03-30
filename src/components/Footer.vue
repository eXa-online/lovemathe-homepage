<template>
  <footer>
    <div class="homepage-footer">
      <a href="https://exa-online.de">
        <div class="homepage-footer--company-logo">
          <img loading="lazy" class="homepage-footer--company-logo--image mobile"
            src="~/assets/img/footer_logo_mobile.webp"
            alt="eXa-online GmbH"
          />
          <img loading="lazy" class="homepage-footer--company-logo--image desktop" src="~/assets/img/footer_logo.webp" alt="eXa-online GmbH"/>
        </div>
      </a>
      <nav class="homepage-footer--nav">
        <ul>
          <li><a href="/">Home</a></li>
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
  &.desktop {
    display: inherit;
    @media #{$mobile} {
      display: none;
    }
  }
  &.mobile {
    display: none;
    @media #{$mobile} {
      display: inherit;
    }
  }

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
