<script setup lang="ts">
import { h, ref } from "vue";
import { CtMessageBox, CtSwitch, type SwitchValueType } from "create-element";

function open1() {
  CtMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

function open2() {
  const checked = ref<SwitchValueType>(false);
  CtMessageBox({
    title: "Message",
    message: () =>
      h(CtSwitch, {
        modelValue: checked.value,
        "onUpdate:modelValue": (val: SwitchValueType) => {
          checked.value = val;
        },
      }),
  });
}
</script>

<template>
  <ct-button @click="open1" plain>Common VNode</ct-button>
  <ct-button @click="open2" plain>Dynamic props</ct-button>
</template>
