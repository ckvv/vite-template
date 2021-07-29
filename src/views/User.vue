<template>
  <div class="user">
    <h1>This is an user page</h1>
    {{ $user }}
    <router-link to="/">Return Home</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    $user() {
      return this.$router.$user;
    },
  },
};
</script>
