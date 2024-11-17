<script lang="ts" setup>
import { CtMessage } from "create-element";

const open1 = () => {
  CtMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  CtMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <ct-button @click="open1">插件式调用</ct-button>
    <ct-button @click="open2">函数式调用</ct-button>
    <ct-button @click="$message.success('Congrats, this is a success message.')">全局方法调用</ct-button>
  </div>
</template>
