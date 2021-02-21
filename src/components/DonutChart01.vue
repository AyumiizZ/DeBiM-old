<template>
  <div class="echarts queries">
    <b-row class="quriesTitle">
      <b-col md="12" class="text">
    <h1>Number of Legit and DGA</h1>
      </b-col>
    </b-row>
    <IEcharts :option="line" />
  </div>
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  name: 'donut-chart-01',
  components: {
    IEcharts
  },
  props: {
    currentResult: Object,
    status: Boolean
  },
  data() {
    return {
      sum_legit: 0,
      sum_dga: 0,
      line: {
        // title: {
        //   text: 'Number of Legit and DGA'
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
    //         legend: {
    //     top: '5%',
    //     left: 'center'
    // },
        emphasis: {
          label: {
            show: true,
            fontSize: '25',
            fontWeight: 'bold'
          }
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 400,
          // data: ['Legit' , 'DGA']
        // },
        series: [
          {
            data: [
              { value: this.sum_legit, name: 'Legit' },
              { value: this.sum_dga, name: 'DGA' }
            ],
            radius: ['30%', '70%'],
            type: 'pie',
            areaStyle: {},
            name: 'Number of Legit and DGA',
            label: {
              fontSize: 20
            }
          }
        ]
      }
    }
  },
  watch: {
    currentResult: {
      handler() {
        if (this.status) {
          if (this.currentResult._source.Way === "<-") {
            return
          }
          if (this.currentResult._source.is_legit) {
            this.sum_legit++
          } 
          else {
            this.sum_dga++
          }
          this.line.series[0].data[0].value = this.sum_legit
          this.line.series[0].data[1].value = this.sum_dga
        }
      }
    }
  }
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

<style lang="scss" scoped>
.quriesTitle {
  color: #333;
  padding-right: 0;
  border-bottom: 1px solid #73879c;
  border-bottom-right-radius: 1 px ;
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
/* .echarts {
  width: 800px;
  height: 400px;
} */
</style>
