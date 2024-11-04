<template>
  <div class="ct-switch" :class="{
    [`ct-switch--${size}`]: size,
    'is-disabled': isDisabled,
    'is-checked': checked
  }" @click="handleChange">
    <input class="ct-switch__input" type="checkbox" role="switch" ref="inputRef" :id="inputId" :name="name"
      :disabled="isDisabled" :checked="checked" @keydown.enter="handleChange" />
    <div class="ct-switch__core">
      <div class="ct-switch__core-inner">
        <span v-if="activeText || inactiveText" class="ct-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="ct-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang='tsx'>
import { computed, onMounted, ref, watch } from 'vue';
import type { SwitchProps, SwitchEmits, SwitchInstance } from './types'
import { debugWarn } from '@create-element/utils';
import { useId } from '@create-element/hooks'

defineOptions({
  name: 'CtSwitch',
  inheritAttrs: false
})

const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false
})

const emits = defineEmits<SwitchEmits>()
const isDisabled = computed(() => props.disabled)

const innerValue = ref(props.modelValue)
const inputRef = ref<HTMLInputElement>()
const inputId = useId().value
const checked = computed(() => innerValue.value === props.activeValue)

const focus: SwitchInstance['focus'] = function () {
  inputRef.value?.focus()
}

function handleChange() {
  if (isDisabled.value) return

  const newVal = checked.value ? props.inactiveValue : props.activeValue

  innerValue.value = newVal

  emits('update:modelValue', newVal)
  emits('change', newVal)
}

onMounted(() => {
  inputRef.value!.checked = checked.value
})
watch(checked, (val) => {
  inputRef.value!.checked = val
  // todo
})
watch(() => props.modelValue, (val) => {
  innerValue.value = val
})

defineExpose<SwitchInstance>({
  checked,
  focus
})
</script>

<style scoped>
@import './style.css';
</style>