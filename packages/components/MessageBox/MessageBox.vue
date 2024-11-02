<template>
  <transition name="fade-in-linear" @after-leave="destroy">
    <ct-overlay v-show="(visible as Ref).value" :z-index="state.zIndex" mask>
      <div role="dialog" class="ct-overlay-message-box" @click="handleWrapperClick">
        <div ref="rootRef" :class="['ct-message-box', { 'is-center': state.center, }]" @click.stop>
          <div v-if="!isNil(state.title)" ref="headerRef" class="ct-message-box__header"
            :class="{ 'show-close': state.showClose }">
            <div class="ct-message-box__title">
              <ct-icon v-if="iconComponent && state.center" :class="{
                [`ct-icon-${state.type}`]: state.type,
              }" :icon="iconComponent" />
              {{ state.title }}
            </div>
            <button v-if="showClose" class="ct-message-box__header-btn" @click.stop="handleClose">
              <ct-icon icon="xmark" />
            </button>
          </div>
          <div class="ct-message-box__content">
            <ct-icon v-if="iconComponent && !state.center && hasMessage" :class="{
              [`ct-icon-${state.type}`]: state.type,
            }" :icon="iconComponent" />
            <div v-if="hasMessage" class="ct-message-box__message">
              <slot>
                <component :is="state.showInput ? 'label' : 'p'" :for="state.showInput ? inputId : void 0">
                  {{ state.message }}
                </component>
              </slot>
            </div>
          </div>
          <div v-show="state.showInput" class="ct-message-box__input">
            <ct-input v-model="state.inputValue" ref="inputRef" :placeholder="state.inputPlaceholder"
              :type="state.inputType" @keyup.enter="handleInputEnter" />
          </div>
          <div class="ct-message-box__footer">
            <ct-button v-if="state.showCancelButton" class="ct-message-box__footer-btn ct-message-box__cancel-btn"
              :type="state.cancelButtonType" :round="state.roundButton" :loading="state.cancelButtonLoading"
              @click="handleAction('cancel')" @keydown.prevent.enter="handleAction('cancel')">{{ state.cancelButtonText
              }}</ct-button>
            <ct-button v-show="state.showConfirmButton" class="ct-message-box__footer-btn ct-message-box__confirm-btn"
              :type="state.confirmButtonType ?? 'primary'" :round="state.roundButton"
              :loading="state.confirmButtonLoading" @click="handleAction('confirm')"
              @keydown.prevent.enter="handleAction('confirm')">{{ state.confirmButtonText }}</ct-button>
          </div>
        </div>
      </div>
    </ct-overlay>
  </transition>
</template>

<script setup lang='tsx'>
import type { MessageBoxProps, MessageBoxAction } from './types'
import type { InputInstance } from '../Input';
import { computed, reactive, ref, watch, nextTick, type Ref } from 'vue';
import { useZIndex, useId } from '@create-element/hooks'
import { typeIconMap } from '@create-element/utils'
import { isFunction, isNil } from 'lodash-es'

import CtIcon from '../Icon/Icon.vue'
import CtOverlay from '../Overlay/Overlay.vue'
import CtButton from '../Button/Button.vue'
import CtInput from '../Input/Input.vue'

defineOptions({
  name: 'CtMessageBox',
  inheritAttrs: false
})

const props = withDefaults(defineProps<MessageBoxProps>(), {
  lockScroll: true,
  showClose: true,
  closeOnClickModal: true,
  confirmButtonType: "primary",
  roundButton: false,
  boxType: "",
  inputValue: "",
  inputPlaceholder: 'Please input...',
  confirmButtonText: "Ok",
  cancelButtonText: "Cancel",
  showConfirmButton: true,
})

const { doAction } = props
const { nextZIndex } = useZIndex()

const headerRef = ref<HTMLElement>()
const inputRef = ref<InputInstance>()
const inputId = useId()

const state = reactive({
  ...props,
  zIndex: nextZIndex(),
})

const hasMessage = computed(() => !!state.message)
const iconComponent = computed(() => state.icon ?? typeIconMap.get(state.type ?? ''))

watch(
  () => props.visible?.value,
  val => {
    if (val) state.zIndex = nextZIndex()
    if (props.boxType !== 'prompt') return

    if (!val) return
    nextTick(() => {
      inputRef.value && inputRef.value.focus()
    })
  }
)

function handleWrapperClick() {
  props.closeOnClickModal && handleAction('close')
}

function handleInputEnter(e: KeyboardEvent) {
  // 多行输入时，回车不可能为提交
  if (state.inputType === 'textarea') return
  e.preventDefault()

  return handleAction('confirm')
}

function handleAction(action: MessageBoxAction) {
  isFunction(props.beforeClose) ? props.beforeClose(action, state, () => doAction(action, state.inputValue)) : doAction(action, state.inputValue)
}

function handleClose() {
  handleAction('close')
}
</script>

<style scoped>
@import './style.css';
</style>