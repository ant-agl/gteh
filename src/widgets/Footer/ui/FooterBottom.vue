<script setup lang="ts">
import Tg from "@/shared/assets/icons/Tg.vue";
import { en_list, ru_list } from "../model";
import { useLangStore } from "../../../shared/store/useLangStore";
import { ref, onMounted } from "vue";
import { watch } from "vue";

const langStore = useLangStore();

const list = ref();

watch(
  () => langStore.currentLanguage,
  () => {
    list.value = langStore.currentLanguage === "ru" ? ru_list : en_list;
  }
);

onMounted(() => {
  list.value = langStore.currentLanguage === "ru" ? ru_list : en_list;
});
</script>

<template>
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <div class="footer-list">
        <a
          class="footer-item"
          v-for="item in list"
          :key="item.title"
          :href="item.link"
          >{{ item.title }}</a
        >
      </div>
      <div class="all-rights-reserved">© GTEH, 2023 г. Все права защищены.</div>
    </div>
    <a href="https://t.me/+SfmTzDZW6O04YTIy" target="_blank" class="tg-wrap">
      <Tg class="tg" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.footer-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  &-inner {
  }
}

.footer-list {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.footer-item {
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;
}

.tg {
  cursor: pointer;

  &-wrap {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
  }
}
</style>
