<template>
  <div class="home">
    <!-- <h1>HELLO</h1> -->
    <b-container fluid>
      <!-- <QuriesChart /> -->
      <b-jumbotron>
        <TempTable
          :currentResult="results"
          :status="is_update"
          :last_result="last_res">
        </TempTable>
      </b-jumbotron>
    </b-container>
  </div>
</template>
<script>
// import QuriesChart from '@/components/QuriesChart.vue'
import TempTable from '@/components/TempTable.vue'
export default {
  name: 'History',
  components: {
    TempTable
  },
  data() {
    return {
      results: [],
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
      last_res: [],
      last_time: '',
      first: true,
      hour:2,
      min:53,
      sec:40,
      just_update: false
    }
  },
  methods: {
    async GetData () {
      var LocalTime = require("@js-joda/core").LocalTime;
      if (this.first) {
        this.last_time = LocalTime.parse(this.pad(this.hour,2) + ':' + this.pad(this.min,2) + ':' +this.pad(this.sec,2))
        this.first = false
      }
      var last_id = await parseInt(this.results[this.results.length-1]._id)+ this.index
      console.log(last_id)
      try {
        await fetch('http://158.108.33.58:9200/data_domain/_doc/' + last_id, {
          method: "get"
        })
        .then((Response) => {
          return (Response.json())
        })
        .then((jsonData) => {
          this.last_res = jsonData
        })
      }
      catch(err) {
        this.is_update = false
        console.log("Error")
      }
      console.log(this.last_time.toString())
      console.log(this.last_res)
      var next_time = await LocalTime.parse(this.last_res._source.timestamp.split(" ")[1].split(".")[0])
      console.log(next_time.toString() === LocalTime.parse(this.last_res._source.timestamp.split(" ")[1].split(".")[0]).toString())
      if (this.last_time < next_time || this.just_update){
        console.log("--------")
        this.is_update = false
        this.just_update = false
      }
      else {
        if (typeof this.last_res._source.is_legit !== 'undefined') {
          this.is_update = true
          this.just_update = true
          console.log("UPDATE")
        }
        else {
          this.is_update = false
        }
        this.index ++
        console.log(next_time)
      }
      this.last_time = this.last_time.plusSeconds(1)
    },
    pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    },
  },
  mounted: function() {
    window.setInterval(() => {
      this.GetData()
    }, 1000)

    var s = ''
    var t 
    var LocalTime = require("@js-joda/core").LocalTime;
    t = LocalTime.parse((this.pad(this.hour,2) + ':' + this.pad(this.min,2) + ':' + this.pad(this.sec,2)) )
    console.log(t.minusHours(1).toString().split(":")[0])
    this.time = t
    for (var i = 0;i < 61; i++) {
      s += '%2201-Feb-20%20' + (t.toString().split(":")[0]) + ':' + (t.toString().split(":")[1]) + '%22 +'
      t = t.minusMinutes(1)
    }
    s += '%2201-Feb-20%20' + (t.toString().split(":")[0]) + ':' + (t.toString().split(":")[1])  + '%22&size=10000&sort=_id'
    fetch('http://158.108.33.58:9200/data_domain/_search?&q=' + s, {
      method: "get"
    })
    .then((Response) => {
      return (Response.json())
    })
    .then((jsonData) => {
      this.results = jsonData.hits.hits
    })
  }  
}

</script>
