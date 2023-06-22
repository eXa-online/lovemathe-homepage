<template>
  <a class="expand-link" :class="isActive ? 'active' : ''" @click="toggle">{{ linkText }}</a>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  emits: ['expand', 'collapse'],
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
        this.collapse()
      } else {
        this.expand()
      }
    },
    expand () {
      this.isActive = true
      this.$emit('expand')
    },
    collapse () {
      this.isActive = false
      this.$emit('collapse')
    }
  }
})
</script>

<style lang="scss" scoped>
.expand-link {
  position: relative;
  color: #{$cta-background-color};
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
