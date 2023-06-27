<template>
  <div id="hero">
    <div class="hero-side">
      <h1>LoveMathe</h1>
      <vue-markdown class="hero-sub-heading" :source="descriptionText" />
    </div>
    <ClientOnly>
      <div class="hero-side">
        <span v-for="stat in analyzedStatistics" :key="stat.description" class="statistics-row">
          <number
            tag="p"
            class="number-thick"
            :to="stat.value"
            :duration="2"
          />
          <p class="number-thick"> {{ stat.unit }}</p>
          <p class="thin-description">{{ stat.description }}</p>
        </span>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()

const descriptionText = requireMarkdown('hero/hero_description.md')
const rawStatistics = requireMarkdown('hero/hero_statistics.md')

function readStatisticLine (line: string) {
  const lineWithoutPrefix = line.substring(2)
  const value = lineWithoutPrefix.match(/^\d+/)[0]
  const unit = lineWithoutPrefix.replace(value, '').match((/^.+? /))[0].trim()

  const description = lineWithoutPrefix.split(' ').slice(1).join(' ')

  return { value, unit, description }
}

const analyzedStatistics = rawStatistics.split('\n').map(readStatisticLine)
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  z-index: 0;
  min-height: calc(100vh - var(--header-height));
  // padding: 0 5%;
  padding-top: var(--header-height);

  &::before {
    content: " ";
    position: absolute;
    top: calc(0.157 * var(--header-height));
    background-color: transparent;
    z-index: -1;

    background-image: url('~/assets/img/bubbles_desk.svg');
    @media #{$big} {
      background-image: url('~/assets/img/bubbles_big.svg');
    }
    @media #{$tiny},#{$mob} {
      background-image: url('~/assets/img/bubbles_mob.svg');
      top: 0;
    }
    @media #{$tab} and #{$isPortrait} {
      background-image: url('~/assets/img/bubbles_mob.svg');

    }
    background-size: 100%;
    background-repeat: no-repeat;

    width: 100vw;
    height: 500%;
  }

  @media #{$desk},#{$big} {
    padding-bottom: var(--header-height);
    min-height: calc(100vh - var(--header-height) - var(--header-height));
  }

  @media #{$tiny},#{$mob} {
    flex-direction: column-reverse;
  }
}
.hero-side {
  min-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;

  @media #{$tiny},#{$mob} {
    width: 100%;
  }

  &:last-child {
    position: relative;
    background-color: transparent;

    &::before {
      content: " ";
      position: absolute;
      margin-left: 4rem;
      width: 500px;
      aspect-ratio: 1;
      z-index: -1;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      @media #{$tiny}, #{$mob} {
        margin-left: 0;
      }
    }
  }
}

.statistics-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10%;
  min-width: 0%;

  @media #{$tiny},#{$mob} {
    width: 80%;
  }
  .thin-description {
    width: 10px;
    padding-left: 20px
  }
}
</style>
