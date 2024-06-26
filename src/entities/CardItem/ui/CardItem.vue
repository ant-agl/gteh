<script setup lang="ts">
interface Props {
  img: string;
  title: string;
  description: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="card-top" :style="{ backgroundImage: `url(${props.img})` }">
      <h3 class="card-title">
        {{ props.title }}
      </h3>
    </div>
    <ul class="card-description">
      <div
        class="card-description-item"
        v-for="item in description"
        :key="item"
      >
        {{ item }}
      </div>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 453px;
  width: 33%;
  min-width: 290px;

  &-top {
    height: 480px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;

    @media (max-width: 1200px) {
      height: 380px;
    }

    @media (max-width: 1000px) {
      height: 480px;
    }

    @media (max-width: 426px) {
      height: 380px;
    }
  }

  &-title {
    font-size: 23px;
    line-height: 30px;
    letter-spacing: 0%;
    text-transform: uppercase;
  }

  &-description {
    list-style: inside;
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin-left: 27px;
    &-item {
      color: rgb(204, 204, 204);
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0%;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
  }
}
</style>
