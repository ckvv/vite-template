<template>
  <div class="sign flex flex-col justify-center items-center h-full">
    <div class="md:p-16 md:shadow">
      <div class="text-center text-4xl">
        vite-element-template
      </div>
      <el-form
        ref="form"
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

<script>
import { signAPI } from '@/api';
import { checkRes, checkForm } from '@/utils/helpers';
import { RULES } from '@/utils/rules';
import { setToken } from '@/utils/util';

const TYPE = {
  signup: 'signup',
  signin: 'signin',
};

export default {
  setup() {
    return {
      RULES,
      TYPE,
    };
  },
  data() {
    return {
      type: TYPE.signin,
      user: {
        username: window.localStorage.getItem('username') || '',
        password: '',
        checkPassword: '',
      },
    };
  },
  methods: {
    toSignUp() {
      this.type = TYPE.signup;
    },
    toSignIn() {
      this.type = TYPE.signin;
    },
    async signIn() {
      if (await checkForm.call(this)) {
        window.localStorage.setItem('username', this.user.username);
        const res = await signAPI.signIn({
          username: this.user.username,
          password: this.user.password,
        });
        if (checkRes(res)) {
          setToken(res.data.data.token);
          window.location.href = '';
        } else {
          this.$error('登录失败');
        }
      }
    },
    async signUp() {
      if (await checkForm.call(this)) {
        const res = await signAPI.signUp({
          username: this.user.username,
          password: this.user.password,
        });
        if (checkRes(res)) {
          this.toSignIn();
        } else {
          this.$error('注册失败');
        }
      }
    },
  },
};
</script>

<style scoped>
.sign-btn {
  @apply w-full my-2 !mx-0;
}
</style>
