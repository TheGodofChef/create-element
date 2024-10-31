<template>
  <i class="ct-icon" :class="{ [`ct-icon-${type}`]: type }" :style="customStyle" v-bind="$attrs">
    <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
  </i>
</template>

<script setup lang='tsx'>
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  name: 'CtIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => ({ color: props.color ?? void 0 }))
</script>

<style scoped>
@import './style.css';
</style>