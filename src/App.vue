<template>
  <div>
    <GuestNavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GuestNavBar from './components/NavBar/GuestNavBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GuestNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}
  .icon {
    color: rgb(255, 56, 92) !important;
    cursor: pointer;
  }
  body{
    padding: 0px;
    margin: 0px;
    box-sizing: 0px;
  }
  div{
    font-family: 'Circular',-apple-system,'BlinkMacSystemFont','Roboto','Helvetica Neue',sans-serif;
  }
</style>
