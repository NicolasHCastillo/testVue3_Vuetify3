<template>
  <v-list-item :value="item" active-color="primary" class="my-2 align-self-center"
  :to="item.routerLink"
  >
    <v-list-item-avatar left>
      <v-icon :icon="item.icon"></v-icon>
    </v-list-item-avatar>
    <v-list-item-title v-text="item.title"></v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "DefaultListItem",

  props: {
    item: {
      type: Object,
    },
  },

  computed: {
    title() {
      const matches = this.item.title.match(/\b(\w)/g);
      return matches.join("");
    },
  },
};
</script>
