<template>
  <div id="documentation">
    <h2>Dokumentation</h2>
    <atoms-content-card class="presentation">
      <p style="width: 100%; font-size: 10vw;text-align: center; color: lightgrey;">
        Präsentation
      </p>
      <!-- <iframe
        class="presentation--iframe"
        title="Präsentation"
        src="https://my.visme.co/_embed/8r46mwwk-webseite-lovemathe"
        style="border:0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      /> -->
    </atoms-content-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#documentation {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;

  h2 {
    margin-bottom: 4rem;
    @media #{$tiny},#{$mob},#{$tab} {
      font-size: var(--section-heading-textsize-small);
    }
  }
}
</style>
