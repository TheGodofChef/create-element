<template>
  <transition name="fade-in-linear" @after-leave="onAfterLeave">
    <div v-show="(props.visible as Ref).value" class="ct-loading ct-loading__mask"
      :class="{ 'is-fullscreen': fullscreen }">
      <div class="ct-loading__spinner">
        <ct-icon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="text" class="ct-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang='tsx'>
import { computed, type Ref } from 'vue';
import type { LoadingOptions } from './types'
import { isString } from 'lodash-es';

import CtIcon from '../Icon/Icon.vue';

defineOptions({
  name: 'CtLoading',
  inheritAttrs: false
})

const props = defineProps<LoadingOptions>()

const iconName = computed(() => {
  if (isString(props.spinner)) {
    return props.spinner
  } else {
    return 'spinner' // 'circle-notch'(圆圈icon)
  }
})


</script>

<style>
@import './style.css';

.ct-loading {
  --ct-loading-bg-color: v-bind(background) !important;
  --ct-loading-z-index: v-bind(zIndex) !important;
}
</style>