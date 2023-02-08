<template>
  <div class="overlayWrapper">
    <div class="overlayBtn" v-on:click="openOverlay()"></div>

    <div :class="{active: isActive}" class="overlay" v-on:click="closeOverlay()">
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
  .overlayWrapper {
    position: absolute;
    right: 0;
    left: 0;

    @media #{$mobile} {
      top: 0;
    }
    @media #{$min-tablet} {
      bottom: 0;
    }
  }

  .overlayBtn {
    position: absolute;
    cursor: pointer;
    width: 6rem;
    height: 6rem;
    background: url("../assets/img/badge.svg") center / 100% no-repeat;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.5);
    border-radius: 3rem;
    z-index: 3;
    transition: transform 0.3s;

    @media #{$mobile} {
      top: 1rem;
      right: 1rem;
    }
    @media #{$tablet} {
      bottom: -1rem;
      left: 3rem;
    }
    @media #{$desktop} {
      bottom: -1rem;
      left: 3rem;
    }
  }

  .overlayBtn:hover {
    transform: scale(1.1);
  }

  .overlay {
    text-align: center;
    padding: 3rem;
    background: linear-gradient(45deg, rgba(20,90,127,1) 0%, rgba(220,27,85,1) 0%, rgba(253,64,61,1) 100%);
    z-index: -1;
    cursor: pointer;

    @media #{$mobile} {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      opacity: 0;
      transform: scaleY(0.75) translateY(-5rem);
      transition: all 0.3s;
    }

    @media #{$min-tablet} {
      position: absolute;
      bottom: -9rem;
      left: -6rem;
      width: 16rem;
      border-radius: 16rem;
      transform: scale(0);
      transition: transform 0.5s, left 0.5s;
      box-shadow: 0 0 5px 2px rgba(0,0,0,0.5);
      z-index: 3;
    }
    @media #{$desktop} {
      bottom: -9rem;
      left: -6.75rem;
    }
  }

  .overlay.active {
    z-index: 5;
    opacity: 1;
    transform: scale(1) translateY(0);

    @media #{$min-tablet} {
      left: 2rem;
    }
  }

  .overlay__text {
    color: var(--white);
    text-transform: uppercase;
    text-align: center;

    @media #{$min-tablet} {
      font-size: 14px;
      line-height: 18px;
    }
  }
  .overlay__bigText {
    font-family:"Proxima Nova Extrabold", sans-serif;
    color: var(--white);
    transform: scale(0);

    @media #{$mobile} {
      font-size: 3rem;
      line-height: 3rem;
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
    @media #{$min-tablet} {
      width: 1rem;
      height: 1rem;
    }
  }
</style>
