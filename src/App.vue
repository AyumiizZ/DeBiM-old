<template>
  <div id="app">
    <!-- <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button> -->
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <NavBar />
    <SideBar />
    <TestChart/>
    <main id="page-wrap">
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <!-- <NavBar /> -->
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import TestChart from './components/TestChart.vue'
export default {
  components: {
    NavBar,
    SideBar,
    TestChart
  },
  data() {
    return {
      query: '',
      data: []
    }
  },
  methods: {
    search() {
        axios.get("http://192.168.1.109:9200/result/_search? + this.query)
              .then(response => {
                console.log(response.data);
                this.data = response.data;
          })
    }
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
.home {
  background-color: white;
}
</style>
