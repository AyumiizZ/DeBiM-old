<template>
  <div class="echarts">
        <b-row class="quriesTitle">
      <b-col md="12" class="text">
    <h1>Number of Legit and DGA (Last 15 Minutes)</h1>
      </b-col>
    </b-row>
    <IEcharts :option="line" />
  </div>

  <!-- <div class="quries">
    <b-jumbotron>
      <b-row class="quriesTitle">
        <b-col md="6" class="text">
          <h1>Network Activities</h1>
          <p>Graph title sub-title</p>
        </b-col>
        <b-col md="4"></b-col>
        <b-col md="2">
          <b-form-datepicker
            id="example-datepicker"
            v-model="dateValue"
            class="mb-2"
          >
          </b-form-datepicker>
        </b-col>
      </b-row>
      <IEcharts autoresize :option="line" class="echarts"/>
    </b-jumbotron>
  </div> -->
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3/src/full.js'
// import {LocalTime} from '@js-joda/root/packages/core/src/LocalTime.js'
export default {
  name: 'line-chart',
  components: {
    IEcharts,
  },
  props: {
    currentResult: Array,
    status: Boolean,
    currentDate: String,
    last_result: Object,
    start_time: Object
  },
  data() {
    return {
      times: [],
      num_legit: [],
      num_dga: [],
      sum_legit: 0,
      sum_dga: 0,
      count: 0,
      time_legit:[],
      time_dga:[],
      last_time: '',
      line: {
        // title: {
        //   text: 'Number of Legit and DGA'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Legit', 'DGA']
        },
        xAxis: {
          data: [' ']
        },
        yAxis: { 
                type: 'value' ,
                max: 3,
                splitNumber: 3
                // allowDecimals: false,
              },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            data: this.num_legit,
            type: 'line',
            areaStyle: {},
            name: 'Legit',
            color: '#37A2FF'
          },
          {
            data: this.num_dga,
            type: 'line',
            areaStyle: {},
            name: 'DGA',
            color: '#a90000'
          }
        ]
      }
    }
  },
  watch: {
    currentResult: {
      handler() {
        var t = this.start_time
        t = t.minusMinutes(15)
        for (var k = 0;k < 900; k++) {
          this.times.push(t.toString())
          t = t.plusSeconds(1)
          // con
        }
        console.log(this.times[this.times.length-1])
        // var hour = this.start_time.split(":")[0]
        // var min = this.start_time.split(":")[1]
        // var sec = (this.start_time.split(":")[2]).split(".")[0]
  
        // // console.log(hour)
        // // console.log(min)
        // // console.log(sec)
        // // console.log(mil)
        // for (var s = parseInt(sec)+1; s <= 59;s++) {
        //   this.times.push(this.pad(hour-1,2) + ':' + this.pad(min,2) + ':' + this.pad(s,2)) 
        // }
        // for (var m = parseInt(min)+1; m <= 59; m++) {
        //   for (s = 0; s <= 59; s++) {
        //     this.times.push(this.pad(hour-1,2) + ':' + this.pad(m,2) + ':' + this.pad(s,2))
        //   }
        // }
        // for (m = 0; m <= 59; m++) {
        //   for (s = 0; s <= 59; s++) {
        //     this.times.push(this.pad(hour,2) + ':' + this.pad(m,2) + ':' + this.pad(s,2)) 
        //   }
        // }
        this.last_time = this.times[this.times.length-1]
        var LocalTime = require("@js-joda/core").LocalTime;
        this.last_time = LocalTime.parse(this.last_time).plusSeconds(1)
        // this.times
        // for (var i in this.currentResult){
        //   var index = this.times.indexOf(this.currentResult[i]._source.timestamp.split(' ')[1].split(".")[0])
        //   console.log(index)
        //   console.log(this.currentResult[i]._source.timestamp.split(' ')[1].split(".")[0])
        //   if (this.currentResult[i]._source.Way === '->'){
        //     if (this.times.indexOf(this.currentResult[i]._source.timestamp.split(' ')[1].split(".")[0]) !== -1) {
        //       if (this.currentResult[i]._source.is_legit) {
        //         this.sum_legit++
        //         this.num_legit.push(this.sum_legit)
        //         this.num_dga.push(this.sum_dga)
        //       } 
        //       else {
        //         this.sum_dga++
        //         this.num_legit.push(this.sum_legit)
        //         this.num_dga.push(this.sum_dga)
        //       }
        //     }
        //     else {
        //       this.num_legit.push(this.sum_legit)
        //       this.num_dga.push(this.sum_dga)
        //     }
          for (var i in this.currentResult){
            if (this.currentResult[i]._source.Way === '->'){
              if (typeof this.currentResult[i]._source.is_legit !== 'undefined') {
                if (this.currentResult[i]._source.is_legit) {
                  this.time_legit.push(this.currentResult[i]._source.timestamp.split(" ")[1].split(".")[0])
                } 
                else {
                  this.time_dga.push(this.currentResult[i]._source.timestamp.split(" ")[1].split(".")[0])
                }
              }
            }
          }
          // var Old_time = ''
          // var count = 0
          for (var j in this.times) {
            this.sum_legit = 0
            this.sum_dga = 0
            if (this.time_legit.includes(this.times[j])){
              // console.log(this.time_legit.filter(x => x === this.times[j]).length)
              this.sum_legit ++
              console.log(this.sum_legit)
              // count ++
            }
            else if (this.time_dga.includes(this.times[j])){
              // console.log(this.time_dga.filter(x => x === this.times[j]).length)
              this.sum_dga ++
              // count ++
            }
            // if (this.times[j] !== Old_time) {
              this.num_legit.push(this.sum_legit)
              this.num_dga.push(this.sum_dga)
            // }
            // Old_time = this.times[j]
          }
          // console.log(count)
          // console.log(this.times[this.times.length-1])
          // console.log(this.time_legit[this.time_legit.length-1])
          // console.log(this.time_dga[this.time_dga.length-1])
          // console.log(this.checkForDuplicates(this.time_legit))
          // console.log(this.checkForDuplicates(this.time_dga))
          // for (var i in this.currentResult){
          //   console.log(this.currentResult[i]._source.timestamp.split(" ")[1].split(".")[0])
          //     if (this.currentResult[i]._source.Way === '->'){
          //       if (this.currentResult[i]._source.is_legit) {
          //         this.sum_legit++
          //       } 
          //       else {
          //         this.sum_dga++
          //       }
          //     }
          //     this.num_legit.push(this.sum_legit)
          //     this.num_dga.push(this.sum_dga)
          //   // }
          // }
          // for (var j in this.times) {
          //   if (this.times[i])
          // }
            // this.times.push(this.currentResult[i]._source.timestamp)
            // if (this.currentResult[i]._source.is_legit) {
            //   this.sum_legit++
            //   this.num_legit.push(this.sum_legit)
            //   this.num_dga.push(this.sum_dga)
            // } 
            // else {
            //   this.sum_dga++
            //   this.num_legit.push(this.sum_legit)
            //   this.num_dga.push(this.sum_dga)
            // }
          // }
        //   this.count = i
        
        this.times.pop()
        this.line.xAxis.data = this.times
        this.line.series[0].data = this.num_legit
        this.line.series[1].data = this.num_dga
      }
    },
    last_result: {
      handler() {
        
        // var LocalTime = require("@js-joda/core").LocalTime;
        this.last_time = this.last_time.plusSeconds(1)
        // this.last_time = this.last_time.plusSeconds(1)
        // console.log(this.last_time)
        if (this.status) {
          console.log(this.last_result._source.QueryName)
          console.log(this.last_result._source.is_legit)
          // while (this.last_time < LocalTime.parse(this.last_result._source.timestamp.split(" ")[1].split(".")[0])) {
          //   this.times.shift()
          //   this.times.push(this.last_time.toString())
          //   this.num_legit.shift()
          //   this.num_dga.shift()
          //   this.num_legit.push(this.sum_legit)
          //   this.num_dga.push(this.sum_dga)
          //   this.line.xAxis.data = this.times
          //   this.line.series[0].data = this.num_legit
          //   this.line.series[1].data = this.num_dga
          //   this.last_time = this.last_time.plusSeconds(1)
          //     setTimeout(function(){ 
          //     console.log("Ready")
          // }, 1000);
          // }
          this.sum_legit = 0
          this.sum_dga = 0 
          if (this.last_result._source.is_legit) {
            this.sum_legit++
            this.num_legit.push(this.sum_legit)
            this.num_dga.push(this.sum_dga)
          } 
          else {
            this.sum_dga++
            this.num_legit.push(this.sum_legit)
            this.num_dga.push(this.sum_dga)
          }
          this.line.xAxis.data = this.times
          this.line.series[0].data = this.num_legit
          this.line.series[1].data = this.num_dga
        }
        else {
          this.sum_legit = 0
          this.sum_dga = 0 
          this.times.shift()
          this.times.push(this.last_time.minusSeconds(7).toString())
          this.num_legit.push(this.sum_legit)
          this.num_dga.push(this.sum_dga)
          this.num_legit.shift()
          this.num_dga.shift()
          this.line.xAxis.data = this.times
          this.line.series[0].data = this.num_legit
          this.line.series[1].data = this.num_dga
        }
      
      // console.log(this.currentResult)


        // try {
        //   this.times.push(this.currentResult._source.timestamp)
        // }
        // catch(err) {
        //   return
        // }
      //   if (this.status) {
      //     if (this.currentResult._source.Way === "<-") {
      //       return
      //     }
      //     // console.log('---------------------')
      //     // try {
      //     // this.times.push(this.currentResult._source.timestamp)
      //     this.times.push(this.currentDate)
      //     this.line.xAxis.data = this.times
      //     if (this.currentResult._source.is_legit) {
      //       this.sum_legit++
      //     } else {
      //       this.sum_dga++
      //     }
      //     this.num_legit.push(this.sum_legit)
      //     this.num_dga.push(this.sum_dga)
      //     this.line.series[0].data = this.num_legit
      //     this.line.series[1].data = this.num_dga
      //     // console.log(this.currentResult._source.is_legit)
      //     // console.log(this.currentResult._source.timestamp)
      //   }
      // else {
      //     this.times.push(this.currentDate)
      //     this.line.xAxis.data = this.times
      //     this.num_legit.push(this.sum_legit)
      //     this.num_dga.push(this.sum_dga)
      //     this.line.series[0].data = this.num_legit
      //     this.line.series[1].data = this.num_dga
      //   }
      }
    }
  },

  methods: {
    pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    },
    checkForDuplicates(array) {
      return new Set(array).size !== array.length
    }
  // Test() {
  //         for (var i in this.currentResult){
  //       if (this.currentResult[i]._source.Way === '->'){
  //         this.times.push(this.currentResult[i]._source.timestamp)
  //         if (this.currentResult[i]._source.is_legit) {
  //           this.sum_legit++
  //           this.num_legit[i] = this.sum_legit
  //           this.sum_dga[i] = this.sum_dga
  //         } else {
  //           this.sum_dga++
  //           this.num_legit[i] = this.sum_legit
  //           this.sum_dga[i] = this.sum_dga
  //         }
  //       }
  //     }
  //     this.times.pop()
  //       // console.log(this.currentResult)
  //     this.line.xAxis.data = this.times
  //     this.line.series[0].data = this.num_legit
  //     this.line.series[1].data = this.num_dga
  // //   doRandom() {
  // //     const that = this
  // //     let data = []
  // //     for (let i = 0, min = 5, max = 99; i < 6; i++) {
  // //       data.push(Math.floor(Math.random() * (max + 1 - min) + min))
  // //     }
  // //     that.bar.series[0].data = data
  //   }
  // },
  // mounted: function() {
// 
  //     this.Test()
  //         for (var i in this.currentResult){
  //       if (this.currentResult[i]._source.Way === '->'){
  //         this.times.push(this.currentResult[i]._source.timestamp)
  //         if (this.currentResult[i]._source.is_legit) {
  //           this.sum_legit++
  //           this.num_legit[i] = this.sum_legit
  //           this.sum_dga[i] = this.sum_dga
  //         } else {
  //           this.sum_dga++
  //           this.num_legit[i] = this.sum_legit
  //           this.sum_dga[i] = this.sum_dga
  //         }
  //       }
  //     }
  //     this.times.pop()
  //       // console.log(this.currentResult)
  //     this.line.xAxis.data = this.times
  //     this.line.series[0].data = this.num_legit
  //     this.line.series[1].data = this.num_dga
  //   // console.log(this.currentResult)
  }
}
</script>

<style lang="scss" scoped>
  .echarts {
    width: 1800px;
    height: 450px;
  }
.quries {
  margin: 0 0 0 0px;
  
}
.quriesTitle {
  color: #333;
  padding-right: 0;
  border-bottom: 1px solid #73879c;
}
.text {
  text-align: left;
}
.text h1 {
  display: inline-block;
  margin-right: 10px;
  font-size: 26px;
  line-height: 50px;
  font-weight: 500;
  color: #73879c;
  margin-block-end: 0;
}
.text p {
  display: inline-block;
  font-size: 16px;
  color: #ababab;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-block-end: 0;
}
.jumbotron {
  padding: 1rem 1rem;
  min-height: 400px;
}
</style>
