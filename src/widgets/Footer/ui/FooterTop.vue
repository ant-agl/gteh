<script setup lang="ts">
import { LogoBlock } from "@/entities/LogoBlock";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="footer-top">
    <LogoBlock />
    <div class="menu-right-inner">
      <a href="https://club.gteh.pro/signup">
        <div class="btn btn-registration">
          {{ t("buttons.registration") }}
        </div>
      </a>
      <a href="https://club.gteh.pro/signup">
        <div class="btn btn-signIn">{{ t("buttons.signIn") }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.footer-top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 39px;
  border-bottom: 1px solid rgb(51, 51, 51);

  @media (max-width: $md) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }
}

.menu-right-inner {
  width: fit-content;
  display: flex;
}

.btn-lang {
  padding: 10px;
  border: 1px solid rgb(119, 119, 119);
  background-color: rgba(13, 230, 190, 0.01);
  line-height: 20px;
}

.btn-registration {
  width: 152px;
  height: 40px;
  background-image: url("../../../shared/assets/btns/footer/reg.svg");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  transition: 0.3s;

  &:hover {
    background-image: url("../../../shared/assets/btns/footer/regHover.svg");
  }
}

.btn-signIn {
  color: rgb(12, 12, 21);
  font-size: 14px;
  line-height: 18px;
  background-image: url("../../../shared/assets/btns/footer/signIn.svg");
  background-repeat: no-repeat;
  width: 103px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-image: url("../../../shared/assets/btns/footer/signInHover.svg");
  }
}
</style>
