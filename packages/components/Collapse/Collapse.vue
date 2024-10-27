<template>
  <div class="ct-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang='tsx'>
import { ref, provide, watch, watchEffect } from 'vue';
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types'
import { COLLAPSE_CTX_KEY } from './constants'
import { debugWarn } from '@create-element/utils'

const COMP_NAME = 'CtCollapse' as const

defineOptions({
  name: COMP_NAME
})

const props = defineProps<CollapseProps>()
const emit = defineEmits<CollapseEmits>()

const activeNames = ref(props.modelValue)

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]

  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item]
    updateActiveNames(_activeNames)
    return
  }

  const index = _activeNames.indexOf(item)
  if (index > -1) {
    _activeNames.splice(index, 1)
  } else {
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames
  emit('update:modelValue', newNames)
  emit('change', newNames)
}

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode should only have one active item')
  }
})

watch(() => props.modelValue, (newNames) => {
  updateActiveNames(newNames)
})

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})
</script>

<style scoped>
@import './style.css';
</style>