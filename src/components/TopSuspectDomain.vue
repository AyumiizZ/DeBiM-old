<template>
  <div class="quries echarts">
    <b-jumbotron>
      <b-row class="quriesTitle">
        <b-col md="12" class="text">
          <h1>Top Suspected Domain</h1>
          <p>(Last Hour)</p>
        </b-col>
      </b-row>
      <IEcharts :option="pie" />
      <!-- <e -->
    </b-jumbotron>
  </div>
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3/src/full.js'
// import echarts from 'echarts'
export default {
  name: 'TopSuspectDomain',
  components: {
    IEcharts
    // echarts
  },
  props: {
    currentResult: Object
  },
  data() {
    return {
      sum_legit: 0,
      sum_dga: 0,
      pie: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
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
        //   data: ['Legit' , 'DGA']
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
        if (this.currentResult._source.is_legit === 'True') {
          this.sum_legit++
        } else {
          this.sum_dga++
        }
        this.pie.series[0].data[0].value = this.sum_legit
        this.pie.series[0].data[1].value = this.sum_dga
      }
    }
  }
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
</style>
