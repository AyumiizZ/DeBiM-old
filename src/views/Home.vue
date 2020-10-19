<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12">
          <div>
            <b-jumbotron>
              <TestChart />
            </b-jumbotron>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="4">
          <div>
            <b-jumbotron
              header="Graph"
              lead="Bootstrap v4 Components for Vue.js 2"
            >
              <p>For more information visit website</p>
              <b-button variant="primary" href="#">More Info</b-button>
            </b-jumbotron>
          </div>
        </b-col>
        <b-col sm="4">
          <div>
            <b-jumbotron
              header="Graph"
              lead="Bootstrap v4 Components for Vue.js 2"
            >
              <p>For more information visit website</p>
              <b-button variant="primary" href="#">More Info</b-button>
            </b-jumbotron>
          </div>
        </b-col>
        <b-col sm="4">
          <div>
            <b-jumbotron
              header="Graph"
              lead="Bootstrap v4 Components for Vue.js 2"
            >
              <p>For more information visit website</p>
              <b-button variant="primary" href="#">More Info</b-button>
            </b-jumbotron>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import TestChart from '@/components/TestChart.vue'
export default {
  name: 'Home',
  components: {
    TestChart
  },
  mounted: () => {
    console.log('home')
  }
}
</script>

<style scoped></style>
