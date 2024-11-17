<script setup>
import { CtMessage } from "create-element";

function handleClose() {
  CtMessage.info("close callback");
}
</script>
<template>
  <div class="basic block">
    <ct-alert title="Unclosable alert" type="success" :closable="false" />
    <ct-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
