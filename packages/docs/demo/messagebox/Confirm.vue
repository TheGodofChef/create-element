<script setup lang="ts">
import { CtMessageBox, CtMessage } from "create-element";

function openConfirm() {
  CtMessageBox.confirm("proxy will permanently delete the file. Continue?", "Warning", { type: "warning" })
    .then((action) => {
      CtMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      CtMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ct-button @click="openConfirm" plain> Click to open the Confirm</ct-button>
</template>
