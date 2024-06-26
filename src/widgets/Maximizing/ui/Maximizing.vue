<script setup lang="ts">
import List from "./List.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="maximizing" id="maximizing">
    <div class="container">
      <h2 class="title green-text">
        {{ t("titles.maximizing") }}
      </h2>
      <List />
      <a href="https://club.gteh.pro/signup">
        <div class="btn btn-repair">{{ t("buttons.repair") }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.maximizing {
  padding-top: 110px;
  padding-bottom: 135px;
  background-image: url("../../../shared/assets/img/Maximizing.webp");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center right;
}

.title {
  margin-bottom: 40px;
  max-width: 982px;
  font-size: 60px;
  line-height: 110%;
  letter-spacing: -2%;

  @media (max-width: $md) {
    font-size: 44px;
  }

  @media (max-width: $sm) {
    font-size: 38px;
  }
}

.btn-repair {
  margin-top: 40px;
  color: rgb(12, 12, 21);
  font-size: 16px;
  line-height: 20px;
  max-width: 396px;
  width: 100%;
  height: 60px;
  background-image: url("../../../shared/assets/btns/maximizing/repair.svg");
  background-size: 100% 100%;
  transition: 0.3s;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/maximizing/repairHover.svg");
  }

  /* @media (max-width: 426px) {
    width: 100%;
  } */
}
</style>
