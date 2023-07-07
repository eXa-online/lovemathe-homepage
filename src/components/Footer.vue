<template>
  <div id="footer">
    <nuxt-img
      src="/footer_logo.webp"
      loading="lazy"
      alt="eXa-Online GmbH"
      width="1222"
      height="170"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
    />
    <div id="contact-data">
      <p>eXa-Online GmbH</p>
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
    object-fit: contain;
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
