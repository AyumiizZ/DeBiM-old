<template>
  <div class="home">
    <b-container fluid>
      <SummaryTitle> </SummaryTitle>
      <b-jumbotron>
                   <LineChart
               v-if = "this._Id !== 0" 
                :currentResult="results"
                :status="is_update"
                :currentDate="date"
                :last_result="last_res"
                :start_time="time"
              />
            </b-jumbotron>
      
      <!-- <QuriesChart></QuriesChart> -->
      <b-row>
        <b-col sm="4">
          <b-jumbotron>
              <donut-chart-01
                :currentResult="results"
                :status="is_update"
                :last_result="last_res"
              />
          </b-jumbotron>
          <!-- <TopSuspectDomain
            :currentResult="results"
          ></TopSuspectDomain> -->
        </b-col>
        <b-col sm="4">
          <!-- <TopSuspectSource></TopSuspectSource> -->
                      <b-jumbotron>
              <DonutChart02
                :currentResult="results"
                :status="is_update"
                :last_result="last_res"
              />
            </b-jumbotron>
        </b-col>
        <b-col sm="4">
          <!-- <TopDGA></TopDGA> -->
                      <b-jumbotron>
              <DonutChart03
                :currentResult="results"
                :status="is_update"
                :last_result="last_res"
              />
            </b-jumbotron>
        </b-col>
      </b-row>
      <!-- <b-row>
        <b-col sm="12">
          <div>
            <b-jumbotron>
              <LineChart
               v-if = "this._Id !== 0" 
                :currentResult="results"
                :status="is_update"
                :currentDate="date"
              />
            </b-jumbotron>
          </div>
        </b-col>
      </b-row> -->
                    <!-- <h1>Yeahhh</h1> -->
              <!-- <button @click="getDatabyID">
                Get Data
              </button>
              <br /> -->

              <!-- <LineChart :seriesData="lineData" /> -->

      <!-- <b-row>
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
      -->
    </b-container> 
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SummaryTitle from '@/components/SummaryTitle.vue'
// import QuriesChart from '@/components/QuriesChart.vue'
// import TopSuspectDomain from '@/components/TopSuspectDomain.vue'
// import TopSuspectSource from '@/components/TopSuspectSource.vue'
// import TopDGA from '@/components/TopDGA.vue'
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
    // QuriesChart,
    // TopSuspectDomain,
    // TopSuspectSource,
    // TopDGA
    // LineChart
  },
  data() {
    return {
      results: [],
      // lineData: this.getQueries(),
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      body: {},
      Id:0,
      is_update: false,
      date: '',
      time: '',
      day: '',
      test: true,
      last_id: 0,
      last_res: [],
      last_time: '',
      first: true,
      hour:2,
      min:59,
      sec:3,
      
    }
  },
  methods: {
    GetData () {
      var LocalTime = require("@js-joda/core").LocalTime;
      if (this.first) {
        // console.log((this.pad(this.hour,2) + ':' + this.pad(this.min,2) + ':' + this.pad(this.sec,2)))
        this.last_time = LocalTime.parse((this.pad(this.hour,2) + ':' + this.pad(59,2) + ':' + this.pad(59,2)) )
        this.first = false
      }
      this.last_time = this.last_time.plusSeconds(1)
      this.last_id = parseInt(this.results[this.results.length-1]._id)+ this.index
      try {
        fetch('http://158.108.33.58:9200/data_domain/_doc/' + this.last_id, {
          method: "get"
        })
        .then((Response) => {
          return (Response.json())
        })
        .then((jsonData) => {
          this.last_res = jsonData
        })
        if (this.last_res._source.Way === "<-") {
          this.is_update = false
        }
        if (typeof this.last_res._source.is_legit !== 'undefined') {
          this.is_update = true
          console.log(this.last_res._source.SrcIP)
        }
        else {
          this.is_update = false
        }
          // console.log(this.results._source.QueryName)
          // console.log(this.results._source.is_legit)
          // console.log(this.is_update)
        // }
      }
      catch(err) {
        this.is_update = false
        console.log("Error")
      }
      if (this.last_time < LocalTime.parse(this.last_res._source.timestamp.split(" ")[1].split(".")[0])){
        // console.log(this.last_time.toString())
        // console.log(this.last_res._source.timestamp.split(" ")[1].split(".")[0])
        // console.log("--------")
        this.is_update = false
      }
    // console.log(this.last_res)
    else {
      this.index ++
      }
    },
    pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    },
    // getData () {
    //       fetch('http://158.108.33.58:9200/data_domain/_search?&q=%2201-Feb-20%2000:59%22+%2201-Feb-20%2001%22&size=10000', {
    //   method: "get"
    // })
    // .then((Response) => {
    //   return (Response.json())
    // })
    // .then((jsonData) => {
    //   this.results = jsonData.hits.hits
    // })
    //   try {
    //     var d = new Date()
    //     var hour = d.getHours()
    //     var min = d.getMinutes()
    //     var sec = d.getSeconds()
    //     var mil = d.getMilliseconds()
    //     var n = d.toDateString().split(' ')
    //     this.time = hour + ':' + min + ':' + sec + '.' + mil
    //     this.day = n[2] + '-' + n[1] + '-' + n[3] 
    //     console.log(this.time + ' ' + this.day)
    //     fetch("http://158.108.33.58:9200/data_domain/_search?&q=01-Feb-20%2000", { 
    //     // fetch("http://158.108.33.58:9200/data_domain/_search?q=timestamp:%20%2201-Feb-20%2000:59:26.999%22", { 
    //     // fetch("http://158.108.33.58:9200/data_domain/_search?q=timestamp:%20%22" + this.day + "%20" + this.time + "%22", {
    //     method: 'get'
    //     })
    //     .then(Response => {
    //       return Response.json()
    //     })
    //     .then(jsonData => {
    //       this.results = jsonData.hits.hits
    //     })
    //     console.log(this.results)
    //     // if (this.results._source.Way === "<-") {
    //     //   this.is_update = false
    //     // }
    //     // else {
    //       this.date = new Date()
    //       if (typeof this.results._source.is_legit !== 'undefined') {
    //         this.is_update = true
    //         this.Id++
    //       }
    //       else {
    //         this.is_update = false
    //       }
          
    //       // console.log(this.results._source.QueryName)
    //       // console.log(this.results._source.is_legit)
    //       // console.log(this.is_update)
    //     // }
    //   }
    //   catch(err) {
    //     this.is_update = false
    //     this.date = new Date()
    //     console.log("Error")
    //   }
    // },
    // getDatabyID () {
    //   try {
    //     fetch("http://158.108.33.58:9200/test_ipsus/_search?q=timestamp:%20%2201-Feb-20%2007:01:13.056%22", {
    //     method: 'get'
    //     })
    //     .then(Response => {
    //       return Response.json()
    //     })
    //     .then(jsonData => {
    //       this.results = jsonData.hits.hits
    //     })
    //     console.log(this.results)
    //     // if (this.results._source.Way === "<-") {
    //     //   this.is_update = false
    //     // }
    //     // else {
    //       this.date = new Date()
    //       if (typeof this.results._source.is_legit !== 'undefined') {
    //         this.is_update = true
    //         this.Id++
    //       }
    //       else {
    //         this.is_update = false
    //       }
          
    //       // console.log(this.results._source.QueryName)
    //       // console.log(this.results._source.is_legit)
    //       // console.log(this.is_update)
    //     // }
    //   }
    //   catch(err) {
    //     this.is_update = false
    //     this.date = new Date()
    //     console.log("Error")
    //   }
    // }
  },
  mounted: function() {
    window.setInterval(() => {
      this.GetData()
    // console.log(this.results)
    }, 1000)

    // var d = new Date()
    // var hour = d.getHours()
    // var min = d.getMinutes()
    // var sec = d.getSeconds()
    // var mil = d.getMilliseconds()
    // var hour = 4
    // var min = 42
    // var sec = 0
    var mil = 0
    var s = ''
    // var res
    // var n = d.toDateString().split(' ')
    this.time = this.hour + ':' + this.min + ':' + this.sec + '.' + mil
    // this.day = n[2] + '-' + n[1] + '-' + n[3] 
    for (var i = this.min; i <= 59; i++) {
      if (this.hour.toString().length === 1) {
        if (this.min.toString().length === 1) {
          s += '%2201-Feb-20%200' + (this.hour-1) + ':0' + i + '%22 +'
        }
        else {
          s += '%2201-Feb-20%200' + (this.hour-1) + ':' + i + '%22 +'
        }
      }
      else {
        if (this.min.toString().length === 1) {
          s += '%2201-Feb-20%20' + (this.hour-1) + ':0' + i + '%22 +'
        }
        else {
          s += '%2201-Feb-20%20' + (this.hour-1) + ':' + i + '%22 +'
        }
      }
    }
    if (this.hour.toString().length === 1) {
      s += '%2201-Feb-20%200' + (this.hour) + '%22&size=10000&sort=_id'
    }
    else {
      s += '%2201-Feb-20%20' + (this.hour) + '%22&size=10000&sort=_id' 
    }
    fetch('http://158.108.33.58:9200/data_domain/_search?&q=' + s, {
      method: "get"
    })
    .then((Response) => {
      return (Response.json())
    })
    .then((jsonData) => {
      this.results = jsonData.hits.hits
    })
    // this.Test()
    // for (const i in this.results){
    //   console.log(i)
    // }
  }  
}

</script>

<style scoped></style>
