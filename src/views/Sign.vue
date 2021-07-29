<template>
  <div class="sign">
    <div class="sign-content">
      <div class="sign-title">
        vite-element-template
      </div>
      <el-form :hide-required-asterisk="true" label-position="left" class="sign-form" ref="form" :model="user" label-width="70px">
        <el-form-item prop="username" label="用户名" :rules="[RULES.username]">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" :rules="[RULES.password]">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPassword" v-if="type === TYPE.signup" label="确认密码" :rules="[{...RULES.checkPassword, password: user.password }]">
          <el-input v-model="user.checkPassword"></el-input>
        </el-form-item>
      </el-form>
      <div class="sign-operate" v-if="type === TYPE.signin">
        <el-button type="primary" @click="signIn">登录</el-button>
        <el-button @click="toSignUp">注册</el-button>
      </div>
      <div class="sign-operate" v-if="type === TYPE.signup">
        <el-button type="primary" @click="signUp">注册</el-button>
        <el-button @click="toSignIn">返回登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { RULES } from '@/utils/rules';

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
        username: '',
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
      if (await this.checkForm()) {
        const res = await this.$api.user.signIn();
        if (this.checkRes(res)) {
          window.location.reload();
        } else {
          this.$error('登录失败');
        }
      }
    },
    async signUp() {
      if (await this.checkForm()) {
        const res = await this.$api.user.signUp();
        if (this.checkRes(res)) {
          this.toSignIn();
        } else {
          this.$error('注册失败');
        }
      }
    },
  },
};
</script>

<style lang="scss">

  .sign {
    flex-direction: column;
    @include fill-center;

    .sign-content {
      @media screen and (min-width: $xs-screen) {
        padding: 4rem;
        @include box-shadow;
      }
      .sign-title {
        font-size: 2rem;
        text-align: center;
      }
      .sign-form {
        margin: 2rem 0;
      }
      .sign-operate {
        display: flex;
        flex-direction: column;
        .el-button {
          width: 100%;
          margin: .5rem 0;
        }
      }
    }
  }
</style>
