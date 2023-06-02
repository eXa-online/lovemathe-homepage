<template>
  <div class="imprint">
    <h1>Impressum</h1>
    <div class="imprint-data">
      <div class="imprint-data__column">
        <p>Verantwortlich für Inhalt und Umsetzung von eXa-online.de:</p>
        <p>eXa-online GmbH</p>
        <p>Kochstraße 138</p>
        <p>04277 Leipzig</p>
        <p><a href="tel:+493418781754">Tel.:+49 341 8781754</a></p>
        <p>Fax: +49 341 8781755</p>
        <p><a href="mailto:info@exa-online.de">info[at]exa-online.de</a></p>
        <p>Geschäftsführer:</p>
        <p>Carsten Paul</p>
      </div>
      <div class="imprint-data__column">
        <p>Registergericht:</p>
        <p>Amtsgericht Leipzig HRB 15180</p>
        <p>Sitz der Gesellschaft:</p>
        <p>eXa-online GmbH</p>
        <p>Kochstraße 138</p>
        <p>04277 Leipzig</p>
        <p>Ust.-Id.Nr. gemäß §27a Umsatzsteuergesetz:</p>
        <p>DE-197342272</p>
      </div>
    </div>
    <atoms-button-pill @click="() => router.push({ path: '/' })">
      Zurück zur Startseite
    </atoms-button-pill>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<script lang="ts">
</script>

<style lang="scss" scoped>
  .imprint {
    padding-top: calc(2rem + var(--header-height));
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: calc(100vh - var(--footer-height));
    box-sizing: border-box;
  }
  .imprint-data {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media #{$tab}, #{$desk}, #{$big} {
      flex-direction: row;
    }

    justify-content: space-evenly;
  }

  .imprint-data__column {
    padding: 0 1rem;
  }
</style>
