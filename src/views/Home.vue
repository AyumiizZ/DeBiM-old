<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8">col-sm-8</b-col>
        <b-col sm="4">col-sm-4</b-col>
      </b-row>

      <b-row>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
      </b-row>
    </b-container>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.home {
  background-color: white;
}
</style>
