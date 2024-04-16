<template>
  <div>
    <GuestNavBar/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import GuestNavBar from './components/NavBar/GuestNavBar.vue'

export default {
  name: 'App',
  components: {
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
</style>
