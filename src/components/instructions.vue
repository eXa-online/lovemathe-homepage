<template>
  <div id="instruction">
    <h2>Anleitung</h2>
    <instructions-row title="Test&shy;anleitung" markdown="instruction/test_instruction.md" />
    <instructions-row
      title="Auswertung"
      markdown="instruction/evaluation.md"
      inverted
      button-text="Zum Cheatsheet"
    >
      <template #lightbox>
        <img style="width: 100%;" src="~/assets/img/test_instruction.webp" alt="test instructions">
      </template>
    </instructions-row>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#instruction {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
</style>
