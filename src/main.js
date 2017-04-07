import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import { Button, Select } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

// Vue.use(Button)


new Vue({
  el: '#app',
  router,
  data(){
    return {
      
    }
  },
  store,
  template: '<App/>',
  components: { App },
  created() {
    // console.log(this)
  },
  computed:{
  },
  updated(){
  }
})