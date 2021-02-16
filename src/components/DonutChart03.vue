<template>
  <div class="echarts">
    <IEcharts :option="line" />
  </div>
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  name: 'donut-chart-03',
  components: {
    IEcharts
  },
  props: {
    currentResult: Object
  },
  data() {
    return {
      sum_legit: 0 ,
      sum_dga: 0,
      line: {
        title: {
          text: 'Number of Legit and DGA'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },      
        // legend: {
        //   orient: 'vertical',
        //   left: 400,
        //   data: ['Legit' , 'DGA']
        // },
        series: [
          {
              data: [{value: this.sum_legit, name: 'Legit'},
                     {value: this.sum_dga, name: 'DGA'}],
              radius: ['30%','70%'],
            type: 'pie',
            areaStyle: {},
            name: 'Number of Legit and DGA',
            label: {
              fontSize: 20,
            }
          }
        ]
      }
    }
  },
  watch: {
      currentResult: {
          handler() {
            if (typeof this.currentResult._source.is_legit !== 'undefined') {
              if (this.currentResult._source.is_legit) {
                this.sum_legit++
              } else {
                this.sum_dga++
              }
            }
            this.line.series[0].data[0].value = this.sum_legit
            this.line.series[0].data[1].value = this.sum_dga
          }
      }
  },
  // mounted: function() {
  //   console.log(this.currentResult)
  // }
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
}
</script>

<style scoped>
/* .echarts {
  width: 800px;
  height: 400px;
} */
</style>
