<template>
  <div class="footer-center">
    <div class="footer-center-left">
      <div class="footer-text">Email</div>
      <div class="email green-text">SUPPORT@GTEH.PRO</div>
    </div>
    <div class="footer-center-right">
      <div class="footer-text">Telegram ID</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.footer-center {
  display: flex;
  align-items: center;
  margin-bottom: 21px;
  border-bottom: 1px solid rgb(51, 51, 51);

  &-left,
  &-right {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $md) {
      width: 100%;
    }
  }

  &-left {
    border-right: 1px solid rgb(51, 51, 51);
    padding-right: 20px;

    @media (max-width: $md) {
      padding-right: 0;
      border-right: 0;
      border-bottom: 1px solid rgb(51, 51, 51);
    }
  }

  &-right {
    padding-left: 20px;

    @media (max-width: $md) {
      padding-left: 0;
    }
  }

  @media (max-width: $md) {
    display: flex;
    flex-direction: column;
  }
}

.email {
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;

  @media (max-width: $sm) {
    font-size: 18px;
  }
}

.footer-text {
  color: rgb(119, 119, 119);
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0%;
}
</style>
