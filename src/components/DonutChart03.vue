<template>
  <div class="echarts">
    <b-row class="quriesTitle">
      <b-col md="12" class="text">
    <h1>Top Source IP (All)</h1>
      </b-col>
    </b-row>
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
    currentResult: Array,
    status: Boolean,
    last_result: Object,
  },
  data() {
    return {
      sum_IP1: 0 ,
      sum_IP2: 0 ,
      sum_IP3: 0 ,
      sum_IP4: 0 ,
      sum_Other: 0 ,
      sum: 0 ,
      IP1: '',
      IP2: '',
      IP3: '',
      IP4: '',
      dict: {},
      line: {
        // title: {
        //   text: 'Top Source IP (All)'
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
              data: [{value: this.sum_IP1, name: this.IP1},
                     {value: this.sum_IP2, name: this.IP2},
                     {value: this.sum_IP3, name: this.IP3},
                     {value: this.sum_IP4, name: this.IP4},
                     {value: this.sum_Other, name: "Other"}],
              radius: ['30%','70%'],
            type: 'pie',
            areaStyle: {},
            name: 'Top Source IP',
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
            for(var i in this.currentResult) {
              // console.log(this.currentResult[i])
              if (this.currentResult[i]._source.Way === "->") {
                if (this.currentResult[i]._source.is_legit) {
                  this.sum += 1
                  if (isNaN(this.dict[this.currentResult[i]._source.SrcIP])) {
                    this.dict[this.currentResult[i]._source.SrcIP] = 0
                  }
                  this.dict[this.currentResult[i]._source.SrcIP] += 1
                  // console.log(this.dict)
                  var sortable = [];
                  for (var sumip in this.dict) {
                      sortable.push([sumip, this.dict[sumip]]);
                  }
                  sortable.sort(function(a, b) {
                      return a[1] - b[1];
                  });

                  // if (this.is_update) {
                  this.IP1 = (sortable[Object.keys(sortable).length - 1][0])
                  if (typeof sortable[Object.keys(sortable).length - 2] !== 'undefined')
                    this.IP2 = (sortable[Object.keys(sortable).length - 2][0]) 
                  if (typeof sortable[Object.keys(sortable).length - 3] !== 'undefined')
                    this.IP3 = (sortable[Object.keys(sortable).length - 3][0])
                  if (typeof sortable[Object.keys(sortable).length - 4] !== 'undefined')
                    this.IP4 = (sortable[Object.keys(sortable).length - 4][0])
                  if (typeof sortable[Object.keys(sortable).length - 5] !== 'undefined')
                    this.IP5 = (sortable[Object.keys(sortable).length - 5][0])
                  this.sum_IP1 = (sortable[Object.keys(sortable).length - 1][1])
                  if (typeof sortable[Object.keys(sortable).length - 2] !== 'undefined')
                    this.sum_IP2 = (sortable[Object.keys(sortable).length - 2][1])
                  if (typeof sortable[Object.keys(sortable).length - 3] !== 'undefined')
                    this.sum_IP3 = (sortable[Object.keys(sortable).length - 3][1])
                  if (typeof sortable[Object.keys(sortable).length - 4] !== 'undefined')
                    this.sum_IP4 = (sortable[Object.keys(sortable).length - 4][1])
                  if (typeof sortable[Object.keys(sortable).length - 5] !== 'undefined')
                    this.sum_IP5 = (sortable[Object.keys(sortable).length - 5][1])
                  this.sum_Other = this.sum - (this.sum_IP1+this.sum_IP2+this.sum_IP3+this.sum_IP4)
                  // console.log(this.sum_IP1)
                }
              }
            }
            // console.log(this.dict)
            this.line.series[0].data[0].value = this.sum_IP1
            this.line.series[0].data[1].value = this.sum_IP2
            this.line.series[0].data[2].value = this.sum_IP3
            this.line.series[0].data[3].value = this.sum_IP4
            this.line.series[0].data[4].value = this.sum_Other
            this.line.series[0].data[0].name = this.IP1
            this.line.series[0].data[1].name = this.IP2
            this.line.series[0].data[2].name = this.IP3
            this.line.series[0].data[3].name = this.IP4
            // }
          }
      },
    last_result: {
      handler() {
        if (this.status){
          if (this.last_result._source.is_legit) {
            // console.log('------------------')
            // console.log(this.last_result._source.SrcIP)
            this.sum += 1
            if (isNaN(this.dict[this.last_result._source.SrcIP])) {
              this.dict[this.last_result._source.SrcIP] = 0
            }
            this.dict[this.last_result._source.SrcIP] += 1
            // console.log(this.dict)
            var sortable = [];
            for (var sumip in this.dict) {
                sortable.push([sumip, this.dict[sumip]]);
            }
            sortable.sort(function(a, b) {
                return a[1] - b[1];
            });

            // if (this.is_update) {
            this.IP1 = (sortable[Object.keys(sortable).length - 1][0])
            if (typeof sortable[Object.keys(sortable).length - 2] !== 'undefined')
              this.IP2 = (sortable[Object.keys(sortable).length - 2][0]) 
            if (typeof sortable[Object.keys(sortable).length - 3] !== 'undefined')
              this.IP3 = (sortable[Object.keys(sortable).length - 3][0])
            if (typeof sortable[Object.keys(sortable).length - 4] !== 'undefined')
              this.IP4 = (sortable[Object.keys(sortable).length - 4][0])
            if (typeof sortable[Object.keys(sortable).length - 5] !== 'undefined')
              this.IP5 = (sortable[Object.keys(sortable).length - 5][0])
            this.sum_IP1 = (sortable[Object.keys(sortable).length - 1][1])
            if (typeof sortable[Object.keys(sortable).length - 2] !== 'undefined')
              this.sum_IP2 = (sortable[Object.keys(sortable).length - 2][1])
            if (typeof sortable[Object.keys(sortable).length - 3] !== 'undefined')
              this.sum_IP3 = (sortable[Object.keys(sortable).length - 3][1])
            if (typeof sortable[Object.keys(sortable).length - 4] !== 'undefined')
              this.sum_IP4 = (sortable[Object.keys(sortable).length - 4][1])
            if (typeof sortable[Object.keys(sortable).length - 5] !== 'undefined')
              this.sum_IP5 = (sortable[Object.keys(sortable).length - 5][1])
            this.sum_Other = this.sum - (this.sum_IP1+this.sum_IP2+this.sum_IP3+this.sum_IP4)
            // console.log(this.sum_IP1)
          }
        }
        // console.log(this.sum_Other)
        // console.log(this.dict)
        this.line.series[0].data[0].value = this.sum_IP1
        this.line.series[0].data[1].value = this.sum_IP2
        this.line.series[0].data[2].value = this.sum_IP3
        this.line.series[0].data[3].value = this.sum_IP4
        this.line.series[0].data[4].value = this.sum_Other
        this.line.series[0].data[0].name = this.IP1
        this.line.series[0].data[1].name = this.IP2
        this.line.series[0].data[2].name = this.IP3
        this.line.series[0].data[3].name = this.IP4
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
