<template>
  <div class="col-full text-center">
    <!-- <h1>Page not found</h1> -->
    <img src="../assets/404-error-not-found-1.png" alt="" />
    <div>
      <router-link :to="{ name: 'Home' }">back home page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("ready");
  },
};
</script>