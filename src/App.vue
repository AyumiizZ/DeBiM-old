<template>
  <div id="app">
    <!-- <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button> -->

    <SideBar />
    <NavBar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
export default {
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      showSideBar: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
