<!--
  作者：yufeng
  邮箱：yfeng12345@126.com
  时间：2020年05月03日 13:36:35
  版本：v1.0
  修改人员：YF
-->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in articlesList" :key="index">
        <div @click="details(item._id)">
          <p class="title-box">
            <span class="tag" :style="{'background-color': (item.tag=='原创' ? '#a8c97f':item.tag=='转载' ? '#c8c2be':item.tag=='翻译' ? '#a59aca':'#9999')}">{{item.tag}}</span>
            <span class="title">{{item.title}}</span>
          </p>
          <p class="text">{{item.content.text}}</p>
        </div>
        <p>
          <span class="updatatime">{{item.updateTime}}</span>
          <span class="floatright"><i class="el-icon-view"></i> 999</span>
          <span class="floatright"><i class="el-icon-chat-line-square"> 888</i></span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articlesList: []
    };
  },
  created() {
    this.$axios.get("/api/articleslist").then(res => {
      if (res.data.status == 1) {
        console.log(res);
        this.articlesList = res.data.data;
      }
    });
  },
  methods: {
    details(id) {
      this.$router.push({
        path: "/admin/articleDetails",
        query: { id: id }
      });

    }
  }
};
</script> 

<style scoped>
.title-box {
  padding-bottom: 5px;
}
.title-box .tag {
  color: #e33e33;
  background-color: rgba(227, 62, 51, 0.1);
  padding: 0 5px;
}
.title-box .title {
  color: #222226;
  font-weight: 500;
}
.text {
  font-size: 14px;
  line-height: 25px;
  white-space: normal;
  color: #999aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.updatatime {
  color: #5f6471;
  font-size: 14px;
}
.floatright {
  float:right;
  margin: 0 6px;
  font-size: 14px;
  color: #5f6471;
}
li {
  padding: 15px 10px;
  border-bottom: 1px solid #999;
  cursor: pointer;
}
li:hover{
  background-color: #F3F4F6;
}
li:hover .title {
  color: #5893c2;
}
</style>
