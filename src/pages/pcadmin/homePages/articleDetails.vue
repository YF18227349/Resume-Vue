<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月05日 20:21:24
  版本：v1.0
  修改人员：YF
-->
<template>
  <div class="container">
    <h1>{{detailsData.title}}</h1>
    <p class="info">
      <span
        class="tag"
        :style="{'background-color': (detailsData.tag=='原创' ? '#a8c97f':detailsData.tag=='转载' ? '#c8c2be':detailsData.tag=='翻译' ? '#a59aca':'#9999')}"
      >{{detailsData.tag}}</span>
      <span class="author">{{detailsData.author}}</span>
      <span class="updateTime">{{detailsData.updateTime}}</span>
      <span class="floatright"><i class="el-icon-view"></i> 999</span>
      <span class="del" @click="del">删除</span>
    </p>
    <div class="main" v-html="detailsData.content.html"></div>
  </div>
</template>

<script>
export default {
  //组件名称
  name: "articleDetails",
  //组件参数 接收来自父组件的数据
  props: {},
  data() {
    return {
      detailsData: {
        title: "",
        tag: "",
        content: {
          html: ""
        },
        author: ""
      }
    };
  },
  //组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在，可用于接口调取
  created() {
    this.$axios.get("/api/articleinfo?id=" + this.$route.query.id).then(res => {
      console.log(res.data.data);
      this.detailsData = res.data.data;
    });
  },
  //el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子，可用于接口调取
  mounted() {},
  //组件方法
  methods: {
    del() {
      this.$confirm("真的要删除本篇文章?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: "/api/articledel",
            method: "post",
            params: {
              id: this.$route.query.id
            }
          }).then(res => {
            if (res.data.status == 1) {
              this.$router.push({ path: "/admin/articlePage" });
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
  //计算属性
  computed: {},
  //侦听器
  watch: {}
};
</script> 

<style scoped>
.container .main h5 {
  height: 30px;
  line-height: 30px;
  font-size: 26px;
}
h1 {
  height: 45px;
  line-height: 45px;
  font-size: 28px;
}
.info {
  background: #f7f7fc;
  height: 32px;
  line-height: 32px;
}
.info span {
  margin-right: 10px;
  font-size: 14px;
}
.info .tag {
  height: 32px;
  display: inline-block;
  padding: 0 10px;
  border-radius: 5px;
  color: #f9f9f9;
  border-radius: 5px;
}
.info .author {
  color: #5893c2;
}
.info .updateTime {
  color: #999aaa;
}
.info .floatright {
    color: #999aaa;
    font-size: 14px;
}
.info .del {
  float: right;
  margin-right: 20px;
  font-size: 12px;
  color: #8fb0c9;
  cursor: pointer;
}
</style>
