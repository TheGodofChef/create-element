<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <ct-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom">
    <ct-button @click="disabled = !disabled">click to {{ disabled ? "active" : "close" }} tooltip function</ct-button>
  </ct-tooltip>
</template>
