<script lang="ts" setup>
import { CtMessage } from "create-element";

const open1 = () => {
  CtMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  CtMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  CtMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  CtMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
  });
};
</script>

<template>
  <ct-button :plain="true" @click="open1">Message</ct-button>
  <ct-button :plain="true" @click="open2">Success</ct-button>
  <ct-button :plain="true" @click="open3">Warning</ct-button>
  <ct-button :plain="true" @click="open4">Error</ct-button>
</template>
