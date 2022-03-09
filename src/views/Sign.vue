<template>
  <div class="sign flex flex-col justify-center items-center h-full">
    <div class="md:p-16 md:shadow">
      <div class="text-center text-4xl">
        vite-element-template
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
import { signAPI } from '@/api';
import { checkRes, checkForm } from '@/utils/helpers';
import { RULES } from '@/utils/rules';
import { setToken } from '@/utils/util';
import { ref } from 'vue';
import { notify } from '@/utils';

const TYPE = {
  signup: 'signup',
  signin: 'signin',
};

const formRef = ref();
const type = ref(TYPE.signin);
const user = ref({
  username: window.localStorage.getItem('username') || '',
  password: '',
  checkPassword: '',
});

function toSignUp() {
  type.value = TYPE.signup;
}

function toSignIn() {
  type.value = TYPE.signin;
}

async function signIn() {
  if (await checkForm(formRef)) {
    window.localStorage.setItem('username', user.value.username);
    const res = await signAPI.signIn({
      username: user.value.username,
      password: user.value.password,
    });
    if (checkRes(res)) {
      setToken(res.data.data.token);
      window.location.href = '';
    } else {
      notify.error('登录失败');
    }
  }
}

async function signUp() {
  if (await checkForm(formRef)) {
    const res = await signAPI.signUp({
      username: user.value.username,
      password: user.value.password,
    });
    if (checkRes(res)) {
      toSignIn();
    } else {
      notify.error('注册失败');
    }
  }
}

</script>

<style scoped>
.sign-btn {
  @apply w-full my-2 !mx-0;
}
</style>
