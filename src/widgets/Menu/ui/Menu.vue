<script setup lang="ts">
import { Sidebar, useSidebarStore } from "@/widgets/Sidebar";
import BurgerIcon from "@/shared/assets/icons/burger.vue";
import { LogoBlock } from "@/entities/LogoBlock";
import { useI18n } from "vue-i18n";

import { storeToRefs } from "pinia";
import { useLangStore } from "@/shared/store/useLangStore";
import { onMounted } from "vue";
const store = useSidebarStore();
const { toggleSidebar } = useSidebarStore();
const { isOpenSidebar } = storeToRefs(store);

const { t, locale } = useI18n({ useScope: "global" });

const langStore = useLangStore();

const swichLang = () => {
  locale.value === "en" ? (locale.value = "ru") : (locale.value = "en");
  localStorage.setItem("lang", locale.value);
  langStore.updateLanguage(locale.value === "en" ? "en" : "ru");
};

onMounted(() => {
  const lang = localStorage.getItem("lang");
  if (lang) {
    langStore.updateLanguage(lang);
  }
});
</script>

<template>
  <div class="menu">
    <div class="container">
      <div class="menu-inner">
        <div class="nav">
          <LogoBlock />
          <div class="nav-inner">
            <a href="#revenues" class="nav-link">{{ t("menu.incomeCell") }}</a>
            <a href="#maximizing" class="nav-link">{{
              t("menu.repairAndMaintenance")
            }}</a>
            <a href="#software" class="nav-link">{{ t("menu.ownSoftware") }}</a>
            <a href="#top" class="nav-link">{{ t("menu.pool") }}</a>
            <!-- <router-link
              class="nav-link"
              :to="item.link"
              v-for="item in links"
              :key="item.title"
              >{{ item.title }}</router-link
            > -->
          </div>
        </div>
        <div class="menu-right">
          <div>
            <button @click="swichLang" class="btn btn-lang">
              {{ t("buttons.switchLang") }}
            </button>
          </div>
          <BurgerIcon @click="toggleSidebar" class="burger-icon" />
          <div class="menu-right-inner">
            <a href="https://club.gteh.pro/signup">
              <div class="btn btn-registration">
                {{ t("buttons.registration") }}
              </div>
            </a>
            <a href="https://club.gteh.pro/signin">
              <div class="btn btn-signIn">
                {{ t("buttons.signIn") }}
              </div>
            </a>
          </div>
        </div>
        <Sidebar v-model:is-open-sidebar="isOpenSidebar" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.menu {
  height: fit-content;
  position: relative;
  z-index: 2;
  background: linear-gradient(180deg, rgb(0, 0, 0), rgba(0, 0, 0, 0) 100%);
  &-inner {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 65px;

  &-inner {
    display: flex;
    align-items: center;
    gap: 26px;

    @media (max-width: $biglg) {
      display: none;
    }
  }

  &-link {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
  }
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 20px;

  &-inner {
    width: fit-content;
    display: flex;

    @media (max-width: $biglg) {
      display: none;
    }
  }
}

.btn-lang {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(119, 119, 119);
  background-color: rgba(13, 230, 190, 0.01);
  line-height: 20px;
}

.burger-icon {
  display: none;

  @media (max-width: $biglg) {
    display: flex;
  }
}

.btn-registration {
  width: 152px;
  height: 40px;
  background-image: url("../../../shared/assets/btns/menu/reg.svg");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  transition: 0.3s;
  &:hover {
    background-image: url("../../../shared/assets/btns/menu/regHover.svg");
  }
}

.btn-signIn {
  color: rgb(12, 12, 21);
  font-size: 14px;
  line-height: 18px;
  background-image: url("../../../shared/assets/btns/menu/signIn.svg");
  background-repeat: no-repeat;
  width: 103px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-image: url("../../../shared/assets/btns/menu/signInHover.svg");
  }
}
</style>
