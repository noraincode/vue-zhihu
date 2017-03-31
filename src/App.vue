<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from './components/topbar'
export default {
  name: 'app',
  components: {
    topbar
  }
}
</script>

<style>
#app {
  
}
</style>
