<template>
 <div id="app">
  <!--路由匹配到的组件将渲染在这里-->
  <router-view/>
 </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,body,h3,p{
    margin: 0;
    padding: 0;
  }
</style>
