<template>
  <div class="games-section">
    <h2 class="like-h3">
      {{ props.title }}
    </h2>
    <vue-markdown v-if="props.markdown" :source="props.markdown" />
    <p v-else>
      {{ props.text || "" }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'

const props = defineProps<{
  title: string,
  text?: string,
  markdown?: string,
}>()
</script>

<style lang="scss" scoped>
.games-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 45%;
}
</style>
