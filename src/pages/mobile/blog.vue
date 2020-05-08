<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年04月05日 00:29:54
  版本：v1.0
  修改人员：YF
-->
<template>
  <div class="container">
    <el-row :gutter="0">
      <el-col
        class="box"
        :xs="{span:24,offset:0}"
        :sm="{span:22,offset:1}"
        :md="{span:20,offset:2}"
        :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}"
      >
        <div class="grid-content bg-purple">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="grid-content bg-purple">
              <el-carousel
                height="40px"
                direction="vertical"
                indicator-position="none"
                :autoplay="true"
                style="border-radius: 5px;"
              >
                <el-carousel-item>
                  <a href="#" target>
                    <div style="background-color:#d3dce6;height: 100%;">
                      <div
                        style="height: 100%;width: 40px;background-color: #ff2d51;border-radius:5px;float: left;text-align: center;"
                      >
                        <div style="line-height:40px">
                          <i class="el-icon-message-solid" style="color: #FFFFFF;"></i>
                        </div>
                      </div>
                      <div style="text-align: center;">
                        <p style="line-height:40px;color: #ff4c00;">数据接口次数已用尽</p>
                      </div>
                    </div>
                  </a>
                </el-carousel-item>
                <el-carousel-item>
                  <a href="#" target>
                    <div style="background-color:#d3dce6;height: 100%;">
                      <div
                        style="height: 100%;width: 40px;background-color: #ff2d51;border-radius:5px;float: left;text-align: center;"
                      >
                        <div style="line-height:40px">
                          <i class="el-icon-message-solid" style="color: #FFFFFF;"></i>
                        </div>
                      </div>
                      <div style="text-align: center;">
                        <p style=" line-height:40px;color: #ff4c00;">请于明日重新尝试</p>
                      </div>
                    </div>
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="grid-content bg-purple">
              <playerMask />
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
            <div class="grid-content bg-purple-light">
              <div class="content">
                <div class="title">
                  <div></div>
                  <h4>今日发布</h4>
                </div>
                <ul>
                  <li>
                    <div class="left">
                      <div class="img">
                        <img
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg"
                          alt
                        />
                      </div>
                      <div class="text">
                        <p># 西安</p>
                        <p>9999999次浏览</p>
                      </div>
                    </div>
                    <div class="right">
                      <p>2020年04月06日 20:12</p>
                    </div>
                  </li>
                 <li>
                    <div class="left">
                      <div class="img">
                        <img
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg"
                          alt
                        />
                      </div>
                      <div class="text">
                        <p># 西安</p>
                        <p>9999999次浏览</p>
                      </div>
                    </div>
                    <div class="right">
                      <p>2020年04月06日 20:12</p>
                    </div>
                  </li>
                  <p>到底了</p>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <div class="grid-content bg-purple-light">
              <div class="content">
                <div class="title">
                  <div></div>
                  <h4>今日发布</h4>
                </div>
                <ul>
                  <li>
                    <div class="left">
                      <div class="img">
                        <img
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg"
                          alt
                        />
                      </div>
                      <div class="text">
                        <p># 西安</p>
                        <p>9999999次浏览</p>
                      </div>
                    </div>
                    <div class="right">
                      <p>2020年04月06日 20:12</p>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <div class="img">
                        <img
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg"
                          alt
                        />
                      </div>
                      <div class="text">
                        <p># 西安</p>
                        <p>9999999次浏览</p>
                      </div>
                    </div>
                    <div class="right">
                      <p>2020年04月06日 20:12</p>
                    </div>
                  </li>
                  <p>到底了</p>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
            <div class="grid-content bg-purple-light">
              <div class="content">
                <div class="title">
                  <div></div>
                  <h4>今日发布</h4>
                </div>
                <ul>
                  <li>
                    <div class="left">
                      <div class="img">
                        <img
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg"
                          alt
                        />
                      </div>
                      <div class="text">
                        <p># 西安</p>
                        <p>9999999次浏览</p>
                      </div>
                    </div>
                    <div class="right">
                      <p>2020年04月06日 20:12</p>
                    </div>
                  </li>
                 <li>
                    <div class="left">
                      <div class="img">
                        <img
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg"
                          alt
                        />
                      </div>
                      <div class="text">
                        <p># 西安</p>
                        <p>9999999次浏览</p>
                      </div>
                    </div>
                    <div class="right">
                      <p>2020年04月06日 20:12</p>
                    </div>
                  </li>
                  <p>到底了</p>
                </ul>
              </div>
            </div>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import playerMask from "../components/playerMask";
export default {
  //组件名称
  name: "YF",
  //组件参数 接收来自父组件的数据
  props: {},
  components: {
    playerMask
  },
  data() {
    return {};
  },
  //组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在，可用于接口调取
  created() {},
  //el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子，可用于接口调取
  mounted() {},
  //组件方法
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {}
};
</script> 

<style scoped>
.container .box {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
  padding: 10px 10px;
}
.container .content {
  padding: 10px 0 0;
}
.container .content .title {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 0;
  margin: 0 5px;
}
.container .content .title > div {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #bf242a;
  margin-right: 5px;
}

.container .content ul li {
  display: flex;
  justify-content: space-between;
  padding: 5px 2px;
  margin: 0 5px;
  border-bottom: 1px solid #ada996;
}
.container .content ul li .left {
  display: flex;
  justify-content: left;
  align-items: center;
}
.container .content ul li .right {
  display: flex;
  align-items: flex-end;
  font-size: 12px;
}
.container .content ul li:first-child {
  border-top: 1px solid #ada996;
}
.container .content ul li .img {
  width: 36px;
  height: 36px;
  /* margin-left: 0.5vw; */
}

.container .content ul li .img img {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  /* margin-top: 8px; */
}
.container .content ul li .text {
  margin-left: 10px;
}
.container .content ul li .text p {
  font-size: 12px;
}
.container .content ul > p {
  text-align: center;
  line-height: 25px;
  font-size: 12px;
}
</style>
