<script setup lang="ts">
import { useI18n } from "vue-i18n";
import List from "./List.vue";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="software" id="software">
    <!-- <div v-if="dimensions.width.value >= 1000" class="bg-image" /> -->
    <!-- <div v-else class="bg-image-mobile" /> -->
    <div class="container software-inner">
      <h2 class="title">
        <span class="green-text">{{ t("titles.softwareGreen") }}</span>
        {{ t("titles.software") }}
      </h2>
      <List />
      <div class="btn-block">
        <a href="https://t.me/ingvarcrypto">
          <div class="btn btn-software">{{ t("buttons.cooperation") }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.software {
  position: relative;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  &-inner {
    background-image: url("../../../shared/assets/img/software.webp");
    background-size: cover;
    padding: 30px 50px;
    background-repeat: no-repeat;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1000px) {
      align-items: center;
      justify-content: start;
      margin: 0 auto;
    }
  }
}

.bg-image {
  z-index: -1;

  width: 947px;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
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
  background-image: url("../../../shared/assets/img/software.webp");
  width: 100%;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
}

.title {
  max-width: 710px;
  font-size: 60px;
  line-height: 110%;
  letter-spacing: -2%;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    text-align: center;
    margin-top: 30px;
  }

  @media (max-width: $md) {
    font-size: 44px;
  }

  @media (max-width: $sm) {
    font-size: 38px;
  }
}

.btn-software {
  margin-top: 40px;
  color: rgb(12, 12, 21);
  font-size: 16px;
  line-height: 20px;
  width: 320px;
  height: 60px;
  background-image: url("../../../shared/assets/btns/software/software.svg");
  background-repeat: no-repeat;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/software/softwareHover.svg");
  }
}
</style>
