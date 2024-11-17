<script lang="ts" setup>
import { reactive, ref } from "vue";
import { CtMessage, type FormProps } from "create-element";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});
const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);
const labelPosition = ref<FormProps["labelPosition"]>("right");

const onSubmit = () => {
  CtMessage.success("submit");
};
</script>

<template>
  <ct-button-group size="small">
    <ct-button @click="labelPosition = 'left'" :type="labelPosition === 'left' ? 'primary' : 'info'">Left</ct-button>
    <ct-button @click="labelPosition = 'right'" :type="labelPosition === 'right' ? 'primary' : 'info'">Right</ct-button>
    <ct-button @click="labelPosition = 'top'" :type="labelPosition === 'top' ? 'primary' : 'info'">Top</ct-button>
  </ct-button-group>
  <div style="margin: 20px"></div>
  <ct-form :model="form" :label-position="labelPosition">
    <ct-form-item label="Activity name">
      <ct-input v-model="form.name" />
    </ct-form-item>
    <ct-form-item label="Activity zone">
      <ct-select v-model="form.region" placeholder="please select your zone" :options="options" />
    </ct-form-item>
    <ct-form-item label="Instant delivery">
      <ct-switch v-model="form.delivery" />
    </ct-form-item>
    <ct-form-item label="Activity form">
      <ct-input v-model="form.desc" type="textarea" />
    </ct-form-item>
    <ct-form-item>
      <ct-button type="primary" @click="onSubmit">Create</ct-button>
      <ct-button>Cancel</ct-button>
    </ct-form-item>
  </ct-form>
</template>
