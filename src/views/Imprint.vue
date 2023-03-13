<template>
  <div class="imprint">
    <ImprintBody />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImprintBody from '@/components/ImprintBody.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Imprint',
  components: {
    ImprintBody,
    Footer,
},
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
