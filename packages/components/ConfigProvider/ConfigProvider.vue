<template>
  <slot name="default" :config="config"></slot>
</template>

<script setup lang='tsx'>
import type { ConfigProviderProps } from './types'
import { provideGlobalConfig } from './hooks'

defineOptions({
  name: 'CtConfigProvider'
})

const props = defineProps<ConfigProviderProps>()
const config = provideGlobalConfig(props)

</script>

<style scoped></style>