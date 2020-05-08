<!--  -->
<template>
  <div class="container">
    <!-- <el-row :gutter="0" class="hidden-md-and-down">
      <el-col>
        <div class="grid-content bg-purple">
          <el-menu class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="blog">博客</el-menu-item>
            <el-menu-item index="resume">简历</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row> -->
    <div class="main">
      <router-view></router-view>
    </div>
    <footerMask></footerMask>
    <!-- <el-row :gutter="0" class="hidden-lg-and-up">
      <el-col>
        <div class="grid-content bg-purple">
          <van-tabbar route>
            <van-tabbar-item replace to="/index/blog" icon="hot-o">博客</van-tabbar-item>
            <van-tabbar-item replace to="/index/resume" icon="notes-o">简历</van-tabbar-item>
          </van-tabbar>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import footerMask from "../../components/mobile/footerMask";
export default {
  data() {
    return {
      active: "0"
    };
  },
  components: {
    footerMask
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
   
  },
  mounted() {

  },
  //生命周期 - 挂载完成（访问DOM元素）

  methods: {
    
  }
};
</script>
<style scoped>
.el-menu-demo li.el-menu-item {
  padding: 0 30px;
  margin: 0 20px;
  font-size: 20px;
}
</style>
