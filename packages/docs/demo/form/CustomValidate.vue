<script lang="ts" setup>
import { reactive, ref } from "vue";
import { CtMessage, type FormInstance } from "create-element";

const formRef = ref<FormInstance>();
const form = reactive({
  name: "",
  password: "",
  passwordConfirm: "",
});

const rules: any = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
  passwordConfirm: [
    {
      required: true,
      trigger: "blur",
      message: "请再次输入密码",
    },
    {
      validator: (_: typeof rules, value: string) => value === form.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
});

const onSubmit = async (instance?: FormInstance) => {
  const valid = await instance?.validate();
  if (!valid) return;
  CtMessage.success("submit!");
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <ct-form ref="formRef" :model="form" :rules="rules" label-position="top" @submit.prevent="onSubmit(formRef)">
    <ct-form-item label="Activity name" prop="name">
      <ct-input v-model="form.name" />
    </ct-form-item>
    <ct-form-item label="Password" prop="password">
      <ct-input v-model="form.password" type="password" />
    </ct-form-item>
    <ct-form-item label="Password Confirm" prop="passwordConfirm">
      <ct-input v-model="form.passwordConfirm" type="password" />
    </ct-form-item>
    <ct-form-item>
      <ct-button type="primary" native-type="submit">Create</ct-button>
      <ct-button @click="onReset">Reset</ct-button>
    </ct-form-item>
  </ct-form>
</template>
