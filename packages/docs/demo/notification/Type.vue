<script lang="ts" setup>
import { CtNotification } from "create-element";

const open1 = () => {
  CtNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  CtNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  CtNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  CtNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <ct-button plain @click="open1"> Success </ct-button>
  <ct-button plain @click="open2"> Warning </ct-button>
  <ct-button plain @click="open3"> Info </ct-button>
  <ct-button plain @click="open4"> Error </ct-button>
</template>
