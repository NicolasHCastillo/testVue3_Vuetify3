<template>
  <v-list-item :prepend-avatar="avatar" class="mb-0 pl-6">
    <!-- <v-list-item-title>
        <strong >VMD</strong>
        <span >FREE</span>
      </v-list-item-title> -->
    <v-list-item-content class="pl-2">
      <v-list-item-title class="text-h3">
        <strong class="mr-1 font-weight-black">VMD</strong>
        <span class="primary--text">FREE</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import avatar from "@/assets/vmd.svg";
export default {
  data() {
    return {
      avatar,
    };
  },
};
</script>