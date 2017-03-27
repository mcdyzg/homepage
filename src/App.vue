<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

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
  height:100%;
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
