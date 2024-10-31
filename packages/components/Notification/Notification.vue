<template>
  <transition :name="`ct-notification-${transitionName}`" @after-leave="!visible && onDestory()"
    @enter="boxHeight = notifyRef!.getBoundingClientRect().height">
    <div ref="notifyRef" class="ct-notification" :class="{
      [`ct-notification--${type}`]: type,
      'show-close': showClose,
    }" :style="customStyle" v-show="visible" role="alert" @click="onClick" @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <ct-icon v-if="iconName" :icon="iconName" class="ct-notification__icon" />

      <div class="ct-notification__text">
        <div class="ct-notification__title">{{ title }}</div>
        <div class="ct-notification__content">
          <slot>
            <render-vnode v-if="message" :vNode="message" />
          </slot>
        </div>
      </div>
      <div class="ct-notification__close" v-if="showClose">
        <ct-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
  </transition>
</template>

<script setup lang='tsx'>
import type { NotificationProps, NotificationCompInstance } from './types'
import { computed, onMounted, ref } from 'vue';
import { delay, bind } from 'lodash-es'
import { typeIconMap, RenderVnode, addUnit } from '@create-element/utils'
import { useOffset } from '@create-element/hooks'
import { getLastBottomOffset } from './methods'
import CtIcon from '../Icon/Icon.vue';

defineOptions({
  name: 'CtNotification'
})

const props = withDefaults(defineProps<NotificationProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'fade',
  showClose: true
})

const visible = ref(false)
const notifyRef = ref<HTMLDivElement>()
// div 高度
const boxHeight = ref(0)

const { topOffset, bottomOffset } = useOffset({
  offset: props.offset,
  boxHeight,
  getLastBottomOffset: bind(getLastBottomOffset, props)
})

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')

const customStyle = computed(() => ({
  top: addUnit(topOffset.value),
  zIndex: props.zIndex
}))

let timer: number
function startTimer() {
  if (props.duration === 0) return
  timer = delay(close, props.duration)
}
function clearTimer() {
  clearTimeout(timer)
}

function close() {
  visible.value = false
}

onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose<NotificationCompInstance>({
  bottomOffset,
  close
})
</script>

<style scoped>
@import './style.css';
</style>