<script lang="ts" setup>
import { CtMessage } from "create-element";

const openCenter = () => {
  CtMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <ct-button plain @click="openCenter">Centered text</ct-button>
</template>
