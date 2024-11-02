<template>
  <div class="ct-input" :class="{
    [`ct-input--${type}`]: type,
    [`ct-input--${size}`]: size,
    'is-disabled': isDisabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus': isFocused,
  }">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="ct-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="ct-input__wrapper" ref="wrapperRef">
        <span v-if="$slots.prefix" class="ct-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input class="ct-input__inner" ref="inputRef" :id="useId().value"
          :type="showPassword ? (pwdVisible ? 'text' : 'password') : type" :disabled="isDisabled" :readonly="readonly"
          :autocomplete="autocomplete" :placeholder="placeholder" :autofocus="autofocus" :form="form"
          v-model="innerValue" v-bind="attrs" @input="handleInput" @change="handleChange" @focus="handleFocus"
          @blur="handleBlur" />
        <span v-if="$slots.suffix || shwoClear || showPwdArea" class="ct-input__suffix">
          <slot name="suffix"></slot>
          <Icon icon="circle-xmark" v-if="shwoClear" class="ct-input__clear" @click="clear" @mousedown.prevent="noop" />
          <Icon icon="eye" class="ct-input__password" v-if="showPwdArea && pwdVisible" @click="togglePwdVisible" />
          <Icon icon="eye-slash" class="ct-input__password" v-if="showPwdArea && !pwdVisible"
            @click="togglePwdVisible" />
        </span>
      </div>
      <div v-if="$slots.append" class="ct-input__append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else>
      <textarea class="ct-textarea__wrapper" ref="textareaRef" :id="useId().value" :disabled="isDisabled"
        :readonly="readonly" :autocomplete="autocomplete" :placeholder="placeholder" :autofocus="autofocus" :form="form"
        v-model="innerValue" v-bind="attrs" @input="handleInput" @change="handleChange" @focus="handleFocus"
        @blur="handleBlur"></textarea>
    </template>
  </div>
</template>

<script setup lang='tsx'>
import { ref, computed, watch, useAttrs, shallowRef, nextTick } from 'vue';
import type { InputProps, InputEmits, InputInstance } from './types'
import { useFocusController, useId } from '@create-element/hooks'
import { each, noop } from 'lodash-es'
import Icon from '../Icon/Icon.vue';

defineOptions({
  name: 'CtInput',
  inheritAttrs: false
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off'
})
const emits = defineEmits<InputEmits>()

const innerValue = ref(props.modelValue)
const pwdVisible = ref(false)

const inputRef = shallowRef<HTMLInputElement>()
const textareaRef = shallowRef<HTMLTextAreaElement>()

const _ref = computed(() => inputRef.value || textareaRef.value)

const attrs = useAttrs()
const isDisabled = computed(() => props.disabled)

const shwoClear = computed(() => props.clearable && !!innerValue.value && !isDisabled.value && isFocused.value)

const showPwdArea = computed(() => props.type === 'password' && props.showPassword && !isDisabled.value && !!innerValue.value)

const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
  afterBlur() {
    // form 校验
  }
})

const clear: InputInstance['clear'] = function () {
  innerValue.value = ''
  each(['input', 'change', 'update:modelValue'], (e) => emits(e as any, ''))
  emits('clear')
  // 清空表单校验
}
const focus: InputInstance['focus'] = async function () {
  await nextTick()
  _ref.value?.focus()
}
const blur: InputInstance['blur'] = async function () {
  _ref.value?.blur()
}
const select: InputInstance['select'] = async function () {
  _ref.value?.select()
}

function handleInput() {
  emits('input', innerValue.value)
  emits('update:modelValue', innerValue.value)
}

function handleChange() {
  emits('change', innerValue.value)
}

function togglePwdVisible() {
  pwdVisible.value = !pwdVisible.value
}

watch(() => props.modelValue, (newVal) => {
  innerValue.value = newVal
  // 表单校验触发
})

defineExpose<InputInstance>({
  ref: _ref,
  focus,
  blur,
  select,
  clear
})
</script>

<style scoped>
@import './style.css';
</style>