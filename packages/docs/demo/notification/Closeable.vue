<script lang="ts" setup>
import { CtNotification } from "create-element";

const open = () => {
  CtNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <ct-button plain @click="open"> Hide close button </ct-button>
</template>