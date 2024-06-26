<script setup lang="ts">
import { MainLayout } from "@/shared/ui/layout/MainLayout";
import { Header } from "@/widgets/Header";
import { Revenues } from "@/widgets/Revenues";
import { CardBlock } from "@/widgets/CardBlock";
import { Maximizing } from "@/widgets/Maximizing";
import { Software } from "@/widgets/Software";
import { Top } from "@/widgets/Top";
import { Founder } from "@/widgets/Founder";
import { Together } from "@/widgets/Together";
import { Footer } from "@/widgets/Footer";
</script>

<template>
  <MainLayout>
    <Header />
    <Revenues />
    <CardBlock />
    <Maximizing />
    <Software />
    <Top />
    <Founder />
    <Together />
    <Footer />
  </MainLayout>
</template>
