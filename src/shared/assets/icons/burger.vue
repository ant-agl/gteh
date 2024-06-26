<template>
  <div class="burger">
    <div class="burger-item" />
    <div class="burger-item" />
    <div class="burger-item" />
    <div class="burger-item" />
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.burger {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &-item {
    width: 34px;
    height: 4px;
    background-color: $green;
  }
}
</style>
