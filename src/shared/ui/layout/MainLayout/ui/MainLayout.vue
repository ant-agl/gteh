<script setup lang="ts"></script>

<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.main {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(
    to right,
    rgba(9, 14, 16, 0.9) 0%,
    rgba(9, 14, 16, 0) 10%,
    rgba(9, 14, 16, 0) 90%,
    rgba(9, 14, 16, 0.9) 100%
  );
}
</style>
