<template>
  <div id="about">
    <h2>Über das Projekt</h2>
    <about-row title="Die Idee" markdown="about_us/idea.md" />
    <about-row title="Ferry Porsche Challenge" markdown="about_us/ferry_porsche_challenge.md" />
    <about-row title="Die Relevanz" markdown="about_us/relevance.md" />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#about {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  p {
    text-align: start;
  }

  h2 {
    margin-bottom: 2rem; 
    @media #{$desk} {
      margin-bottom: 4rem; 
    }
  }
}
</style>
