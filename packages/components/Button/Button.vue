<template>
	<component :is="tag" :type="tag === 'button' ? nativeType : void 0" ref="_ref" class="ct-button"
		:disabled="disabled || loading ? true : void 0" :class="{
			[`ct-button--${type}`]: type,
			[`ct-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)" :autofocus="autofocus">
		<template v-if="loading">
			<slot name="loading">
				<ct-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin></ct-icon>
			</slot>
		</template>
		<ct-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle">
		</ct-icon>
		<slot></slot>
	</component>
</template>

<script setup lang="tsx">
import { ref, computed, inject } from 'vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { throttle } from 'lodash-es'
import CtIcon from '../Icon/Icon.vue'
import { BUTTON_GROUP_CTX_KEY } from './contants'
defineOptions({
	name: 'CtButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
	tag: 'button',
	nativeType: 'button',
	useThrottle: true,
	throttleDuration: 500,
})

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const _ref = ref<HTMLButtonElement>()

const size = computed(() => ctx?.size ?? props.size ?? '')
const type = computed(() => ctx?.type ?? props.type ?? '')
const disabled = computed(() => ctx?.disabled ?? props.disabled ?? false)

const iconStyle = computed(() => ({
	marginRight: slots.default ? '6px' : '0px',
}))
const handleBtnClick = throttle((e: MouseEvent) => emits('click', e))
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false })
defineExpose<ButtonInstance>({
	ref: _ref,
	disabled,
	size,
	type
})
</script>

<style scope>
@import './style.css';
</style>
