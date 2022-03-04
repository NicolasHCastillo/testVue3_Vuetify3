// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import colors from 'vuetify/lib/util/colors'

const LightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}


const DarkTheme = {
  dark: true,
  // colors: {
  //   background: '#FFFFFF',
  //   surface: '#FFFFFF',
  //   primary: '#6200EE',
  //   'primary-darken-1': '#3700B3',
  //   secondary: '#03DAC6',
  //   'secondary-darken-1': '#018786',
  //   error: '#B00020',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FB8C00',
  // }
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: 'LightTheme',
    themes:{
      LightTheme,
      DarkTheme
    }
  }
})