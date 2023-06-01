<template>
  <div class="overlay-wrap">
    <div class="overlayBtn" @click="openOverlay()" />
    <div :class="{ active: isActive }" class="overlay" @click="closeOverlay()">
      <p class="overlay__text">
        Wir respektieren<br>Ihre Privatsphäre
      </p>
      <div>
        <div class="overlay__bigText overlay__space">
          keine
        </div>
        <div class="overlay__bigText">
          Cookies
        </div>
        <div class="overlay__bigText overlay__space">
          kein
        </div>
        <div class="overlay__bigText">
          Tracking
        </div>
        <div class="overlay__bigText overlay__space">
          keine
        </div>
        <div class="overlay__bigText">
          Zugriffsprotokolle
        </div>
      </div>
      <div class="close">
        <div class="close__button" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    openOverlay () {
      this.isActive = true
    },
    closeOverlay () {
      this.isActive = false
    }
  }
})
</script>

<style lang="scss" scoped>
.overlay-wrap{
  position: relative;

  @media #{$mobile}, #{$tablet-portrait} {
    position: inherit;
  }
}
.overlayBtn {
  cursor: pointer;
  width: var(--cookie-button-size);
  height: var(--cookie-button-size);
  background: url("~/assets/img/badge.svg") center / 100% no-repeat;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: calc(var(--cookie-button-size) / 2);
  z-index: 3;
  transition: transform 0.3s;
}

.overlayBtn:hover {
  transform: scale(1.1);
}

.overlay {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(45deg, rgba(20, 90, 127, 1) 0%, #4E186F 0%, #844EA5 100%);
  z-index: -1;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(calc(50% - (var(--cookie-button-size) / 2)), calc(-50% + (var(--cookie-button-size) / 2)));

  @media #{$mobile} {
    opacity: 0;
    transform: scaleY(0.75) translateY(-5rem) translate(-50%, -50%);
    transition: all 0.4s;
    width: 100vw;
    height: 70vw;
    right: calc(-1 * var(--page-padding-side));
    min-height: 35rem;
    padding: 0;
    transform-origin: center center;
  }

  @media #{$tablet-portrait} {
    opacity: 0;
    transform: scaleY(0.75) translateY(-5rem) translate(-50%, -50%);
    transition: all 0.3s;
    z-index: -1;
    width: 50vw;
    height: 50vw;
    min-height: 35rem;
    border-radius: 10%;
    transform-origin: center center;
  }

  @media #{$min-tablet} {
    width: 16rem;
    border-radius: 16rem;
    transform: translate(
        calc(50% - (var(--cookie-button-size) / 2)),
        calc(-50% + (var(--cookie-button-size) / 2))
      )
      scale(0.01); // TODO: analyze why scale(0) disables animation
    transition: transform 0.5s, left 0.5s;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
    z-index: var(--z-index-cookie-inactive);
  }

  @media #{$desktop} {
    top: 0;
    right: 0;
  }
}

.overlay.active {
  z-index: var(--z-index-cookie-active);
  opacity: 1;
  transform: scale(1) translateY(0) translate(0, 0);

  @media #{$tablet-portrait} {
    top: 50%;
    z-index: 5;
  }
}

.overlay__text {
  color: white;
  text-transform: uppercase;
  text-align: center;

  @media #{$min-tablet} {
    font-size: 14px;
    line-height: 18px;
  }
}

.overlay__bigText {
  font-family: "Proxima Nova Extrabold", sans-serif;
  color: white;
  transform: scale(0);

  @media #{$mobile} {
    font-size: 2.2rem;
    line-height: 3rem;
  }

  @media #{$tablet-portrait} {
    font-size: 3rem;
    line-height: 4rem;
  }

  @media #{$min-tablet} {
    font-size: 1.6rem;
    line-height: 1.7rem;
  }
}

.active .overlay__bigText {
  transform: scale(1);
}

.active .overlay__bigText:nth-child(1) {
  transition: transform 0.2s ease 0.5s;
}

.active .overlay__bigText:nth-child(2) {
  transition: transform 0.2s ease 0.8s;
}

.active .overlay__bigText:nth-child(3) {
  transition: transform 0.2s ease 1.1s;
}

.active .overlay__bigText:nth-child(4) {
  transition: transform 0.2s ease 1.4s;
}

.active .overlay__bigText:nth-child(5) {
  transition: transform 0.2s ease 1.7s;
}

.active .overlay__bigText:nth-child(6) {
  transition: transform 0.2s ease 2s;
}

.overlay__space {
  @media #{$mobile} {
    margin-top: 2rem;
  }

  @media #{$min-tablet} {
    margin-top: 1rem;
  }
}

.close {
  @media #{$mobile} {
    display: flex;
    margin-top: 3rem;
    margin-right: 3rem;
  }

  @media #{$tablet-portrait} {
    display: flex;
    margin-top: 3rem;
  }

  @media #{$min-tablet} {
    position: absolute;
    top: 50%;
  }
}

.close__button {
  background: url("~/assets/img/badge-close.svg") center / 100% no-repeat;

  @media #{$mobile} {
    display: flex;
    margin-left: auto;
    width: 2rem;
    height: 2rem;
  }

  @media #{$tablet-portrait} {
    display: flex;
    margin-left: auto;
    width: 2rem;
    height: 2rem;
  }

  @media #{$min-tablet} {
    width: 1rem;
    height: 1rem;
  }
}
</style>
