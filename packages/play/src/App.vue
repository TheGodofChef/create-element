<template>
  <div v-loading="loading">
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
    <ct-alert ref="alertRef" title="标题" description="这是一段描述" type="success" effect="light" :closable="true"
      :showIcon="true" :visible="true"></ct-alert>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CtMessage, CtLoading } from 'create-element'

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

const loading = ref(false)
function handleBtnClick() {
  /* CtMessage({ message: "Button Click", type: 'success', showClose: true }); */
  /* loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000) */
  const loading = CtLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>

<style scoped></style>
