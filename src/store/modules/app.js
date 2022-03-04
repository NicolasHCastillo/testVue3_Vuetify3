// import { makeAppendChildToParentMutation } from "@/helpers"
export default {
  namespaced: true,
  state: {
    drawer: null,
    rail: null,
    // drawerImage: true,
    items: [
      {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard',
        'prepend-icon': 'mdi-view-dashboard',
        routerLink: '/',
        
      },
      {
        title: 'User Profile',
        icon: 'mdi-account',
        'prepend-icon': 'mdi-account',
        routerLink: 'Menu',
      },
      {
        title: 'Regular Tables',
        icon: 'mdi-clipboard-outline',
        'prepend-icon': 'mdi-clipboard-outline',
        routerLink: 'Tables',
      },
      {
        title: 'Typography',
        icon: 'mdi-format-font',
        'prepend-icon': 'mdi-format-font',
        routerLink: 'Typography',
      },
      {
        title: 'Icons',
        icon: 'mdi-chart-bubble',
        'prepend-icon': 'mdi-chart-bubble',
        routerLink: 'Icons',
      },
      {
        title: 'Google Maps',
        icon: 'mdi-map-marker',
        'prepend-icon': 'mdi-map-marker',
        routerLink: 'Maps',
      },
      {
        title: 'Notifications',
        icon: 'mdi-bell',
        'prepend-icon': 'mdi-bell',
        routerLink: 'Notifications',
      },
    ],
  },
  getters: {
    drawer: (state) => {
      return state.drawer
    },
    item: (state, getters, rootState) => {
      return (title) => {
        const item = rootState.item.items.find(el => el.title === title)
        return item
      }
    },
    items: (state) => {
      return state.items
    },
  },
  actions: {
    changeDrawer({rootState}){
      rootState.app.drawer = !rootState.app.drawer
    }
  },
  mutations: {
    // appendThreadToForum: makeAppendChildToParentMutation({ parent: 'forums', child: 'threads' }),
  }
}