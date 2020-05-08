<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月03日 13:30:23
  版本：v1.0
  修改人员：YF
-->
<template>
  <div class="aside">
    <!-- <h1 :style="{width:titleWidth+'px'}">Management System</h1> -->
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false"><i class="el-icon-s-unfold"></i></el-radio-button>
    <el-radio-button :label="true"><i class="el-icon-s-fold"></i></el-radio-button>-->
    <div class="title" :style="{width:titleWidth+'px'}">
      <h5>{{titleText}}</h5>
      <span class="hideAside" @click="collapse">
        <i class="fa fa-indent fa-lg"></i>
      </span>
    </div>
    <!-- </el-radio-group> -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/admin/adminHome">
        <i class="el-icon-odometer"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="/admin/tableUpload">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">上传</span>
        </template>
        <el-menu-item index="/admin/tableUpload">
          <template slot="title">
            <i class="el-icon-upload2"></i>
            <span slot="title">文件上传</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/addArticle">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/admin/articlePage">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">推文列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticle">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-MD</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticleEditor">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-RTF</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/admin/tableUpload">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">上传</span>
        </template>
        <el-menu-item index="/admin/tableUpload">
          <template slot="title">
            <i class="el-icon-upload2"></i>
            <span slot="title">文件上传</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/addArticle">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/admin/articlePage">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">推文列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticle">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-MD</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticleEditor">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-RTF</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/tableUpload">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">上传</span>
        </template>
        <el-menu-item index="/admin/tableUpload">
          <template slot="title">
            <i class="el-icon-upload2"></i>
            <span slot="title">文件上传</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/addArticle">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/admin/articlePage">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">推文列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticle">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-MD</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticleEditor">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-RTF</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/tableUpload">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">上传</span>
        </template>
        <el-menu-item index="/admin/tableUpload">
          <template slot="title">
            <i class="el-icon-upload2"></i>
            <span slot="title">文件上传</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/addArticle">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/admin/articlePage">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">推文列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticle">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-MD</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticleEditor">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-RTF</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/tableUpload">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">上传</span>
        </template>
        <el-menu-item index="/admin/tableUpload">
          <template slot="title">
            <i class="el-icon-upload2"></i>
            <span slot="title">文件上传</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/addArticle">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/admin/articlePage">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">推文列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticle">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-MD</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticleEditor">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-RTF</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/tableUpload">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">上传</span>
        </template>
        <el-menu-item index="/admin/tableUpload">
          <template slot="title">
            <i class="el-icon-upload2"></i>
            <span slot="title">文件上传</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/addArticle">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/admin/articlePage">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">推文列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticle">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-MD</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/admin/addArticleEditor">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">推文-RTF</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  //组件名称
  name: "asideMask",
  //组件参数 接收来自父组件的数据
  props: {},
  data() {
    return {
      isCollapse: false,
      titleText: "Management System",
      titleWidth: 201
    };
  },
  //组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在，可用于接口调取
  created() {},
  //el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子，可用于接口调取
  mounted() {},
  //组件方法
  methods: {
    collapse() {
      // this.$store.dispatch('collapse')
      if (this.isCollapse) {
        this.isCollapse = false;
        this.titleWidth = 201;
        this.titleText = "Management System";
      } else {
        this.isCollapse = true;
        this.titleWidth = 64;
        this.titleText = "MS";
      }
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {}
};
</script> 

<style scoped>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
.el-menu-vertical-demo {
  height: 100%;
  overflow: auto;
}
h1 {
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: rgba(255, 255, 255, 0.7);
}

.title {
  height: 50px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  align-items: center;
  color: #fff;
  background-color: #999;
  /* padding: 0 10px; */
  margin: 0;
}

.el-aside {
  width: 100px;
  height: 100%;
  color: #333;
  background-color: rgb(3, 21, 42);
}
.aside {
  height: 100%;
  overflow: hidden;
}
.el-menu-vertical-demo {
  height: 100%;
  z-index: 999;
  overflow-y: scroll;
  overflow-x: hidden;
}
.el-menu-vertical-demo::-webkit-scrollbar {
  display: none;
}
</style>
