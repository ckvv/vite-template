<template>
  <div class="hello-world">
    <div><a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a></div>
    <div><a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a></div>
    <div><a href="https://element-plus.org/" target="_blank">Element Plus Documentation</a></div>

    <el-button @click="signOut" type="primary">signOut</el-button>
    <el-button @click="state.count++" type="primary">count is: {{ state.count }}</el-button>
    <n-button @click="state.count++" type="primary">count is: {{ state.count }}</n-button>

    <div>打开<router-link to="/sign">Sign</router-link>页面，</div>
    <div>打开<router-link to="/user">User</router-link>页面，</div>
    <div>打开<router-link to="/admin">Admin</router-link>页面,如果是普通用户会被跳转到登录页面</div>

    <div>
      Edit<code>components/HelloWorld.vue</code> to test hot module replacement.
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { signOut } from '@/utils/helpers';

export default {
  setup() {
    const state = reactive({ count: 0 });
    return {
      state,
      signOut,
    };
  },
};
</script>

<style lang="scss">
  .hello-world {
    text-align: center;
  }
</style>
