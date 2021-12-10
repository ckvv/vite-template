<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div>{{user}}</div>
    <router-link to="/">Return Home</router-link>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { userAPI } from '@/api';
import { checkRes } from '@/utils/helpers';
import { error } from '@/plugins/element-plus';

export default {
  async setup() {
    const state = reactive({
      users: [],
    });

    async function getUserList() {
      const users = await userAPI.list();
      if (checkRes(users)) {
        return users.data.data;
      }
      error('获取用户列表失败');
      return null;
    }

    state.users = await getUserList();
    const { users } = toRefs(state);
    return {
      users,
    };
  },
};
</script>
