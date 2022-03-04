<template>

  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar"
    height="70"
    flat
  >
    <v-app-bar-nav-icon @click="emitSignal" :icon="this.drawer?'mdi-dots-vertical':'mdi-format-list-bulleted'"/>
    <v-toolbar-title class="font-weight-light text-h5" v-text="nameRoute" />
    <v-spacer />
    <Search />
    <GoHome />
    <Notification />
    <Account />
    <Test />
  </v-app-bar>
</template>

<script>
import Search from "@/layout/widgets/Search";
import GoHome from "@/layout/widgets/GoHome";
import Notification from "@/layout/widgets/Notification";
import Account from "@/layout/widgets/Account";
import Test from "@/layout/widgets/test";

// // import Drawer from "@/layout/Drawer";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    Search,
    GoHome,
    Notification,
    Account,
    Test
    // Drawer,
  },
  props:{
    drawer: {
      type: Boolean
    }
  },
  computed: {
    nameRoute() {
      return this.$route.name;
    },
    ...mapGetters[("app", ["drawer"])],
  },
  methods: {
    ...mapActions('app',['changeDrawer']),
    emitSignal(){
      this.$emit('changeDrawer')
    }
  },
};
</script>
