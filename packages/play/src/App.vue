<template>
  <ct-tooltip ref="tooltipRef" placement="right-end" trigger="contextmenu"
    :popper-options="{ placement: 'right-end', strategy: 'fixed' }">
    <ct-button icon="arrow-up">tooltip</ct-button>
    <template #content> 弹出部分 </template>
  </ct-tooltip>

  <ct-popconfirm title="确定删除吗？" @confirm="confirm" @cancel="cancel">
    <ct-button icon="arrow-up" type='primary' size="samll">popconfirm</ct-button>
  </ct-popconfirm>
</template>

<script setup lang="ts">
const confirm = () => {
  console.log('confirm')
}
const cancel = () => {
  console.log('cancel')
}
</script>

<style scoped>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
