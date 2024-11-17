<script lang="ts" setup>
import { h } from "vue";
import { CtMessage } from "create-element";

const open = () => {
  CtMessage("This is a message.");
};

const openVn = () => {
  CtMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <ct-button :plain="true" @click="open">Show message</ct-button>
  <ct-button :plain="true" @click="openVn">VNode</ct-button>
</template>
