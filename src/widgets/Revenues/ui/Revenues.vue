<script setup lang="ts">
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { useI18n } from "vue-i18n";
import List from "./List.vue";

const { t } = useI18n({ useScope: "global" });

const { dimensions } = useWindowSize();
</script>

<template>
  <div class="revenues" id="revenues">
    <div class="container text-container">
      <h2 class="title">
        {{ t("titles.cell") }} <span class="green-text">GTeh</span>
      </h2>
      <h4 class="subtitle">
        {{ t("subtitles.cell") }}
      </h4>
      <List />
      <div class="btn-block">
        <a href="https://t.me/gtehpro_bot">
          <div class="btn btn-catalog">{{ t("buttons.catalog") }}</div>
        </a>
        <a href="https://t.me/ameltano">
          <div class="btn btn-consultation">
            {{ t("buttons.consultation") }}
          </div>
        </a>
      </div>
    </div>
    <div v-if="dimensions.width.value >= 1000" class="bg-image" />
    <div v-else class="bg-image-mobile" />
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.revenues {
  position: relative;
}

.text-container {
  margin-top: 30px;

  @media (max-width: 1000px) {
    width: fit-content;
    margin: 30px auto 0;
  }
}
.title {
  font-size: 60px;
  line-height: 120%;
  letter-spacing: -2%;
  max-width: 500px;

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: $md) {
    font-size: 44px;
  }

  @media (max-width: $sm) {
    font-size: 38px;
  }
}

.bg-image {
  z-index: -1;
  background-image: url("../../../shared/assets/img/revenues.webp");
  width: 947px;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
  position: absolute;
  right: 0px;
  top: 0px;

  @media (max-width: 1200px) {
    width: 750px;
    height: 570.138px;
    top: calc(80% - 570px);
  }

  @media (max-width: 1000px) {
    display: none;
  }
}

.bg-image-mobile {
  margin: -50px auto 0;
  background-image: url("../../../shared/assets/img/revenues.webp");
  width: 947px;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;

  @media (max-width: 987px) {
    width: 750px;
    height: 570.138px;
  }

  @media (max-width: 790px) {
    width: 500px;
    height: 381.569px;
  }

  @media (max-width: 540px) {
    width: 400px;
    height: 305.255px;
  }

  @media (max-width: 440px) {
    width: 350px;
    height: 266.093px;
  }
}

.subtitle {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  max-width: 453px;

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: $md) {
    font-size: 20px;
  }

  @media (max-width: $sm) {
    font-size: 18px;
  }
}

.btn-block {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 10px;

  @media (max-width: 1000px) {
    margin-left: 50px;
  }

  @media (max-width: 426px) {
    margin: 40px auto 0;
  }
}

.btn-catalog {
  color: rgb(12, 12, 21);
  font-size: 16px;
  line-height: 20px;
  width: 286px;
  height: 60px;
  background-image: url("../../../shared/assets/btns/revenues/catalog.svg");
  transition: 0.3s;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/revenues/catalogHover.svg");
  }
}

.btn-consultation {
  color: $green;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  width: 286px;
  height: 60px;
  background-image: url("../../../shared/assets/btns/revenues/consultation.svg");
  transition: 0.3s;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/revenues/consultationHover.svg");
  }
}
</style>
