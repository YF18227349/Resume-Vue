<!--  -->
<template>
  <div class="footer">
    <div class="contact">
      <p>Copyright © 2020 言棠&emsp;陕ICP备20005406号</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */ 
.footer {
    width: 100%;
    /* height: 60px; */
    background: #2b5876;  /* fallback for old browsers */      
    background: -webkit-linear-gradient(to right, rgb(78, 67, 118), rgb(43, 88, 118));  /* Chrome 10-25, Safari 5.1-6 */      
    background: linear-gradient(to right, rgb(78, 67, 118), rgb(43, 88, 118)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */      
    /* margin:0 0 50px;      */
}
.footer .contact {
    text-align: center;
    line-height: 50px;
    font-size: 12px;
    /* padding: 10px 0; */
}
</style>