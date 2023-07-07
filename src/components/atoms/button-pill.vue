<template>
  <button class="button" :class="{ capitalize: props.capitalize, uppercase: props.uppercase, inactive: props.disabled }" :disabled="props.disabled || false">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  capitalize?: boolean,
  uppercase?: boolean,
  disabled?: boolean
}>()
</script>

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

  &.inactive {
    color: #{$inactive-cta-color};
    background-color: white;
    border: 2px solid #{$inactive-cta-color};

    &:hover {
      cursor: initial;
    }
  }

  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120.28%;

  &.capitalize {
    text-transform: capitalize;
  }
  &.uppercase {
    text-transform: uppercase;
  }

  @media #{$mobile} {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
}
</style>
