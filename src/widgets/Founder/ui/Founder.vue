<script setup lang="ts">
import chel from "@/shared/assets/img/founder/chel.webp";
import img1 from "@/shared/assets/img/founder/img1.webp";
import img2 from "@/shared/assets/img/founder/img2.webp";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="container">
    <div class="wrap">
      <div class="card">
        <div class="chel-img">
          <img :src="chel" alt="" />
        </div>
        <div class="content">
          <span class="name">{{ t("founder.name") }}</span>
          <p class="post">{{ t("founder.posts.first") }}</p>
          <p class="post">
            {{ t("founder.posts.second") }}
          </p>
          <p class="post">
            {{ t("founder.posts.third") }}
          </p>
        </div>
      </div>
      <div class="section-wrap">
        <div class="section">
          <span class="title">
            <span>{{ t("founder.sections.title") }}</span>
            <span class="color_site">Gteh</span>
          </span>
          <div class="img">
            <img :src="img2" alt="" />
          </div>
          <a href="https://umstrana.ru/" target="_blank" class="sub-title">{{
            t("founder.umstrana.title")
          }}</a>
          <span class="description">{{
            t("founder.umstrana.description")
          }}</span>
        </div>
        <div class="section second">
          <div class="img">
            <img :src="img1" alt="" />
          </div>
          <a href="https://gk-osnova.ru/" target="_blank" class="sub-title">{{
            t("founder.osnova.title")
          }}</a>
          <span class="description">{{ t("founder.osnova.description") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/shared/styles";

.chel-img {
  width: 443px;
}
.img {
  width: 217px;
}
.wrap,
.section-wrap {
  display: flex;
  gap: 20px;
  padding-bottom: 60px;
}

.card {
  background-color: #18181a;
  display: flex;
  min-height: 432px;
  width: 100%;
  max-width: 907px;

  .name {
    font-size: 40px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: -0.02em;
    color: #0de6be;
  }

  .content {
    width: 100%;
    max-width: 334px;
    padding: 30px 20px;
  }

  .post {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    color: #ccc;
  }
}

.section {
  display: flex;
  flex-direction: column;

  .title {
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 41px;

    .color_site {
      color: #0de6be;
    }
  }

  .sub-title {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #0de6be;
  }

  .description {
    margin-top: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: #ccc;
  }
}

.second {
  margin-top: 157px;
}

@media (max-width: 1300px) {
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .card {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  .chel-img {
    width: auto;
  }

  .section-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .second {
    margin-top: 0;
  }
}
</style>
