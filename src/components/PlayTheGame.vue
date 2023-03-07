<template>
  <div id="game" class="play_game">
    <div class="play_game--heading">
      <h2 class="play_game--heading__h2">Starten</h2>
    </div>
    <div class="play-game--item__container">
      <StartGameElement heading-text="Testen" image-source="testen_sonne.svg"
        teaser-text="Hier geht es direkt zu unserem Testspiel. Nur ein Klick entfernt." button-text="Testspiel starten"
        button-link="https://preschooltest.lovemathe.de" v-bind:button-enabled="true" />
      <StartGameElement heading-text="Fördern" image-source="foerdern_muschel.svg"
        teaser-text="Wenn der Test auf einem Gebiet nicht erfolgreich war, gibt es hier die Möglichkeit durch gezielte Förderspiele an einer Verbesserung zu arbeiten."
        button-text="Förderspiel starten" button-link="" v-bind:button-enabled="false" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartGameElement from './StartGameElement.vue';

export default defineComponent({
  name: 'PlayTheGame',
  components: {
    StartGameElement,
  },
});
</script>

<style lang="scss" scoped>
.play_game {
  display: flex;
  flex-direction: column;
  background-color: #ADE3EA;
  height: 52rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 3rem;

  @media #{$mobile} {
    height: 84rem;
  }
}

.play-game--item__container {
  display: flex;
  flex-direction: row;

  @media #{$mobile} {
    flex-direction: column;
    height: 100%;
  }
}

.play_game--heading {
  line-height: 0;
  padding-top: 1.5rem;
}

.play_game--heading__h2 {
  font-family: Rubik;
  font-weight: 700;
  font-size: 50px;
  color: #0D5B67
}
</style>
