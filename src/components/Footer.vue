<template>
  <div id="footer">
    <img src="~/assets/img/footer_logo.webp" alt="eXa-online GmbH">
    <div id="contact-data">
      <p>eXa-online GmbH</p>
      <p>Kochstraße 138</p>
      <p>04277 Leipzig</p>
      <p><a href="tel:+493418781754">Tel.:+49 341 8781754</a></p>
      <p><a href="mailto:info@exa-online.de">info[at]exa-online.de</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  background: white;
  box-shadow: 0px -4px 38px rgba(135, 165, 193, 0.25);
  margin-left: calc(-1 * var(--page-padding-side));
  width: 100vw;
  height: var(--footer-height);

  @extend .switching-flex-direction;
  justify-content: space-evenly;

  img {
    max-width: 100%;
    width: 40%;
  }

  p, a, strong {
    font-size: var(--button-text-size);
    margin: 0;
  }

  p>a {
    font-weight: 700;
  }
}
  .imprint {
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media #{$mobile} {
      min-height: 130vh;
    }
  }
</style>
