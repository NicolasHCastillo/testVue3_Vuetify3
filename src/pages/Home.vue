<template>
  <h1>Home</h1>
  <router-link :to="{ name: 'Menu' }"> ir a menu </router-link>
  <div class="d-flex flex-column justify-space-between align-center">
    <v-slider
      v-model="width"
      class="align-self-stretch"
      min="200"
      max="500"
      step="1"
    ></v-slider>

    
  </div>
  <h1>A</h1>
</template>

<script>
export default {
  name: "HomePage",
  title: 'Home page',
  data: () => ({
    width: 300,
  }),
};
</script>
