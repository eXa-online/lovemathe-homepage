<template>
  <div class="imprint">
    <ImprintBody />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import ImprintBody from '@/components/ImprintBody.vue';
import Footer from '@/components/Footer.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Imprint',
});
</script>

<style lang="scss" scoped>
  .imprint {
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media #{$mobile} {
      min-height: 130vh;
    }
  }
</style>
