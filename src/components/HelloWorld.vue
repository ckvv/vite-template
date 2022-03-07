<template>
  <div class="hello-world text-center">
    <div>
      Hello: {{ username }}
    </div>
    <div>
      当前登陆: {{ users }}
    </div>
    <div>
      打开<router-link to="/sign">
        Sign
      </router-link>页面，
    </div>
    <div>
      打开<router-link to="/chat">
        Chat
      </router-link>页面，
    </div>
    <div>
      打开<router-link to="/admin">
        Admin
      </router-link>页面,如果是普通用户会被跳转到登录页面
    </div>
    <div @click="signOut">
      退出
    </div>
    <div>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      >Vite Documentation</a>
      <a
        href="https://v3.vuejs.org/"
        target="_blank"
      >Vue 3 Documentation</a>
      <a
        href="https://element-plus.org/"
        target="_blank"
      >Element Plus Documentation</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { signOut } from '@/utils/helpers';
import { send, emitter, WS_TYPE } from '@/api/ws';

const { username } = useRouter().$user;
const users = ref([]);

onMounted(() => {
  send({ type: WS_TYPE.ALL_USERS });
  emitter.on(WS_TYPE.ALL_USERS, (data) => { users.value = data; });
});
</script>
