<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="together">
    <div class="container together-inner">
      <h2 class="title">
        {{ t("titles.togetherTop") }}<br />{{ t("titles.togetherBottom") }}
      </h2>
      <h4 class="subtitle">
        {{ t("subtitles.togetherFirst") }}
        <a
          href="https://t.me/+SfmTzDZW6O04YTIy"
          target="_blank"
          class="green-text"
          >GTeh</a
        >
        {{ t("subtitles.togetherSecond") }}
      </h4>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.together {
  min-height: 707px;
  display: flex;
  align-items: center;
  background-image: url("../../../shared/assets/img/together.webp");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  @media (max-width: 1060px) {
    margin-top: 250px;
  }

  @media (max-width: $sm) {
    min-height: 600px;
  }

  &-inner {
    @media (max-width: 1060px) {
      margin-top: -250px;
      margin-bottom: auto;
    }
  }
}

.shadow {
  background: #090e10;
  filter: blur(90px);
  max-width: 461px;
  width: 100%;
  height: 316px;
  position: absolute;
  top: 373px;
  right: 0;
  border-radius: 100%;
}
.title {
  max-width: 710px;
  font-size: 70px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -2%;
  margin-bottom: 40px;

  @media (max-width: $md) {
    font-size: 50px;
  }

  @media (max-width: $sm) {
    font-size: 40px;
  }
}

.subtitle {
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;

  @media (max-width: $sm) {
    font-size: 18px;
  }
}

@media (max-width: 1060px) {
  .title {
    margin: 0 auto 30px;
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
}
</style>
