<script setup lang="ts">
import { CtMessageBox, CtMessage } from "create-element";

function openMsgBox() {
  CtMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === "confirm") {
          CtMessage.info(action);
        } else {
          CtMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <ct-button @click="openMsgBox" plain>Click to open Message Box</ct-button>
</template>
