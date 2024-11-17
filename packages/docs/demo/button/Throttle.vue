<script setup>
import { CtMessage } from "create-element";
function handleBtnClick() {
  CtMessage.info("btn click");
}
</script>

<template>
  <p>
    <ct-button @click="handleBtnClick"> with throttle</ct-button>
    <ct-button :use-throttle="false" @click="handleBtnClick">without throttle</ct-button>
  </p>
</template>
