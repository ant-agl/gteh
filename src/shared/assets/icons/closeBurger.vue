<template>
  <div class="close">
    <div class="close-item close-item1" />
    <div class="close-item close-item2" />
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.close {
}

.close-item {
  width: 38px;
  height: 4px;
  background-color: $green;
}

.close-item1 {
  margin-bottom: -4px;
  transform: rotate(-45deg);
}

.close-item2 {
  transform: rotate(45deg);
}
</style>
