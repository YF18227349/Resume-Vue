<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月03日 00:42:09
  版本：v1.0
  修改人员：YF
-->
<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <div class="logo">
          <img src="../../assets/images/logo.png" />
        </div>
      </div>
      <div class="loginBox" :style="{height:fullHeight-100+'px'}">
        <div class="loginCon">
          <p class="title">Management System</p>
          <el-card shadow="always" class="login-module" v-if="smdl">
            <div slot="header" class="clearfix formTitlt">
              <span>密码登录</span>
              <span class="titIconbox">
                <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
                <i
                  class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer"
                  @click="smdl = !smdl"
                ></i>
              </span>
            </div>
            <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input
                  type="text"
                  v-model="loginForm.username"
                  auto-complete="off"
                  placeholder="请输入登录账号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  type="password"
                  v-model="loginForm.password"
                  auto-complete="off"
                  placeholder="请输入登录密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </el-form>
          </el-card>

          <el-card shadow="always" class="login-module" v-else>
            <div slot="header" class="clearfix formTitlt">
              <span>扫码登录</span>
              <span class="titIconbox">
                <i class="iconfont xu-mimadenglu1 fa-lg iconcolor"></i>
                <i
                  class="iconfont xu-imagevector el-icon--right fa-lg pointer"
                  @click="smdl = !smdl"
                ></i>
              </span>
            </div>
            <div class="ewmbox">
              <div class="ewm">
                <img src="../../assets/images/QR-code.png" />
              </div>
              <div class="ewmicon">
                <i class="iconfont xu-saomadenglu fa-2x iconcolor"></i>
                <p>微信 扫一扫登录</p>
              </div>
              <p class="smalltxt">
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <footerMask />
  </div>
</template>

<script>
import footerMask from "../../components/mobile/footerMask";
// import store from '../../vuex/index'
export default {
  data() {
    return {
      smdl: true,
      loginForm: {
        username: "",
        password: ""
      },
      fullHeight: document.documentElement.clientHeight
    };
  },
  components: {
    footerMask
  },
  methods: {
    submitForm() {
      let that = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error"
        });
        return false;
      } else {
        // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
        // that.$store
        //   .dispatch("setToken", that.loginForm.username)
        //   .then(() => {
        //     that.$router.push({ path: "/" });
        //   })
        //   .catch(res => {
        //     that.$message({
        //       showClose: true,
        //       message: res,
        //       type: "error"
        //     });
        //   });

        that.$axios({
            url: "/api/login",
            method: "post",
            params: {
              username: that.loginForm.username,
              password: that.loginForm.password
            }
          })
          .then(response => {
            console.log(response);
            if (response.data.status == 1) {
              localStorage.setItem("username", response.data.data.username);
              localStorage.setItem("id", response.data.data._id);
              this.$store
                .dispatch("setToken", response.data.data.username)
                .then(() => {
                  this.$notify({
                    title: "登录成功",
                    message: "欢迎回来！" + response.data.data.username,
                    type: "success",
                    duration: "1000"
                  });
                  that.$router.push({ path: "/admin" });
                })
                .catch(res => {
                  that.$message({
                    showClose: true,
                    message: res,
                    type: "error"
                  });
                });
            } else if (response.data.status == 0) {
              this.$notify.error({
                title: "登陆失败",
                message: "密码错误",
                duration: "1000"
              });
            } else if (response.data.status == -1) {
              this.$notify.error({
                title: "登陆失败",
                message: "用户名不存在",
                duration: "1000"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    message() {
      const h = this.$createElement;
      this.$notify({
        title: "账号密码",
        message: h(
          "i",
          { style: "color: teal" },
          "账号密码可以随意填写，为了测试效果填写的账号将会被存储为localStorage"
        ),
        duration: 1500
      });
    }
  },
  created() {
    // this.$http.get("/api/userlist").then(res => {
    //   console.log(res);
    // });
  },
  mounted() {
    this.message();
    const that = this;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        that.fullHeight = window.fullHeight;
      })();
    };
  },
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
<style >
#login {
  width: 100%;
  /* height: 100%; */
  /* background: url("../assets/images/bj.gif"); */
  background-image: url(https://imgchr.com/content/images/system/home_cover_1587121321656_fce672.jpg);
  background-size: cover;
}
#login .header {
  height: 50px;
  position: relative;
  /* background: #2d3a4b; */
  background: #2b5876; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(43, 88, 118),
    rgb(78, 67, 118)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(43, 88, 118),
    rgb(78, 67, 118)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
}
#login .header .logo {
  margin-left: 30px;
  width: 500px;
  float: left;
  height: 40px;
  padding-top: 10px;
}

#login .header img {
  height: 100%;
}

#login .loginBox {
  padding: 74px 0 118px;
}
#login .loginBox .iconcolor {
  color: #409eff;
}

#login .loginBox .loginCon {
  width: 990px;
  margin: auto;
  position: relative;
  height: 388px;
}

#login .loginBox .loginCon .el-card__header {
  border-bottom: 0px;
}
#login .loginBox .loginCon .title {
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  width: 500px;
  line-height: 300px;
  float: left;
  margin-top: 0px;
}
#login .loginBox .loginCon .title:first-child {
  font-size: 34px;
  margin-top: 50px;
  margin-bottom: 30px;
}
#login .loginBox .loginCon .login-module {
  width: 380px;
  height: 325px;
  margin-top: 60px;
  border: none;
  position: absolute;
  right: 0;
}

#login .loginBox .loginCon .login-module .formTitlt {
  font-size: 18px;
  font-weight: 400;
}
#login .loginBox .loginCon .login-module .titIconbox {
  float: right;
  font-size: 18px;
}
#login .loginBox .loginCon .login-module .titIconbox .pointer {
  cursor: pointer;
}
#login .loginBox .loginCon .login-module .smalltxt {
  text-align: right;
  /* line-height: 30px; */
}

#login .loginBox .loginCon .login-module .smalltxt .a {
  text-decoration: none;
  color: #999999;
  font-size: 12px;
  margin-left: 8px;
}

#login .loginBox .loginCon .login-module .el-form-item__content {
  margin-left: 0px !important;
}
#login .loginBox .loginCon .login-module .el-form-item__content .subBtn {
  width: 100%;
}

#login .loginBox .loginCon .el-input__inner,
.el-button,
.el-card,
.el-message {
  border-radius: 0px !important;
}

#login .loginBox .loginCon .el-form-item__content .ico {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 40px;
  height: 39px;
  text-align: center;
  border-right: 1px solid #ccc;
}

#login .loginBox .loginCon .ewmbox {
  width: 100%;
  height: 240px;
  margin-top: -25px;
}
#login .loginBox .loginCon .ewmbox .ewm {
  width: 140px;
  height: 140px;
  margin: 20px auto;
}
#login .loginBox .loginCon .ewmbox p {
  font-size: 12px;
  padding-left: 40px;
  /* margin: 0; */
  margin-bottom: 30px;
  height: 26px;
  line-height: 26px;
}
#login .loginBox .loginCon .ewmbox .ewmicon {
  width: 140px;
  margin: 20px auto 0;
}
#login .loginBox .loginCon .ewmbox .iconfont {
  float: left;
}

#login .loginBox .loginCon .ewmbox p {
  font-size: 12px;
  padding-left: 40px;
  margin: 0;
}
#login .loginBox .iconfont {
  font-size: 26px;
}
</style>
