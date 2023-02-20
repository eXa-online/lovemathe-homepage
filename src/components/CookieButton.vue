<template>
  <div class="overlayBtn" v-on:click="openOverlay()"></div>
  <div :class="{ active: isActive }" class="overlay" v-on:click="closeOverlay()">
    <p class="overlay__text">We Respect<br>Your Privacy</p>
    <div>
      <div class="overlay__bigText overlay__space">no</div>
      <div class="overlay__bigText">cookies</div>
      <div class="overlay__bigText overlay__space">no</div>
      <div class="overlay__bigText">tracking</div>
      <div class="overlay__bigText overlay__space">no</div>
      <div class="overlay__bigText">access logs</div>
    </div>
    <div class="close">
      <div class="close__button"></div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'overlay',
  components: {
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openOverlay() {
      this.isActive = true;
    },
    closeOverlay() {
      this.isActive = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.overlayBtn {
  position: absolute;
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  background: url("../assets/img/badge.svg") center / 100% no-repeat;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 3rem;
  z-index: 3;
  transition: transform 0.3s;
  transform: translate(-50%, -50%);

  @media #{$mobile} {
    top: 20%;
    left: 25%;
    width: 5rem;
    height: 5rem;
  }

  @media #{$tablet-portrait} {
    top: 15%;
    left: 20%;
  }

  @media #{$tablet} {
    bottom: -1rem;
    left: 3rem;
  }

  @media #{$desktop} {
    top: 40%;
    left: 20%;
  }
}

.overlayBtn:hover {
  transform: scale(1.1) translate(-50%, -50%);
}

.overlay {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(45deg, rgba(20, 90, 127, 1) 0%, #4E186F 0%, #844EA5 100%);
  z-index: -1;
  cursor: pointer;
  transform: translate(-50%, -50%);

  @media #{$mobile} {
    position: absolute;
    left: 50%;
    top: 45%;
    opacity: 0;
    transform: scaleY(0.75) translateY(-5rem) translate(-50%, -50%);
    transition: all 0.4s;
    width: 100%;
    height: 70%;
    min-height: 35rem;
    padding: 0;
    transform-origin: center center;
  }

  @media #{$tablet-portrait} {
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: 0;
    transform: scaleY(0.75) translateY(-5rem) translate(-50%, -50%);
    transition: all 0.3s;
    z-index: -1;
    width: 50%;
    height: 50%;
    border-radius: 10%;
    transform-origin: center center;
  }

  @media #{$min-tablet} {
    position: absolute;
    left: -6rem;
    width: 16rem;
    border-radius: 16rem;
    transform: scale(0) translate(-50%, -50%);
    transition: transform 0.5s, left 0.5s;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
    z-index: 3;
  }

  @media #{$desktop} {
    top: calc(40% - 8rem);
    left: calc(20% - 8rem);
  }
}

.overlay.active {
  z-index: 101;
  opacity: 1;
  transform: scale(1) translateY(0) translate(-50%, -50%);

  @media #{$min-tablet} {
    left: 20%;
  }

  @media #{$tablet-portrait} {
    left: 50%;
    top: 50%;
    z-index: 5;
  }
}

.overlay__text {
  color: #fff;
  text-transform: uppercase;
  text-align: center;

  @media #{$min-tablet} {
    font-size: 14px;
    line-height: 18px;
  }
}

.overlay__bigText {
  font-family: "Proxima Nova Extrabold", sans-serif;
  color: #fff;
  transform: scale(0);

  @media #{$mobile} {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media #{$tablet-portrait} {
    font-size: 3rem;
    line-height: 4rem;
  }

  @media #{$min-tablet} {
    font-size: 24px;
    line-height: 28px;
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
  background: url("../assets/img/badge-close.svg") center / 100% no-repeat;

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
