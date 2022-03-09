<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div>{{ users }}</div>
    <router-link to="/">
      Return Home
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { userAPI } from '@/api';
import { checkRes } from '@/utils/helpers';
import { notify } from '@/utils';

const users = ref([]);
async function getUserList() {
  const res = await userAPI.list();
  if (checkRes(res)) {
    return res.data.data;
  }
  notify.error('获取用户列表失败');
  return null;
}
onMounted(async () => {
  users.value = await getUserList();
});

</script>
