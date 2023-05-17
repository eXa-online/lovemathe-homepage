<template>
  <div class="content-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.content-card {
  background: white;
  box-shadow: 0px 4px 34px rgba(135, 165, 193, 0.25);
  border-radius: 50px;
  padding: 4rem;

  @media #{$mob}, #{$tiny} {
    padding: 2rem;
  }
}
</style>
