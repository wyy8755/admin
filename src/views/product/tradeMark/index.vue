<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px">添加</el-button>
    <el-table style="width: 100%" border :data="list">
      <el-table-column  label="序号" width="100px" align="center" type="index"></el-table-column>
      <el-table-column label="品牌名称" prop="tmName" align="center"></el-table-column>
      <el-table-column label="LOGO" prop="logoUrl">
        <template v-slot="{row,$index}">
          <img :src="row.logoUrl" style="height:100px;width:100px">
<!--          {{row.tmName}}-->
        </template>
      </el-table-column>
      <el-table-column label="14">
        <template>
          <el-button type="warning" size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页器-->
    <el-pagination
      style="margin-top: 20px;text-align: center"
      :current-page="page"
      :page-size="limit"
      layout="prev, pager, next,jumper,->,sizes,total"
      :page-sizes="[3,4,8]"
      :total="total"
      @current-change="changePage"
      @size-change="changeSize">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: "tradeMark",
  data(){
    return {
      page:1,
      limit:3,
      total:0,
      list:[]
    }
  },
  mounted() {
    this.getTradeMark()
  },
  methods:{
    async getTradeMark(){
      let res = await this.$API.tradeMark.tradeMarkList(this.page,this.limit)
      console.log(res);
      this.total=res.data.total
      this.list = res.data.records
    },
    changePage(number){
      this.page =number;
      this.getTradeMark()

    },
    changeSize(limit){
      this.limit =limit;
      this.getTradeMark()
    }
  }
}
</script>

<style scoped>

</style>
