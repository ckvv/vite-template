<template>
  <div class="sign flex flex-col justify-center items-center h-full">
    <div class="md:p-16 md:shadow">
      <div class="text-center text-4xl">
        vite-element-template
        {{ user }}
      </div>
      <el-form
        ref="formRef"
        class="my-8"
        :hide-required-asterisk="true"
        label-position="left"
        :model="user"
        label-width="70px"
      >
        <el-form-item
          prop="username"
          label="用户名"
          :rules="[RULES.username]"
        >
          <el-input v-model="user.username" />
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :rules="[RULES.password]"
        >
          <el-input v-model="user.password" />
        </el-form-item>
        <el-form-item
          v-if="type === TYPE.signup"
          prop="checkPassword"
          label="确认密码"
          :rules="[{...RULES.checkPassword, password: user.password }]"
        >
          <el-input v-model="user.checkPassword" />
        </el-form-item>
      </el-form>
      <div class="flex flex-col">
        <template v-if="type === TYPE.signin">
          <el-button
            class="sign-btn"
            type="primary"
            @click="signIn"
          >
            登录
          </el-button>
          <el-button
            class="sign-btn"
            @click="toSignUp"
          >
            注册
          </el-button>
        </template>
        <template v-if="type === TYPE.signup">
          <el-button
            class="sign-btn"
            type="primary"
            @click="signUp"
          >
            注册
          </el-button>
          <el-button
            class="sign-btn"
            @click="toSignIn"
          >
            返回登录
          </el-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { signAPI } from '@/api';
import { checkForm } from '@/utils/helpers';
import { RULES } from '@/utils/rules';
import { setToken } from '@/utils/util';

const TYPE = {
  signup: 'signup',
  signin: 'signin',
};

const type = ref(TYPE.signin);
const formRef = ref();

const toSignUp = () => {
  type.value = TYPE.signup;
};
const toSignIn = () => {
  type.value = TYPE.signin;
};

const user = reactive({
  username: window.localStorage.getItem('username') || '',
  password: '',
  checkPassword: '',
});

const { execute: doSignIn } = signAPI.signIn();
const { execute: doSignUp } = signAPI.signUp();

const signIn = async () => {
  if (await checkForm(formRef.value)) {
    window.localStorage.setItem('username', user.username);
    doSignIn({
      data: {
        username: user.username,
        password: user.password,
      },
    }, {
      success: (data) => {
        setToken(data.token);
        window.location.href = '';
      },
      error: '登录失败',
    });
  }
};
const signUp = async () => {
  if (await checkForm(formRef.value)) {
    doSignUp({
      data: {
        username: user.username,
        password: user.password,
      },
    }, {
      success: toSignIn,
      error: '注册失败',
    });
  }
};
</script>

<style scoped>
.sign-btn {
  @apply w-full my-2 !mx-0;
}
</style>
