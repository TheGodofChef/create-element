<script setup lang="ts">
import { ja, ko, en, zhCn, zhTw, CtConfigProvider } from "create-element";
import { get } from "lodash-es";

import { computed, ref } from "vue";

const language = ref("");
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));
const changelang = () => {
  const l = ["zhCn", "zhTw", "ko", "en", "ja"];
  language.value = l[(l.indexOf(language.value) + 1) % l.length];
};
</script>
<template>
  <ct-button @click="changelang" type="info" style="margin-right: 20px">change language</ct-button>
  <ct-config-provider :locale="locale">
    <ct-popconfirm title="Are you shure to delete this item?">
      <ct-button>Delete</ct-button>
    </ct-popconfirm>
  </ct-config-provider>
</template>
