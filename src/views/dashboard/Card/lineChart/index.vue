<template>
  <div class="charts" ref="charts">
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "lineChart",
  mounted() {

    // let echarts = require("echarts")
    let chart = echarts.init(this.$refs.charts);
    chart.setOption({
      xAxis: {
        type:'category'
      },
      yAxis: {},
      series:[
        {
          type:'line',
          data:[20,30,40,50,60,70,80]
        },
      ],
      grid:{
        left:10,
        right:10,
        top:10,
        bottom:10
      }
    })
  }
}
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
