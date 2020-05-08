<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月03日 13:34:53
  版本：v1.0
  修改人员：YF
-->
<template>
  <div class="head">
    <el-dropdown style="height:50px;width:80px;text-align: center;">
      <i class="fa fa-arrows-alt fa-lg"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">
          <el-button type="text" @click="fullScreen">全屏</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown class="el-dropdown-link" style="text-align: center;">
      <i class="el-icon-setting"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown style="width:150px;text-align: center;">
      <span class="el-dropdown-link">
        {{userinfo}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="modify">
          <el-button type="text" @click="dialogVisible = true">资料修改</el-button>
        </el-dropdown-item>
        <el-dropdown-item command="logout" divided>
          <el-button type="text" @click="logout">退出登录</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="资料修改" center :visible.sync="dialogVisible" width="40%">
      <el-form :model="editForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-input type="text" v-model="editForm.id" auto-complete="off" :disabled="true"></el-input>
        <el-input type="text" v-model="editForm.username" auto-complete="off" placeholder="新用户"></el-input>
        <el-input type="password" v-model="editForm.password" auto-complete="off" placeholder="新密码"></el-input>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //组件名称
  name: "headMask",
  //组件参数 接收来自父组件的数据
  props: {},
  data() {
    return {
      userinfo: "请登录",
      editForm: {
        id: "",
        username: "",
        password: ""
      },
      dialogVisible: false
    };
  },
  components: {},
  //组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在，可用于接口调取
  created() {
    this.userinfo = localStorage.getItem("username");
    this.editForm.id = localStorage.getItem("id");
  },
  //el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子，可用于接口调取
  mounted() {},
  //组件方法
  methods: {
    fullScreen() {
      if (this.isfullScreen) {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
        this.isfullScreen = false;
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        this.isfullScreen = true;
      }
    },

    submitForm() {
      if (this.editForm.username === "" || this.editForm.password === "") {
        this.$message({
          showClose: true,
          message: "用户名或密码不能为空",
          type: "error"
        });
        return false;
      } else {
        this.$axios({
          url: "/api/useredit",
          method: "post",
          params: {
            id: this.editForm.id,
            username: this.editForm.username,
            password: this.editForm.password
          }
        }).then(response => {
          if (response.data.status == 1) {
            this.dialogVisible = false;
            this.userinfo = this.editForm.username;
            localStorage.setItem("username", this.editForm.username);
            this.$message({
              type: "success",
              message: "修改成功!请重新登录！"
            });
            localStorage.removeItem("username");
            this.$router.push({ path: "/adminLogin" });
          } else if (response.data.status == -1) {
            this.$message({
              type: "error",
              message: "修改失败!"
            });
          }
        });
      }
    },
    logout() {
      this.$confirm("确定退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // localStorage.removeItem('username')
          this.$message({
            type: "success",
            message: "退出成功!",
            duration: "1000"
          });
          //  setTime(function(){
          localStorage.removeItem("username");
          this.$router.push({ path: "/adminLogin" });
          //  },1500)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
            duration: "1000"
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
.head {
  height: 50px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 50px;
  padding: 0 0;
}

.el-aside {
  color: #333;
}
.el-dropdown {
  width: 50px;
  height: 50px;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 20px;
}
i {
  font-size: 20px;
}

.el-form,
.el-input__inner {
  width: 100%;
  text-align: center;
  /* margin:auto; */
}
.el-dialog__body {
  padding: 10px;
}
</style>
