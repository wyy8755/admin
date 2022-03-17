<template>
  <div>
    <el-row type="flex" :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="$ 51005">
            <template v-slot:charts>
              <span>周同比&nbsp;&nbsp;56.67%</span>
              <span>&nbsp;&nbsp;日同比&nbsp;&nbsp;80.67%</span>
            </template>
            <template #footer>
              <span>日访问量 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
        <Detail title="访问量" count="1231">
          <template v-slot:charts>
            <span>
              <line-chart></line-chart>
            </span>
          </template>
          <template v-slot:footer>
            <span>日访问量 1234</span>
          </template>
        </Detail>
      </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="13113">
            <template v-slot:footer>
              <span>日访问量 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运行活动效果" count="78%">
            <template v-slot:footer>
              <span>日访问量 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Detail from "@/views/dashboard/Card/Detail";
import lineChart from "@/views/dashboard/Card/lineChart";
export default {
  name: "Card",
  components:{
    Detail,lineChart
  }
}
</script>

<style scoped>

</style>
