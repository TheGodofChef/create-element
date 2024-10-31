<template>
  <ct-tooltip ref="tooltipRef" placement="right-end" trigger="contextmenu"
    :popper-options="{ placement: 'right-end', strategy: 'fixed' }">
    <ct-button icon="arrow-up">tooltip</ct-button>
    <template #content> 弹出部分 </template>
  </ct-tooltip>

  <ct-popconfirm title="确定删除吗？" @confirm="confirm" @cancel="cancel">
    <ct-button icon="arrow-up" type='primary' size="samll">popconfirm</ct-button>
  </ct-popconfirm>

  <ct-dropdown :items="dropdownOptions" size="small" split-button>dropdown</ct-dropdown>
  <ct-button @click="handleBtnClick">Success</ct-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CtMessage } from 'create-element'

const confirm = () => {
  console.log('confirm')
}
const cancel = () => {
  console.log('cancel')
}

const dropdownOptions = ref([
  {
    label: "Option A",
    // name: 'a'
  },
  {
    label: "Option B",
    // name: 'b'
  },
  {
    label: "Option C",
    // name: 'c',
    divided: true,
  },
]);
const dropDownClick = () => {
  console.log('dropDownClick')
}

function handleBtnClick() {
  CtMessage.success("Button Click");
}
</script>

<style scoped></style>
