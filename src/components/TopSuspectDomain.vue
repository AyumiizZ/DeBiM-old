<template>
  <div class="quries">
    <b-jumbotron>
      <b-row class="quriesTitle">
        <b-col md="12" class="text">
          <h1>Top Suspected Domain</h1>
          <p>(Last Hour)</p>
        </b-col>
      </b-row>
      <IEcharts :option="pie" />
    </b-jumbotron>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  components: {
    IEcharts
  },
  data() {
    return {
      dateValue: '',
      pie: {
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            data: [
              {
                name: 'Apples',
                value: 70
              },
              {
                name: 'Strawberries',
                value: 68
              },
              {
                name: 'Bananas',
                value: 48
              },
              {
                name: 'Oranges',
                value: 40
              },
              {
                name: 'Pears',
                value: 32
              },
              {
                name: 'Pineapples',
                value: 27
              },
              {
                name: 'Grapes',
                value: 18
              }
            ],
            animation: false,
            label: {
              position: 'outer',
              alignTo: 'none',
              bleedMargin: 5
            },
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        ]
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
