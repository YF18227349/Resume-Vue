<template>
  <div class="addArticle">
    <el-form ref="article" :inline="true" :model="article" label-width="80px">
      <el-form-item label="文章标题">
        <el-input class="title" v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章类型">
        <el-autocomplete
          class="inline-input"
          v-model="article.tag"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-switch v-model="article.top"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button class="subBtn" type="primary" @click="submitArticle">发布</el-button>
        <!-- <el-button class="subBtn" type="primary" @click="getContent">获取内容</el-button> -->
      </el-form-item>
    </el-form>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "addArticle",
  data() {
    return {
      article: {
        title: "",
        tag: "",
        top: true,
        content: {
          html: "",
          text: ""
        },
        author: ""
      },
      initData: "",
      restaurants: []
    };
  },
  created() {
    this.article.author = localStorage.getItem("username");
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "原创" },
        { value: "转载" },
        { value: "翻译" },
        { value: "其他" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },

    getContent: function() {
      alert(this.article.content.html);
    },
    submitArticle() {
      console.log(this.article);
      this.$axios
        .post("/api/addArticle", {
          data: this.article
        })
        .then(response => {
          if (response.data.status == 1) {
            this.$router.push({ path: "/admin/articlePage" });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    let that = this;
    this.restaurants = this.loadAll();
    var editor = new E(this.$refs.editor);
    console.log(editor)
    editor.customConfig.onchange = html => {
      that.article.content.html = html;
      that.article.content.text = html.replace(/<[^>]*>|/g,"")
    };
    // console
    editor.customConfig.uploadImgServer = "/editor/uploadImg"; // 上传图片到服务器
    editor.customConfig.uploadImgHooks = {
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      fail: function(xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      error: function(xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      timeout: function(xhr, editor) {
        // 图片上传超时时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      }
    };
    editor.create();
  }
};
</script>

<style scoped>
.title {
  width: 1000px;
}

.subBtn {
  width: 100px;
  margin: 0 auto;
}
</style>
<style>
.el-autocomplete-suggestion {
  z-index: 10010 !important;
}

.w-e-text-container {
  height: 600px !important;
}
</style>
