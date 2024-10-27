<template>
  <li v-if="divided" role="separator" class="divided-placeholder"></li>
  <li :id="`dropdown-item-${command ?? useId().value}`" :class="{
    'ct-dropdown__item': true,
    ['ct-dropdown__item--' + size]: size,
    'is-disabled': disabled,
    'is-divided': divided,
  }" @click="handleClick">
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script setup lang='tsx'>
import { DROPDOWN_CTX_KEY } from './constants'
import { useId } from '@create-element/hooks'

import type { DropdownItemProps } from './types'
import { computed, inject } from 'vue';

defineOptions({
  name: 'CtDropdownItem'
})
const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  divided: false,
  command: useId().value
})

const ctx = inject(DROPDOWN_CTX_KEY)
const size = computed(() => ctx?.size.value)

function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props)
}
</script>

<style scoped>
@import './style.css';
</style>