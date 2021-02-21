<template>
  <div class="echarts">
        <b-row class="quriesTitle">
      <b-col md="12" class="text">
    <h1>Number of Legit and DGA</h1>
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
export default {
  name: 'line-chart',
  components: {
    IEcharts
  },
  props: {
    currentResult: Object,
    status: Boolean,
    currentDate: String
  },
  data() {
    return {
      times: [],
      num_legit: [],
      num_dga: [],
      sum_legit: 0,
      sum_dga: 0,
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
        yAxis: { type: 'value' },
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
            name: 'Legit'
          },
          {
            data: this.num_dga,
            type: 'line',
            areaStyle: {},
            name: 'DGA'
          }
        ]
      }
    }
  },
  watch: {
    currentResult: {
      handler() {
        // try {
        //   this.times.push(this.currentResult._source.timestamp)
        // }
        // catch(err) {
        //   return
        // }
        if (this.status) {
          if (this.currentResult._source.Way === "<-") {
            return
          }
          // console.log('---------------------')
          // try {
          // this.times.push(this.currentResult._source.timestamp)
          this.times.push(this.currentDate)
          this.line.xAxis.data = this.times
          if (this.currentResult._source.is_legit) {
            this.sum_legit++
          } else {
            this.sum_dga++
          }
          this.num_legit.push(this.sum_legit)
          this.num_dga.push(this.sum_dga)
          this.line.series[0].data = this.num_legit
          this.line.series[1].data = this.num_dga
          // console.log(this.currentResult._source.is_legit)
          // console.log(this.currentResult._source.timestamp)
        }
      else {
          this.times.push(this.currentDate)
          this.line.xAxis.data = this.times
          this.num_legit.push(this.sum_legit)
          this.num_dga.push(this.sum_dga)
          this.line.series[0].data = this.num_legit
          this.line.series[1].data = this.num_dga
        }
      }
    }
  },

  // methods: {
  //   doRandom() {
  //     const that = this
  //     let data = []
  //     for (let i = 0, min = 5, max = 99; i < 6; i++) {
  //       data.push(Math.floor(Math.random() * (max + 1 - min) + min))
  //     }
  //     that.bar.series[0].data = data
  //   }
  // }
  // mounted: function() {
  //   console.log(this.currentResult)
  // }
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
