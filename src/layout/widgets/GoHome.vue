<template>
  <router-link :to="{name:'Home'}" class="remUnderline">
    <v-btn>
      <v-icon icon="mdi:mdi-view-dashboard"/>
    </v-btn>
  </router-link>
</template>

<script>
  export default {
    name: 'DefaultGoHome',
  }
</script>
