<template>
  <div class="admin">
    <h1>Admin page</h1>
    <div>{{ users }}</div>
    <router-link to="/">
      Return Home
    </router-link>
  </div>
</template>

<script setup>
import { userAPI } from '@/api/index';

const { data: users, execute } = userAPI.list(undefined, {
  error: '获取用户列表失败',
});
execute();
</script>
