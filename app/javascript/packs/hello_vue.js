/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you set extractStyles to true
// in config/webpack/loaders/vue.js) to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'

var form = new Vue({
  el: '#form',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    clearMessage: function () {
      this.message = ""
    },
    randomMessage: function () {
      var l = 8;
      // 生成する文字列に含める文字セット
      var c = "abcdefghijklmnopqrstuvwxyz";
      
      var cl = c.length;
      var r = "";
      for(var i=0; i<l; i++){
        r += c[Math.floor(Math.random()*cl)];
      }
      this.message = r
    }
  }
})

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
