<template>
  <div id="nav">
    <HeaderBurgerMenu />
    <div id="header-actions">
      <atoms-button-pill @click="() => router.push({ path: '/imprint' })">
        Kontakt
      </atoms-button-pill>
      <HeaderCookieButton id="cookie-button" />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style lang="scss" scoped>
#hamburger-button {
  height: 100%;
  aspect-ratio: 1;
  background: url("~/assets/img/Hamburger.svg") center / 100% no-repeat;
}
#nav {
  margin: 0 var(--page-padding-side);
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: right;
  position: absolute;
  top: 0;
  left: 0;
  z-index: #{$z-index-header};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - (2 * var(--page-padding-side)));
  height: calc(var(--header-height) - 4rem);
  border-bottom: 2px solid #{$divider-color};
}

#header-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  &>*{
    margin: 0 1rem;
  }
}

#nav a {
  color: white;
  margin-right: 5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Rubik';
  font-weight: 700;
}

#nav a:hover {
  color: rgba(255, 255, 255, 0.6);
}

</style>
