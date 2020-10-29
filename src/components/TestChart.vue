<template>
  <div class="echarts">
    <IEcharts :option="line" />
    <button @click="addData">Random</button>
  </div>
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  name: 'view',
  components: {
    IEcharts
  },
  props: {},
  data: () => ({
    line: {
      title: {
        text: 'Wifi Usage'
      },
      tooltip: {},
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: { type: 'value' },
      series: [
        // {
        //   name: 'Sales',
        //   type: 'bar',
        //   data: [5, 20, 36, 10, 10, 20]
        // }
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    }
  }),
  methods: {
    addData() {
      // const that = this
      this.line.xAxis.data.push('Rand')
      this.line.series[0].data.push(Math.floor(Math.random() * 1000 + 800))
    },
    doRandom() {
      const that = this
      let data = []
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min))
      }
      that.bar.series[0].data = data
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 400px;
  height: 400px;
}
</style>
