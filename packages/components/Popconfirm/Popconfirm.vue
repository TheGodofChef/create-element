<template>
  <ct-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="ct-popconfirm" :style="style">
        <div class="ct-popconfirm__main">
          <ct-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor"></ct-icon>
          {{ title }}
        </div>
        <div class="ct-popconfirm__action">
          <ct-button class="ct-popconfirm__cancel" size="small" :type="cancelButtonType" @click="cancel">
            {{ cancelButtonText }}
          </ct-button>
          <ct-button class="ct-popconfirm__confirm" size="small" :type="confirmButtonType" @click="confirm">
            {{ confirmButtonText }}
          </ct-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </ct-tooltip>
</template>

<script setup lang='tsx'>
import { computed, ref } from 'vue';
import { addUnit } from '@create-element/utils'
import CtButton from '../Button/Button.vue'
import CtIcon from '../Icon/Icon.vue'
import CtTooltip from '../Tooltip/Tooltip.vue'

import type { PopconfirmProps, PopconfirmEmits } from './types'
import type { TooltipInstance } from '../Tooltip'

defineOptions({
  name: 'CtPopconfirm',
})

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '',
  confirmButtonType: 'primary',
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  icon: 'question-circle',
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})
const emits = defineEmits<PopconfirmEmits>()

const tooltipRef = ref<TooltipInstance>()

const style = computed(() => ({ width: addUnit(props.width) }))

function hidePopper() {
  tooltipRef.value?.hide()
}
function confirm(e: MouseEvent) {
  emits('confirm', e)
  hidePopper()
}
function cancel(e: MouseEvent) {
  emits('cancel', e)
  hidePopper()
}
</script>

<style scoped>
@import './style.css';
</style>