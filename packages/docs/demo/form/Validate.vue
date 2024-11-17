<script lang="ts" setup>
import { reactive, ref } from "vue";
import { CtMessage, type FormInstance } from "create-element";

const formRef = ref<FormInstance>();
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

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      CtMessage.success("submit!");
    }
  });
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <ct-form ref="formRef" :model="form" :rules="rules">
    <ct-form-item label="Activity name" prop="name">
      <ct-input v-model="form.name" />
    </ct-form-item>
    <ct-form-item label="Activity zone" prop="region">
      <ct-select v-model="form.region" placeholder="please select your zone" :options="options" />
    </ct-form-item>
    <ct-form-item label="Instant delivery" prop="delivery">
      <ct-switch v-model="form.delivery" />
    </ct-form-item>
    <ct-form-item label="Activity form" prop="desc">
      <ct-input v-model="form.desc" type="textarea" />
    </ct-form-item>
    <ct-form-item>
      <ct-button type="primary" @click="onSubmit">Create</ct-button>
      <ct-button @click="onReset">Reset</ct-button>
    </ct-form-item>
  </ct-form>
</template>
