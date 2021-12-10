<template>
  <div class="chatroom">
    {{ chat }}
    <el-input v-model="chat"></el-input>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const chat = ref('');
    return {
      chat,
    };
  },
};
</script>
