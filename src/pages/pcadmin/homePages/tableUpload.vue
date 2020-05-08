<template>
  <div>
    <el-form>
      <el-form-item label="名称">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <!-- <el-form-item label="图片">
        <input type="file" ref="picurl" />
      </el-form-item>-->
      <el-form-item label="图片">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileList"
          list-type="picture"
          :limit='1'
        >
          <el-button size="mini" type="success" plain>
            选择图片
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="金额">
        <el-input v-model="formData.amount"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="formData.condition"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sure">确定</el-button>
        <el-button type="danger" native-type="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        title: "",
        amount: "",
        condition: ""
      },
      fileList: [],
      // isStop:true
    };
  },
  created() {
    // if(this.fileList.length>1){
    //   this.isStop = true
    // }else {
    //   this.isStop = false
    // }
  },
  methods: {
    sure() {
      let form = new FormData();
      for (var key in this.formData) {
        form.append(key, this.formData[key]);
      }
      form.append(
        "picurl",
        this.$refs.upload.$refs["upload-inner"].fileList[0].raw
      );
      // console.log(this.$refs.upload.$refs['upload-inner'].fileList[0].raw)
      // console.log(this.$refs.picurl.files[0])

      this.$axios.post("/api/tablesadd", form).then(res => {
        if(res.data.status == 1) {
        this.$router.push({ path: "/admin/adminHome" });
        }
      });
    }
  }
};
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>