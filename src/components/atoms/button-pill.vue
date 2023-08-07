<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  position: relative;
  background-color: #{$cta-background-color};
  border: none;
  border-radius: 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  text-transform: uppercase;

  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120.28%;

  @media #{$mobile} {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
}
</style>
