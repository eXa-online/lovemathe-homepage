<template>
  <a class="expand-link" :class="isActive ? 'active' : ''" @click="toggle">{{ linkText }}</a>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  emits: ['expand', 'retract'],
  data () {
    return { isActive: false }
  },
  computed: {
    linkText () {
      if (this.isActive) {
        return 'Weniger'
      }
      return 'Mehr erfahren'
    }
  },
  methods: {
    toggle () {
      if (this.isActive) {
        this.retract()
      } else {
        this.expand()
      }
    },
    expand () {
      this.isActive = true
      this.$emit('expand')
    },
    retract () {
      this.isActive = false
      this.$emit('retract')
    }
  }
})
</script>

<style lang="scss" scoped>
.expand-link {
  position: relative;
  color: #9D66C8;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;

  @media #{$mobile} {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
}
</style>
