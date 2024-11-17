<script setup lang="ts">
import { CtMessageBox, CtMessage } from "create-element";

function openConfirm() {
  CtMessageBox.prompt("Place input your name", "Tip", { type: "info" })
    .then(({ value }) => {
      CtMessage.info(`your name is: ${value}`);
    })
    .catch((action) => {
      CtMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ct-button @click="openConfirm" plain> Click to open the Confirm</ct-button>
</template>
