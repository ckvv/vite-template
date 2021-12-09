<template>
  <div class="user">
    <h1>This is an user page</h1>
    {{ $user }}
    <router-link to="/">Return Home</router-link>
    <el-button @click="send" type="primary">Send</el-button>
    <el-button @click="close" type="primary">Close</el-button>
  </div>
</template>

<script>
import {
  send, close, emitter, WS_TYPE,
} from '@/api/ws';

emitter.on(WS_TYPE.MESSAGE, (data) => {
  console.log(data);
});

export default {
  computed: {
    $user() {
      return this.$router.$user;
    },
  },
  methods: {
    send() {
      send(JSON.stringify(this.$router.$user));
    },
    close() {
      close('close');
    },
  },
};
</script>
