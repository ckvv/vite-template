<template>
  <div class="chatroom">
    {{ chat }}
    <el-input v-model="chat" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const chat = ref('');
</script>
