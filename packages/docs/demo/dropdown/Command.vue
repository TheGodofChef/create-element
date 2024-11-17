<script setup lang="ts">
import {
  type DropdownItemProps,
  type DropdownCommand,
  CtMessage,
} from "create-element";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleCommand(command: DropdownCommand) {
  CtMessage.info("click on item " + command);
}
</script>

<template>
  <ct-dropdown :items="items" @command="handleCommand">
    <span class="dropdown-link">
      Dropdown List
      <ct-icon icon="angle-down" />
    </span>
  </ct-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--ct-color-primary);

  i {
    margin-left: 8px;
  }
}
</style>
