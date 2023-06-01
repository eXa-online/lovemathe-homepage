<template>
  <atoms-content-card id="games">
    <img src="~/assets/img/mauli.svg" alt="mauli" id="mauli" />
    <GamesSection title="Testen" :markdown="testGameMarkdown">
      <atoms-button-pill uppercase>
        Zum Testspiel
      </atoms-button-pill>
    </GamesSection>
    <div class="divider" />
    <GamesSection title="Fördern" :markdown="advancedGameMarkdown">
      <atoms-button-pill class="inactive" uppercase>
        Zum Förderspiel
      </atoms-button-pill>
    </GamesSection>
  </atoms-content-card>
</template>

<script setup lang="ts">
import { useMarkdownImport } from '~/composables/use-requires'

const requireMarkdown = useMarkdownImport()
const testGameMarkdown = requireMarkdown('games/test-game.md')
const advancedGameMarkdown = requireMarkdown('games/advanced-game.md')
</script>

<style lang="scss" scoped>
$mauli-offset-mult: 0.82;

#games {
  margin: calc(4rem + (var(--mauli-height) * $mauli-offset-mult)) 0 4rem;
  justify-content: center;
  position: relative;

  @extend .switching-flex-direction;
}
#mauli {
  height: var(--mauli-height);
  position: absolute;
  top: calc(var(--mauli-height) * -1 * $mauli-offset-mult);
  left: 10%;
}

.inactive {
  color: lightgray;
  background-color: white;
  border: 2px solid lightgray;

  &:hover {
    cursor: initial;
  }
}

.divider {
  border-left: 2px solid var(--divider-color);
  width: 0;
  min-height: 100%;
  margin: 0 2rem;
}

</style>
