import { createStore } from 'vuex'

import app from './modules/app'
import sales from './modules/sales'
import user from './modules/user'


export default createStore({
  modules:{
    app,
    sales,
    user,
  },
  state: {
    
  },
})