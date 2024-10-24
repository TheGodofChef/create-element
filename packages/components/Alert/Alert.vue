<template>
  <transition name="ct-alert-fade">
    <div v-show="visible" class="ct-alert" role="alert" :class="{
      [`ct-alert__${type}`]: type,
      [`ct-alert__${effect}`]: effect,
      'text-center': center
    }">
      <ct-icon v-if="showIcon" :icon="iconName" class="ct-alert__icon" :class="{ 'big-icon': withDescription }" />
      <div class="ct-alert__content">
        <span class="ct-alert__title" :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="ct-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="ct-alert__close" v-if="closable">
          <ct-icon icon="xmark" @click.stop="close" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang='tsx'>
import type { AlertProps, AlertEmits, AlertInstance } from './types'
import { ref, computed } from 'vue'
import { CtIcon } from '../Icon';
import { typeIconMap } from '@create-element/utils'

defineOptions({
  name: 'CtAlert'
})

const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: true
})
const emits = defineEmits<AlertEmits>()
const slots = defineSlots()

const visible = ref(true)

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
const withDescription = computed(() => props.description || slots.default)

function close() {
  visible.value = false
  emits('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  close,
  open
})
</script>

<style scoped>
@import "./style.css";
</style>