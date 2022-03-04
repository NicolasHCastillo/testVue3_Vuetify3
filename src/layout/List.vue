<template>
  <!-- <v-list
    expand
    nav
  >
    <template v-for="(item, i) in items" :key="`item-${i}`">
      <ListItem
        :item="item"
      />
    </template>
  </v-list> -->
  <div v-for="item in items" :key="item.title"     
    v-bind="$attrs"
    >
      <ListItem :item="item" />
  </div>
</template>

<script>

import ListItem from '@/layout/ListItem.vue'
  export default {
    name: 'DefaultList',

    components: {
      ListItem
    },

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
