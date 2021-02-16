<template>
  <div class="home">
    <b-container fluid>
      <SummaryTitle> </SummaryTitle>
      <QuriesChart></QuriesChart>
      <b-row>
        <b-col sm="4">
          <TopSuspectDomain
            :currentResult="results"
          ></TopSuspectDomain>
        </b-col>
        <b-col sm="4">
          <TopSuspectSource></TopSuspectSource>
        </b-col>
        <b-col sm="4">
          <TopDGA></TopDGA>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <div>
            <b-jumbotron>
              <!-- <h1>Yeahhh</h1> -->
              <!-- <button @click="getDatabyID">
                Get Data
              </button>
              <br /> -->

              <!-- <LineChart :seriesData="lineData" /> -->
              <LineChart
               v-if = "this._Id !== 0" 
                :currentResult="results"
                :status="is_update"
              />
            </b-jumbotron>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="4">
          <div>
            <b-jumbotron>
              <donut-chart-01
                :currentResult="results"
                :status="is_update"
              />
            </b-jumbotron>
          </div>
        </b-col>
        <b-col sm="4">
          <div>
            <b-jumbotron>
              <DonutChart02
                :currentResult="results"
                :status="is_update"
              />
            </b-jumbotron>
          </div>
        </b-col>
        <b-col sm="4">
          <div>
            <b-jumbotron>
              <DonutChart03
                :currentResult="results"
                :status="is_update"
              />
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
import QuriesChart from '@/components/QuriesChart.vue'
import TopSuspectDomain from '@/components/TopSuspectDomain.vue'
import TopSuspectSource from '@/components/TopSuspectSource.vue'
import TopDGA from '@/components/TopDGA.vue'
import LineChart from '@/components/LineChart.vue'
import DonutChart01 from '@/components/DonutChart01.vue'
import DonutChart02 from '@/components/DonutChart02.vue'
import DonutChart03 from '@/components/DonutChart03.vue'
// const { Client } = require('@elastic/elasticsearch')
// const client = new Client({ node: 'http://158.108.33.58:9200' })
// async function run () {

//   const { body } = await client.get({
//     index: 'data_domain',
//     id: '1'
//   })

//   console.log(body)
// }

// run().catch(console.log)

export default {
  name: 'Home',
  components: {
    LineChart,
    DonutChart01,
    DonutChart02,
    DonutChart03,
    SummaryTitle,
    QuriesChart,
    TopSuspectDomain,
    TopSuspectSource,
    TopDGA
    // LineChart
  },
  data() {
    return {
      results: {},
      // lineData: this.getQueries(),
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      body: {},
      Id:0,
      is_update: false,
    }
  },
  methods: {
    next() {
      this.index++
    },

    // get_data() {
    //   fetch('http://158.108.33.58:9200/data_domain/_search?&size=100', {
    //     method: 'get'
    //   })
    //     .then(Response => {
    //       return Response.json()
    //     })
    //     .then(jsonData => {
    //       this.results = jsonData.hits.hits
    //     })
    // },
    // getQueries() {
    //   var base = +new Date(1968, 9, 3)
    //   var oneDay = 24 * 3600 * 1000
    //   var date = []

    //   var data = [Math.random() * 300]

    //   for (var i = 1; i < 20000; i++) {
    //     var now = new Date((base += oneDay))
    //     date.push(
    //       [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
    //     )
    //     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
    //   }
    //   // this.lineData = data
    //   return { date: date, data: data }
    // },
    getDatabyID () {
      try {
        fetch('http://158.108.33.58:9200/data_domain/_doc/' + this.Id, {
        method: 'get'
        })
        .then(Response => {
          return Response.json()
        })
        .then(jsonData => {
          this.results = jsonData
        })
        if (typeof this.results._source.is_legit !== 'undefined') {
          this.is_update = true
          this.Id++
        }
        else {
          this.is_update = false
        }
        // console.log(this.results._source.QueryName)
        // console.log(this.results._source.is_legit)
        // console.log(this.is_update)
      }
      catch(err) {
        this.is_update = false
        // console.log("Error")
      }
    }
  },
  mounted: function() {
    window.setInterval(() => {
      this.getDatabyID()
    // console.log(this.results)
    }, 100)
    // fetch('http://158.108.33.58:9200/data_domain/_doc/' + 0, {
    //   method: 'get'
    // })
    //   .then(Response => {
    //     return Response.json()
    //   })
    //   .then(jsonData => {
    //     this.results = jsonData
    //   })
    // console.log(this.results)
  }  
}

</script>

<style scoped></style>
