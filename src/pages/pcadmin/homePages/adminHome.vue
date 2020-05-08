<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月03日 13:36:35
  版本：v1.0
  修改人员：YF
-->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="card kjfs">
          <p class="title">
            <i class="fa fa-th-large fa-lg"></i>快捷方式
          </p>
          <ul>
            <li>
              <router-link to="/admin/addArticle" class="kjfs kjfs-bluee">
                <span>
                  <i class="el-icon-tickets fa-2x"></i>
                </span>
                <span>发表文章</span>
              </router-link>
            </li>
            <li>
              <router-link to="/dragTabe" class="kjfs kjfs-pinkk">
                <span>
                  <i class="fa fa-hand-stop-o fa-2x"></i>
                </span>
                <span>拖拽排序</span>
              </router-link>
            </li>
            <li>
              <router-link to="/pagePermissions" class="kjfs kjfs-yelloww">
                <span>
                  <i class="fa fa-universal-access fa-2x"></i>
                </span>
                <span>权限测试</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/admin/adminUpload" class="kjfs kjfs-grennn">
                <span>
                  <i class="fa fa-cloud-upload fa-2x"></i>
                </span>
                <span>文件上传</span>
              </router-link>
            </li>
            <li>
              <router-link to="/navClassifies" class="kjfs kjfs-purplee">
                <span>
                  <i class="fa el-icon-menu fa-2x"></i>
                </span>
                <span>前台菜单</span>
              </router-link>
            </li>
            <li>
              <router-link to="/markdown" class="kjfs kjfs-lightBluee">
                <span>
                  <i class="fa fa-file-code-o fa-2x"></i>
                </span>
                <span>编辑器</span>
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card dbsx">
          <p class="title">
            <i class="fa fa-file-text-o"></i>待办事项
          </p>
          <ul>
            <li>
              <router-link to="#">
                <span>待审评论</span>
                <span class="num">66</span>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <span>待审帖子</span>
                <span class="num">66</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="#">
                <span>待审商品</span>
                <span class="num">66</span>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <span>代发货</span>
                <span class="num">66</span>
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card bbxx">
          <p class="title">
            <i class="fa fa-server"></i>个人信息
          </p>
          <div class="table">
            <p>
              <span class="tit">版权所有</span>言棠
            </p>
            <p>
              <span class="tit">个人邮箱</span>yfeng12345@126.com
            </p>
            <p>
              <span class="tit">个人网站</span>www.yuxiaofeng.xyz
            </p>
            <p>
              <span class="tit">在线仓库</span>
              <span class="gitbox">
                <a target="_blank" href="https://github.com/YF18227349">
                  <el-button type="primary" icon="el-icon-cloudy" size="small">github</el-button>
                </a>
                <a target="_blank" href="https://gitee.com/YF18227349">
                  <el-button type="primary" icon="el-icon-cloudy" size="small">码云</el-button>
                </a>
              </span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <line-echarts id="lineEcharts" height="300px" ref="echarts"></line-echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <maintable id="maintable"></maintable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineEcharts from "../../../components/pcadmin/lineEcharts";
import Maintable from '../../../components/pcadmin/maintable'
export default {
  //组件名称
  name: "page1",
  //组件参数 接收来自父组件的数据
  props: {},
  data() {
    return {
    };
  },
  components: {
    LineEcharts,
    Maintable
  },
  //组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在，可用于接口调取
  created() {},
  //el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子，可用于接口调取
  mounted() {
    console.log(this.$store.state.token)
    this.selfAdaption();
  },
  //组件方法
  methods: {
    // echart自适应
    selfAdaption() {
      let that = this;
      setTimeout(() => {
        window.onresize = function() {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize();
          }
        };
      }, 10);
    }
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {}
};
</script> 

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
#lineEcharts,
#maintable,
.card {
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
#lineEcharts .title,
#maintable .title,
.card .title {
  font-size: 14px;
  padding: 10px;
}
#lineEcharts .title i,
#maintable .title i,
.card .title i {
  margin-right: 5px;
}
.card {
  color: #666;
}
.card ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card ul li {
  flex: 1;
}
.card ul li a {
  color: #666;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card ul li a span {
  height: 44px;
}
.card ul li a .num {
  line-height: 44px;
  font-size: 42px;
  color: #409eff;
  margin: 0;
}
.card ul li .kjfs-bluee {
  color: #409eff;
}
.card ul li .kjfs-pinkk {
  color: #eec2d3;
}
.card ul li .kjfs-yelloww {
  color: #f4d884;
}
.card ul li .kjfs-grennn {
  color: #89dda0;
}
.card ul li .kjfs-purplee {
  color: #78a2ea;
}
.card ul li .kjfs-lightBluee {
  color: #b8d6ff;
}
.card ul li:hover .kjfs-bluee {
  color: #fff;
  background: #409eff;
}
.card ul li:hover .kjfs-pinkk {
  color: #fff;
  background: #eec2d3;
}
.card ul li:hover .kjfs-yelloww {
  color: #fff;
  background: #f4d884;
}
.card ul li:hover .kjfs-grennn {
  color: #fff;
  background: #89dda0;
}
.card ul li:hover .kjfs-purplee {
  color: #fff;
  background: #78a2ea;
}
.card ul li:hover .kjfs-lightBluee {
  color: #fff;
  background: #b8d6ff;
}
.card .table {
  padding: 24px;
}
.card .table p {
  height: 52px;
  line-height: 52px;
  border: 1px solid #ccc;
  overflow: hidden;
  border-top: none;
  display: flex;
  justify-content: start;
}
.card .table p:first-child {
  border-top: 1px solid #ccc;
}
.card .table p .tit {
  width: 90px;
  min-width: 90px;
  height: 100%;
  text-align: center;
  border-right: 1px solid #ccc;
  margin-right: 18px;
}
.card .table p span.gitbox {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.card .table p span.gitbox a:first-child {
  margin-right: 30px;
}
#lineEcharts {
  margin-top: 30px;
  padding-top: 30px;
}
#maintable {
  margin-top: 30px;
  padding-top: 10px;
}
</style>
