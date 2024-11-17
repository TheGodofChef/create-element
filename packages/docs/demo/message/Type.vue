<script lang="ts" setup>
import { CtMessage } from "create-element";

const open1 = () => {
  CtMessage("This is a message.");
};
const open2 = () => {
  CtMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  CtMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  CtMessage.error("Oops, this is a error message.");
};
</script>

<template>
  <ct-button :plain="true" @click="open2">Success</ct-button>
  <ct-button :plain="true" @click="open3">Warning</ct-button>
  <ct-button :plain="true" @click="open1">Message</ct-button>
  <ct-button :plain="true" @click="open4">Error</ct-button>
</template>
