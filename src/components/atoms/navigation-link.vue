<template>
  <router-link class="navigation-link" :to="$props.target">
    <h2 class="navigation-link__text smaller">
      {{ props.text }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps({
  target: {
    required: true,
    type: String
  },
  text: {
    required: true,
    type: String
  }
})
</script>

<style lang="scss" scoped>
.navigation-link__text {
  margin: 0;
  padding: 0;
  text-align: start;
  width: 100%;
}
.navigation-link {
  text-decoration: none;
  margin: calc(var(--padding) / 4);
}
</style>
