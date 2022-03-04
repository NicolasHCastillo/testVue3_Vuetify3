<template>
  <v-menu
    bottom
    left
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs }">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        v-bind="attrs"
      >
        <v-badge
          bordered
          color="red"
          overlap
        >
          <template v-slot:badge>
            <span>{{countNotifications}}</span>
          </template>

          <v-icon icon="mdi:mdi-bell"></v-icon>
        </v-badge>
      </v-btn>
    </template>

    <!-- <v-list
      
      nav
    >
      <app-bar-item
        v-for="(n, i) in notifications"
        :key="i"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ n }} </v-list-item-title>    
        </v-list-item-content>
      </app-bar-item>
    </v-list> -->
  </v-menu>
</template>

<script>
export default {
    name: 'DefaultNotifications',

    data: () => ({
        notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
        'Another another one',
        ],
    }),
    computed: {
        countNotifications(){
            return this.notifications.length
        }
    }
}
</script>
