<template>
    <v-app>
      <!-- <DrawerMobile /> -->
      <!-- <AppBar /> -->
      <Drawer />
    <v-main>
      <v-card>
        <!-- <router-view></router-view> -->
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
// // import DrawerMobile from "@/layout/DrawerMobile.vue";
// import AppBar from "@/layout/AppBar.vue";
import Drawer from "@/layout/Drawer.vue";
import { ref } from 'vue'

export default {
  name: "App",
  components: {
    // DrawerMobile,
    // AppBar,
    Drawer,
  },
  setup () {
    const theme = ref('light')

    return {
      theme,
      toggleTheme: () => theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
  }
};
</script>

<style scoped>

@import '@/assets/style.css';

</style>