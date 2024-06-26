<script setup lang="ts">
import CloseBurger from "@/shared/assets/icons/closeBurger.vue";
import { links } from "@/widgets/Menu/model";
import { useSidebarStore } from "../model";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const store = useSidebarStore();
const { toggleSidebar } = useSidebarStore();
const { isOpenSidebar } = storeToRefs(store);
</script>

<template>
  <Teleport to="body">
    <div :class="`sidebar${isOpenSidebar ? ' sidebar-active' : ''}`">
      <div class="sidebar-top">
        <CloseBurger @click="toggleSidebar" />
      </div>
      <div class="nav-item-list">
        <div class="menu-right-inner">
          <a href="https://club.gteh.pro/signup">
            <div class="btn btn-registration">
              {{ t("buttons.registration") }}
            </div>
          </a>
          <a href="https://club.gteh.pro/signup">
            <div @click="toggleSidebar" class="btn btn-signIn">
              {{ t("buttons.signIn") }}
            </div>
          </a>
        </div>
        <router-link
          @click="toggleSidebar"
          v-for="link in links"
          class="nav-item"
          :to="link.link"
          :key="link.title"
          >{{ link.title }}</router-link
        >
      </div>
      <div class="sidebar-email">hello@ivigreen.com</div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.sidebar {
  z-index: 1000;
  position: fixed;
  right: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #191919;
  transition: 0.3s ease-out;
  padding: 50px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &-active {
    position: fixed;
    z-index: 10;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &-top {
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }
}

.nav-item {
  &-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }

  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.2px;
}

.menu-right-inner {
  width: fit-content;
  display: flex;
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
