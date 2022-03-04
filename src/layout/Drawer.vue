<template>
  <v-navigation-drawer
    class="drawer"
    v-model="drawer"
    :rail="rail"
    :permanent="!$vuetify.display.smAndDown"
    :temporary="$vuetify.display.smAndDown"
    rail-widt="80"
    width="260"
  >
    <div class="px-2">
      <drawer-header />

      <v-divider class="mx-3 mb-2" />

      <List :items="items" />
    </div>
  </v-navigation-drawer>


  <NavBar @changeDrawer="setDrawer" :drawer="drawer"/>
  
</template>

<script>

import NavBar from '@/layout/NavBar.vue';
import List from '@/layout/List.vue';
import DrawerHeader from '@/layout/widgets/DrawerHeader.vue';

export default {
  name: "DrawerNavBar",
  components: {
    NavBar,
    DrawerHeader,
    List
  },
  data () {
    return {
      myvalue: null,
      drawer: null,
      rail: null,
    }
  },
  computed: {
    items() {
      return this.$store.state.app.items;
    },
    mini(){
      return this.$vuetify.display.smAndDown
    },
    
  },
  methods: {
      setDrawer(){
        if(this.$vuetify.display.smAndDown){
          this.drawer = !this.drawer
        }else{
          this.rail = !this.rail
        }
      },
    },
    checkDisplay_smAndDown(){
      if(!this.$vuetify.display.smAndDown){
        return true
      }
      return false
    },
};
</script>

<style scoped>
</style>