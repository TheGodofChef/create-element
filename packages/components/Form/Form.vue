<template>
  <form class="ct-form">
    <slot></slot>
  </form>
</template>

<script setup lang='tsx'>
import type { FormProps, FormEmits, FormItemContext, FormContext, FormInstance, FormItemInstance } from './types'
import { FORM_CTX_KEY } from './constants'
import { provide, reactive, toRefs } from 'vue';

defineOptions({
  name: 'CtForm'
})

const props = withDefaults(defineProps<FormProps>(), {
  showMessage: true,
  hideRequiredAsterisk: false,
  requiredAsteriskPosition: 'left',
  labelPosition: 'right',
})
const emits = defineEmits<FormEmits>()

const fields: FormItemContext[] = []

const addField: FormContext['addField'] = function (field) {
  if (!field.prop) return
  fields.push(field)
}

const removeField: FormContext['removeField'] = function (field) {
  if (!field.prop) return
  fields.splice(fields.indexOf(field), 1)
}



const formCtx: FormContext = reactive({
  ...toRefs(props),
  emits,
  addField,
  removeField
})

provide(FORM_CTX_KEY, formCtx)
</script>

<style scoped>
@import './style.css';
</style>