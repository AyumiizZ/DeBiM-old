<template>
  <div class="quries">
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
      <v-chart autoresize :options="bar" />
    </b-jumbotron>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      dateValue: '',
      bar: {
        tooltip: {},
        // grid: {
        //   left: '0%',
        //   right: '0%'
        // },
        // width: 1200,
        // height: 300,
        xAxis: {
          data: [
            'Shirt',
            'Sweater',
            'Chiffon Shirt',
            'Pants',
            'High Heels',
            'Socks'
          ]
        },
        yAxis: {},
        series: [
          {
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
        // options: { maintainAspectRatio: false }
      }
    }
  }
  // mounted() {
  //   var myChartContainer = document.getElementById('main')

  //   // Get adaptive height and width
  //   var resizeMyChartContainer = function() {
  //     myChartContainer.style.height = window.innerHeight * 0.65 + 'px'
  //     myChartContainer.style.width = window.innerWidth * 0.75 + 'px'
  //   }
  //   // Set the height and width of the container
  //   resizeMyChartContainer()

  //   var myChart = Echarts.init(myChartContainer)

  //   let option = {}

  //   myChart.setOption(option)
  //   // Adaptive height and width
  //   window.onresize = function() {
  //     resizeMyChartContainer()
  //     myChart.resize()
  //   }
  // }
}
</script>

<style lang="scss" scoped>
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
// .echarts {
//   width: 100%;
//   height: 100%;
// }
</style>
