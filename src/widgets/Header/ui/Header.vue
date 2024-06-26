<script setup lang="ts">
import { Menu } from "@/widgets/Menu";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <header class="header">
    <Menu />
    <div class="header-plug" />
    <div class="gradient" />
    <div class="container header-inner">
      <h2 class="title">
        {{ t("titles.headerMain") }}
      </h2>
      <p class="green-text title">{{ t("titles.headerSub") }}</p>
      <h4 class="subtitle">{{ t("subtitles.header") }}</h4>
      <div class="btn-wrapper">
        <a href="#revenues">
          <div class="btn btn-instruments">{{ t("buttons.instruments") }}</div>
        </a>
        <a href="https://t.me/gtehpro_bot" target="_blank">
          <div class="btn btn-more">{{ t("buttons.more") }}</div>
        </a>
      </div>
    </div>
    <!-- <div class="shadow-block" /> -->
  </header>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.header {
  height: 100dvh;
  background-image: url("../../../shared/assets/img/main.webp");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: right;
  position: relative;

  &-plug {
    height: 109px;
  }

  &-inner {
    position: relative;
    z-index: 2;
  }
}

.gradient {
  position: absolute;
  filter: blur(200px);
  width: 944.83px;
  height: 845.83px;
  top: -95.23px;
  left: -151.39px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);

  @media (max-width: $md) {
    background: rgba(0, 0, 0, 1);
    width: 700px;
    height: 650px;
    top: 100px;
    left: 0;
  }

  @media (max-width: 700px) {
    width: 440px;
    height: 400px;
    top: 150px;
    left: 0;
  }

  @media (max-width: 440px) {
    width: 350px;
    height: 400px;
    top: 150px;
    left: 0;
  }
}

.title {
  font-size: 60px;
  line-height: 110%;
  max-width: 590px;

  @media (max-width: $md) {
    font-size: 44px;
  }

  @media (max-width: $sm) {
    font-size: 38px;
  }
}

.subtitle {
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: $sm) {
    font-size: 18px;
  }
}

.btn-wrapper {
  width: fit-content;
  display: flex;
  gap: 6px;
}

.btn-instruments {
  color: rgb(12, 12, 21);
  font-size: 16px;
  line-height: 20px;
  width: 272px;
  height: 60px;
  background-image: url("../../../shared/assets/btns/header/instruments.svg");
  transition: 0.3s;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: url("../../../shared/assets/btns/header/instrumentsHover.svg");
  }

  cursor: pointer;

  @media (max-width: $sm) {
    font-size: 10px;
    width: 200px;
    height: 50px;
  }
}

.btn-more {
  transition: 0.3s;
  font-size: 16px;
  line-height: 20px;
  width: 135px;
  height: 60px;
  background-image: url("../../../shared/assets/btns/header/more.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/header/moreHover.svg");
  }

  @media (max-width: $sm) {
    font-size: 10px;
    width: 100px;
    height: 50px;
  }
}

.shadow-block {
  width: 100%;
  height: 40px;
  background: #000;
  filter: blur(10px);
  position: absolute;
  bottom: 10px;
}
</style>
