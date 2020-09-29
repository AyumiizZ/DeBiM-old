<template>
<div>
<div class="chart-wrapper">
  <chart :options="chartOptionsBar"></chart>
</div>
<hr />
<div class="chart-wrapper">
  <chart :options="chartOptionsLine"></chart>
</div>
</div>
</template>

<script>
export default {
  name: 'Test',
  data: () => ({
    chartOptionsBar: {
      xAxis: {
        data: ['Jan', 'Feb', 'Mar', 'Apr']
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: [63, 75, 24, 92]
        }
      ],
      title: {
        text: 'Sales Results',
        x: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      color: ['#127ac2']
    },
    chartOptionsLine: {
      xAxis: {
        data: ['Jan', 'Feb', 'Mar', 'Apr']
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'line',
          data: [63, 75, 24, 92]
        }
      ],
      title: {
        text: 'Sales Results',
        x: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      color: ['#127ac2']
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chart-wrapper {
    width: 100%;
    height: 700px;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
