
<template>
  <v-navigation-drawer
    class="drawer"
    color="black"
    v-model="drawer"
    bottom
    temporary
  >
    <drawer-header />
    <v-divider></v-divider>
    <v-list
      density="compact"
      nav
      v-for="item in items"
      :key="item.title"
      theme="dark"
    >
      <router-link :to="{ name: `${item.routerLink}` }" class="remUnderline">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {mapGetters} from 'vuex';
  export default {
  props:{
    drawer: {
      type: Boolean
    }
  },
    computed: {
      ...mapGetters('app',['items'])
    }
  }
</script>