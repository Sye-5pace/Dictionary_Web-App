/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    '*.html',
    '*.ts'
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    extend: {
      fontFamily: {
        'mono':['DM Mono','monospace'],
        'sans':['Poppins','sans'],
        'serif':['Trirong','serif']
      },
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ]
}

// font-family: 'Lora', serif;