<template>
  <div class="imprint_wrapper">
    <div class="imprint_content">
      <h2 class="imprint_content--heading">Impressum</h2>
      <TwoRowsText
        text-source-left="imprint/imprint_left.md"
        text-source-right="imprint/imprint_right.md" flex-direction="row" />
    </div>
    <router-link to="/">
      <button class="imprint-button">
        Zurück zur Startseite
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TwoRowsText from '@/components/TwoRowsText.vue';

export default defineComponent({
  name: 'ImprintBody',
  components: {
    TwoRowsText,
  },
});
</script>

<style lang="scss" scoped>
.imprint_wrapper {
  display: flex;
  flex-direction: column;
  background-color: #d6ecee;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media #{$mobile} {
    height: 200vh;
  }
}

.imprint_content {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
}

.imprint_content--heading {
  font-family: Kiwi-Days;
  font-weight: 400;
  font-size: 2.8rem;
  color: #0d5b67;

  @media #{$mobile} {
    font-size: 1.8rem;
  }
}

.imprint-button {
  font-family: "Rubik";
  font-weight: 700;
  font-size: 1.2rem;
  color: #FFF;
  background-color: #844ea5;
  border-radius: 50px;
  border: none;
  padding: 1rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  cursor: pointer;

  @media #{$mobile} {
    font-size: 1.2rem;
  }
}

</style>
