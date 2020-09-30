<template>
  <div id="app">
    <NavBar />
    <SideBar />
    <main id="page-wrap">
      <router-view />
    </main>
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
  background-color: lightgray;
}
</style>
