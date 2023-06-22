<template>
  <button class="expand-button" :class="{ active: isActive }" @click="toggle">
    {{ buttonText }}
  </button>
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
    buttonText () {
      if (this.isActive) {
        return 'Weniger'
      }
      return 'Mehr'
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
.expand-button {
  position: relative;
  background-color: #9D66C8;
  border: none;
  border-radius: 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1.2rem;
  cursor: pointer;

  &.active {
    background: #FFFFFF;
    border: 2px solid #9D66C8;
    color:#9D66C8;
    border-radius: 50px;
  }

  @media #{$mobile} {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
}
</style>
