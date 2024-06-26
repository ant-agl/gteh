<script setup lang="ts">
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
  <div class="list">
    <div class="item" v-for="item in list" :key="item.title">
      <div class="icon">
        <img :src="item.icon" alt="" />
      </div>
      <div class="text">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.item {
  max-width: 410px;
  display: flex;
  align-items: center;
  gap: 25px;
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

.text {
  color: rgb(204, 204, 204);
  font-size: 18px;
  line-height: 23px;

  @media (max-width: $md) {
    font-size: 16px;
  }
}
</style>
