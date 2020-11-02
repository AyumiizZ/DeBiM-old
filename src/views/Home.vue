<template>
  <div class="home">
    <b-container fluid>
      <SummaryTitle> </SummaryTitle>

      <b-row>
        <b-col sm="12">
          <div>
            <b-jumbotron>
              <!-- <h1>Yeahhh</h1> -->
              <button @click="next">
                Get Data
              </button>
              <br />

              <!-- <LineChart :seriesData="lineData" /> -->
              <LineChart
                v-if="results.length"
                :currentResult="results[index]"
              />
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
import SummaryTitle from '@/components/SummaryTitle.vue'
export default {
  name: 'Home',
  components: { SummaryTitle },
  data() {
    return {
      results: [],
      lineData: this.getQueries(),
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods: {
    next() {
      this.index++
    },

    get_data() {
      fetch('http://158.108.33.58:9200/result/_search?&size=100', {
        method: 'get'
      })
        .then(Response => {
          return Response.json()
        })
        .then(jsonData => {
          this.results = jsonData.hits.hits
        })
    },
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
  },
  mounted: function() {
    fetch('http://158.108.33.58:9200/result/_search?&size=100', {
      method: 'get'
    })
      .then(Response => {
        return Response.json()
      })
      .then(jsonData => {
        this.results = jsonData.hits.hits
      })
    console.log(this.results)
  }
}
</script>

<style scoped></style>
