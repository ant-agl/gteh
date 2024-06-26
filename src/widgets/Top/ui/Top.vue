<script setup lang="ts">
import First from "@/shared/assets/icons/top/First.svg";
import { useI18n } from "vue-i18n";
import List from "./List.vue";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="top" id="top">
    <div class="container">
      <h2 class="title">
        <span class="green-text">GTeh Pool</span>{{ t("titles.top") }}
        <span class="green-text">Octa</span> {{ t("utils.and") }}
        <span class="green-text">Ziliqa ⓘ</span>
      </h2>
      <h4 class="subtitle">{{ t("subtitles.top") }}</h4>
      <div class="item">
        <div class="icon">
          <img :src="First" alt="" />
        </div>
        <div class="content">
          <div class="content-title">{{ t("top.title") }}</div>
          <ul class="list-ul">
            <li class="list-li">
              {{ t("top.description.first") }}
              {{ t("top.description.second") }}
              {{ t("top.description.third") }}
              {{ t("top.description.fourth") }}
            </li>
          </ul>
        </div>
      </div>
      <List />
      <div class="btn-block">
        <a href="https://gtpool.io" target="_blank">
          <div class="btn btn-plug">{{ t("buttons.ownEquipment") }}</div>
        </a>
        <a href="https://gtpool.io" target="_blank">
          <div class="btn btn-more">{{ t("buttons.aboutPool") }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.top {
  padding-top: 120px;
  padding-bottom: 130px;
  background-image: url("../../../shared/assets/img/top.webp");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center right;
}

.title {
  font-size: 60px;
  line-height: 120%;
  letter-spacing: -2%;

  @media (max-width: $md) {
    font-size: 44px;
  }

  @media (max-width: $sm) {
    font-size: 38px;
  }
}

.subtitle {
  margin: 40px 0;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0%;
  max-width: 453px;
}

.btn-block {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 20px;
}

.btn-plug {
  color: rgb(12, 12, 21);
  font-size: 16px;
  line-height: 20px;
  width: 453px;
  height: 60px;
  transition: 0.3s;
  background-image: url("../../../shared/assets/btns/top/plug.svg");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/top/plugHover.svg");
  }

  @media (max-width: 500px) {
    width: 330px;
  }
}

.btn-more {
  color: $green;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  width: 453px;
  height: 60px;
  background-image: url("../../../shared/assets/btns/top/more.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-image: url("../../../shared/assets/btns/top/moreHover.svg");
  }

  @media (max-width: 500px) {
    width: 330px;
  }
}

.list-ul {
  list-style-type: disc;
}

.list-li {
  color: rgb(204, 204, 204);
  font-size: 18px;
  line-height: 23px;

  @media (max-width: $md) {
    font-size: 16px;
  }

  letter-spacing: 0%;
}

/*  */

.item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 393px;
}

.icon {
  width: 40px;
  height: 32.6px;
  min-width: 40px;
  min-height: 32.6px;

  img {
    object-fit: contain;
  }
}

.content-title {
  color: rgb(204, 204, 204);
  font-size: 18px;
  line-height: 23px;

  @media (max-width: $md) {
    font-size: 16px;
  }
}

.text {
  color: rgb(204, 204, 204);
  font-size: 18px;
  line-height: 23px;

  @media (max-width: $md) {
    font-size: 16px;
  }

  letter-spacing: 0%;
}
</style>
