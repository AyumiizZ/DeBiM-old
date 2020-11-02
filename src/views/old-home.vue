<template>
  <div class="home">
    <b-container fluid="lg">
      <b-row>
        <b-col sm="12">
          <div>
            <b-jumbotron>
              <h1>Yeahhh</h1>
              <br />
              <LineChart :seriesData="lineData" />
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

import LineChart from '@/components/LineChart.vue'
export default {
  name: 'Home',
  components: {
    LineChart
  },
  data() {
    return {
      lineData: this.getQueries()
    }
  },
  methods: {
    getQueries() {
      var base = +new Date(1968, 9, 3)
      var oneDay = 24 * 3600 * 1000
      var date = []

      var data = [Math.random() * 300]

      for (var i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay))
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
        )
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
      }
      // this.lineData = data
      return { date: date, data: data }
    }
  }
}
</script>

<style scoped></style>
