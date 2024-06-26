<script setup lang="ts">
import { CardItem } from "@/entities/CardItem";
import { en_list, ru_list } from "../model";
import { useLangStore } from '../../../shared/store/useLangStore';
import { ref, onMounted } from 'vue';
import { watch } from "vue";

const langStore = useLangStore()

const list = ref()

watch(() => langStore.currentLanguage, () => {
  list.value = langStore.currentLanguage === 'ru' ? ru_list : en_list
})

onMounted(() => {
  list.value = langStore.currentLanguage === 'ru' ? ru_list : en_list
})
</script>

<template>
  <div class="card-block">
    <CardItem v-for="item in list" :key="item.title" v-bind="item" />
  </div>
</template>

<style scoped lang="scss">
.card-block {
  margin-top: 20px;
  padding: 0 20px;
  min-width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1441px) {
    justify-content: flex-start;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
