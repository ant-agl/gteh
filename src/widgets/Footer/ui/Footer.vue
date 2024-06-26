<script setup lang="ts">
import FooterTop from "./FooterTop.vue";
import FooterCenter from "./FooterCenter.vue";
import FooterBottom from "./FooterBottom.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <FooterTop />
      <FooterCenter />
      <FooterBottom />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 60px;
  padding-top: 80px;
  padding-bottom: 38px;
  background-color: rgb(24, 24, 26);
}
</style>
