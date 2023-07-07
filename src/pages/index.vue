<template>
  <div class="home">
    <Hero />
    <DelayHydration><Games /></DelayHydration>
    <DelayHydration><About /></DelayHydration>
    <!-- prevent costly sections from impacting FCP and LCP too much-->
    <ClientOnly>
      <DelayHydration><LazyInstructions /></DelayHydration>
      <DelayHydration><LazyDocumentation /></DelayHydration>
    </ClientOnly>
    <DelayHydration><LazyDescription /></DelayHydration>
    <DelayHydration><LazyLiterature /></DelayHydration>
  </div>
</template>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
  }
</style>
