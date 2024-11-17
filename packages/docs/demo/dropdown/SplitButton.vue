<script setup lang="ts">
import { type DropdownItemProps, CtMessage } from "create-element";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  CtMessage.info("button click");
}
</script>

<template>
  <div class="row">
    <ct-dropdown :items="items">
      <ct-button type="primary">
        Dropdown List
        <ct-icon icon="angle-down" style="margin-left: 8px" />
      </ct-button>
    </ct-dropdown>
    <ct-dropdown :items="items" type="primary" @click="handleClick" split-button>
      Dropdown List
    </ct-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
