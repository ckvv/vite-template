<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div>{{users}}</div>
    <router-link to="/">Return Home</router-link>
  </div>
</template>

<script>
import { userAPI } from '@/api';
import { checkRes } from '@/utils/helpers';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const users = await userAPI.list();
      if (checkRes(users)) {
        this.users = users.data.data;
      } else {
        this.$error('获取用户列表失败');
      }
    },
  },
};
</script>
