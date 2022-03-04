
<template>
  <div class="text-center" >
    <v-menu offset-y v-model="$vuetify.theme.DarkTheme">
      <template v-slot:activator="{ }">
        <v-btn
          @click="setMode"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    name: "tesT",
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      darkMode: false
    }),
    methods: {
      setMode(){
        console.log('change');
        this.darkMode = !this.darkMode
        
      }
    }
  }
</script>