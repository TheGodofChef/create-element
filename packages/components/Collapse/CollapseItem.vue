<template>
  <div class="ct-collapse-item" :class="{ 'is-disabled': disabled }">
    <div class="ct-collapse-item__header" :id="`item-header-${name}`"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }" @click="handleClick">
      <span class="ct-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <ct-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="ct-collapse-item__wrapper" v-show="isActive">
        <div class="ct-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang='tsx'>
import type { CollapseItemProps } from './types'
import { computed, inject } from 'vue'
import { COLLAPSE_CTX_KEY } from './contants'
import CtIcon from '../Icon/Icon.vue';
import transitionEvents from './transitionEvents';

defineOptions({
  name: 'CtCollapseItem',
})
const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, void 0)
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name))

function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props.name)
}
</script>

<style scoped></style>