<script setup lang="ts">
import Logo from "@/shared/assets/icons/Logo.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="logo-block">
    <Logo />
    <div class="logo-block-text">
      {{ `${t("menu.generation")} ${t("menu.tech")}` }}<br />{{
        `${t("menu.environment")} ${t("menu.hash")}`
      }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-block {
  display: flex;
  align-items: center;
  gap: 10px;

  &-text {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0%;
  }
}
</style>
