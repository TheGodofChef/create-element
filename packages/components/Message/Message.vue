<template>
  <transition :name="transitionName" @enter="boxHeight = messageRef!.getBoundingClientRect().height"
    @after-leave="!visible && onDestory()">
    <div ref="messageRef" class="ct-message" :class="{
      [`ct-message--${type}`]: true,
      'is-close': showClose,
      'text-center': center
    }" :style="customStyle" v-show="visible" role="alert" @mouseenter="clearTimer" @mouseleave="startTimer">
      <ct-icon class="ct-message__icon" :icon="iconName"></ct-icon>
      <div class="ct-message__content">
        <slot>
          <render-vnode v-if="message" :vNode="message"></render-vnode>
        </slot>
      </div>
      <div class="ct-message__close" v-if="showClose">
        <ct-icon icon="xmark" @click.stop="close"></ct-icon>
      </div>
    </div>
  </transition>
</template>

<script setup lang='tsx'>
import { computed, onMounted, ref, watch } from 'vue';
import type { MessageProps, MessageCompInstance } from './types'
import { delay, bind } from 'lodash-es'
import { typeIconMap, RenderVnode, addUnit } from '@create-element/utils'
import { useOffset, useEventListener } from '@create-element/hooks'
import { getLastBottomOffset } from './methods'
import CtIcon from '../Icon/Icon.vue';
defineOptions({
  name: 'CtMessage'
})

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
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

watch(visible, (val) => {
  if (!val) boxHeight.value = -props.offset // 使得退出的动画更加流程
})

useEventListener(document, 'keydown', (e: Event) => {
  const { code } = e as KeyboardEvent
  if (code === 'Escape') close()
})

onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose<MessageCompInstance>({
  bottomOffset,
  close,
})
</script>

<style scoped>
@import './style.css';
</style>