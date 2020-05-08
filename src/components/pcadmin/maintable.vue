<template>
  <div class="table">
    <p class="title">
      <i class="el-icon-tickets"></i>表单
    </p>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column align='center' type="index" width="60" label="序号"></el-table-column>
      <el-table-column align='center' prop="numbering" label="编号"></el-table-column>
      <el-table-column align='center' prop="title" label="名称"></el-table-column>
      <el-table-column align='center' prop="pic" label="图片">
        <template slot-scope="scope">
          <el-image
            style="width: 30px; height: 30px"
            :src="'http://localhost:3000'+scope.row.picurl"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="amount" label="金额"></el-table-column>
      <el-table-column align='center' prop="condition" label="状态"></el-table-column>
      <el-table-column align='center' fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row, scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "maintable",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$message({
        showClose: true,
        message: index,
        row,
        type: "success"
      });
    },
    handleDelete(row, scope) {
      this.$confirm("此操作将永久删除该条数据?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
          this.$axios({
            url: "/api/tablesdel",
            method: "post",
            params: {
              id: row._id
            }
          })
          .then(res => {
							if (res.data.status == 1) {
								this.tableData.splice(scope.$index, 1);
								this.$message({
									type: "success",
									message: "删除成功!"
								});
							}
						});
				})
				.catch(() => {
					console.log("取消");
					this.$message({
						type: "info",
						message: "已取消删除"
					});
				});
		}
    
  },
  created() {
    this.$axios({
      url: "/api/tableslist",
      method: "get",
      params: {}
    }).then(response => {
      console.log(response);
      this.tableData = response.data.data;
    });
  }
};
</script>

<style scoped>
.table {
  padding: 5px;
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  /* text-align: center; */
}
.cell {
  padding: 0;
}
.title {
  height: 30px;
}
</style>
