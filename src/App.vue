<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/base.css'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      text:''
    }
  },
  methods:{
  },
  computed:{
  },
}
</script>

<style>
#app{
  height:100%;
}
html,body{
  height:100%!important;
  font-size: 16px!important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif!important;
}
</style>
