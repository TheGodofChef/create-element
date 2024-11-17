<script setup lang="ts">
import { CtMessageBox, CtMessage } from "create-element";

function openAlert() {
  CtMessageBox.alert("This is a message", "Title")
    .then((action) => {
      CtMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      CtMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ct-button @click="openAlert" plain> Click to open the Alert</ct-button>
</template>
