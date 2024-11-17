<script setup lang="ts">
import { h } from "vue";
import { CtNotification } from "create-element";

function openNotify1() {
  CtNotification({
    title: "Title",
    message: h("i", { style: "color:teal" }, "This is a remider"),
    position: 'bottom-right'
  });
}

function openNotify2() {
  CtNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
    position: 'top-left'
  });
}
</script>

<template>
  <ct-button @click="openNotify1" plain>Closes automatically</ct-button>
  <ct-button @click="openNotify2" plain>Won't closes automatically</ct-button>
</template>
