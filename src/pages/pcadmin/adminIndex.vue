<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月03日 12:22:23
  版本：v1.0
  修改人员：YF
-->
<template>
  <div class="adminIndex" :style="{height:fullHeight+'px'}">
    <el-container class="fullheight" :style="{height:fullHeight+'px'}">
      <div style="background-color:#fff;height:100%">
        <asideMask />
      </div>
      <el-container>
        <el-header style="padding:0;text-align: right; font-size: 12px;height:50px">
          <headMask />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer style="height:50px">
          <footerMask />
    </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideMask from "../../components/pcadmin/asideMask";
import headMask from "../../components/pcadmin/headMask";
import footerMask from "../../components/mobile/footerMask";

export default {
  //组件名称
  name: "adminIndex",
  //组件参数 接收来自父组件的数据
  props: {},
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      fullHeight: document.documentElement.clientHeight
    };
  },
  components: {
    asideMask,
    headMask,
    footerMask
  },
  //组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在，可用于接口调取
  created() {
      var myDate = new Date()
      var y = myDate.getFullYear();  
      var m = myDate.getMonth() + 1;  
      m = m < 10 ? '0' + m : m;  
      var d = myDate.getDate();  
      d = d < 10 ? ('0' + d) : d;  
      var h = myDate.getHours();
      h = h < 10 ? ('0' + h) : h;
      var min = myDate.getMinutes();
      min = min < 10 ? ('0' + min) : min;
      var s = myDate.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      var ti =  y + m + d + h + min + s;   
      console.log(ti)
  },
  //el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子，可用于接口调取
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        that.fullHeight = window.fullHeight;
      })();
    };
  },
  //组件方法
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script> 

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 50px;
}

.el-aside {
  color: #333;
  
}
.el-main {
  height: 100%;
  z-index: 999;
  overflow-y: scroll;
  overflow-x: hidden;
}
.el-main::-webkit-scrollbar {
  display: none;
}
 .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 0;
  }
</style>
