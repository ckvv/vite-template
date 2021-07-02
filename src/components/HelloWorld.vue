<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <el-button @click="state.count++" type="primary">count is: {{ state.count }}</el-button>
  <n-button @click="state.count++" type="primary">count is: {{ state.count }}</n-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { reactive } from 'vue';

export default {
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({ count: 0 });
    return {
      state,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
