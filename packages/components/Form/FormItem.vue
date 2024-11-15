<template>
  <div class="ct-form-item">
    <div class="ct-form-item__content">
      <slot></slot>
      <div class="ct-form-item__error-msg"></div>
    </div>
  </div>
</template>

<script setup lang='tsx'>
import type { FormItemContext, FormItemProps, FormValidateFailuer, FormValidateCallback, ValidateStatus, FormItemInstance, FormItemRule } from './types'
import { FORM_CTX_KEY, FORM_ITEM_CTX_KEY } from './constants'
import { computed, inject, onMounted, reactive, toRef } from 'vue';

defineOptions({
  name: 'CtFormItem',
})

const props = withDefaults(defineProps<FormItemProps>(), {
  required: void 0,
  showMessage: true
})
const slots = defineSlots()
const ctx = inject(FORM_CTX_KEY)

const isDisabled = computed(() => ctx?.disabled || props.disabled)

const formItemCtx: FormItemContext = reactive({
  ...toRef(props),
  disabled: isDisabled.value,
  validate: () => { },
  resetField: () => { },
  clearValidate: () => { },
  addInputId: () => { },
  removeInputId: () => { },

})

onMounted(() => {
  if (props.prop) {
    ctx?.addField(formItemCtx)
  }
})
</script>

<style scoped>
@import './style.css';
</style>