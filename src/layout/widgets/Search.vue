<template>
  <v-text-field
    placeholder="Search"
    class="mr-16"
     variant="underlined"
  >
  <template
      v-if="$vuetify.display.mdAndUp"
      v-slot:append
    >
      <v-btn
        class="pa-6 bg- primaary rounded-circle"
        size="6"
        height="44"
        width="44"
        border=true
        rounded="100"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>


<script>
export default {
  name: "SearchLayout",
  data: () => ({
    message: "Hey!",
    loading: false,
  }),

  methods: {
    clickMe() {
      this.loading = true;
      this.message = "Wait for it...";
      setTimeout(() => {
        this.loading = false;
        this.message = `You've clicked me!`;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.redondo {
  width: 100px;
  height: 500px;
  margin: 5px;
  padding: 10px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  font-size: 11px;
  line-height: 32px;
}
</style>