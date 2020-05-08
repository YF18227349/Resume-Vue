<template>
  <div class="play">
    <div v-if="showPlayerMask">
      <div class="songlist">
        <div class="title">
          <div></div>
          <h4>今日歌单</h4>
        </div>
        <ul>
          <li class="title">
            <div>
              <span style="font-size:14px;color:#000" class="albumname">歌曲标题</span>
              <p>
                <span style="font-size:14px;color:#000" class="singer">歌手</span>
              </p>
            </div>
          </li>
          <li v-for="(item,index) in songList10" :key="index" @click="clickPlay(item)">
            <div>
              <span class="albumname">{{item.name}}</span>
              <p>
                <span class="singer" v-for="(i,ind) in (item.artists)" :key="ind">{{i.name}}</span>
              </p>
            </div>
          </li>
        </ul>
        <div class="block">
          <el-pagination
            small
            layout="prev, pager, next"
            @prev-click="prevClick"
            @next-click="nextcClick"
            @current-change="handleCurrentChange"
            :total="songList200.length"
          ></el-pagination>
        </div>
      </div>
      <br />
      <div class="btns">
        <audio
          ref="audio"
          autoplay
          class="audio"
          style="width: 90%;text-align: center;"
          :src="songUrl"
          controls
        ></audio>
        <!-- <div class="icont-box">
        <div>
          <i class="el-icon-d-arrow-left"></i>
        </div>
        <i
          style="font-size: 40px;"
          :class="isPaused ? 'el-icon-video-pause' :'el-icon-video-play'"
        ></i>
        <div>
          <i class="el-icon-d-arrow-right"></i>
        </div> 
        </div>-->
      </div>
    </div>
    <div class="show" v-else>音乐功能暂时无法使用</div>
  </div>
</template>

<script>
export default {
  name: "playerMask",
  data() {
    return {
      songUrl: "",
      isPaused: false,
      songList200: [],
      songList10: [],
      start: 0,
      end: 10,
      showPlayerMask: false
    };
  },
  created() {},
  mounted() {
    this.$http
      .get("/detail", {
        params: {
          id: "3778678"
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data.result.tracks);
        if(res.data.result.tracks != []){
          this.showPlayerMask = true
        }else {
          this.showPlayerMask = false
        }
        this.songList200 = res.data.result.tracks;
        this.songList10 = this.songList200.slice(this.start, 10);
      });
  },
  methods: {
    prevClick() {
      console.log("prevClick");
      this.songList10 = this.songList200.slice(
        (this.start -= 10),
        (this.end -= 10)
      );
      console.log(this.start, this.end);
      //   console.log(this.songList10);
    },
    nextcClick() {
      this.songList10 = this.songList200.slice(
        (this.start += 10),
        (this.end += 10)
      );
      console.log(this.start, this.end);
      // console.log(this.songList10);
    },
    handleCurrentChange(e) {
      this.songList10 = this.songList200.slice(e * 10 - 10, e * 10);
      console.log(e * 10 - 10, e * 10);
    },
    clickPlay(e) {
      this.isPaused = false;
      var id = e.id;
      this.$http
        .get("https://api.imjad.cn/cloudmusic", {
          params: {
            id: id,
            type: "song"
          }
        })
        .then(res => {
          console.log(res.data.data[0].url);
          this.songUrl = res.data.data[0].url;
          var audio = this.$refs.audio;
          if (audio.paused) {
            // audio.play()
            this.isPaused = true;
          } else {
            // audio.pause()
            this.isPaused = false;
          }
        });
    }
  }
};
</script>

<style scoped>
.play {
  width: 100%;
  background: #fff;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 12px;
}
.songlist ul li {
  height: 20px;
  line-height: 20px;
  margin-bottom: 5px;
  background: #eaf4fc; /* fallback for old browsers */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 15px;
  cursor: pointer;
}
.songlist > .title {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 0;
  margin: 0 5px;
  font-size: 16px;
}
.songlist > .title > div {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #00a381;
  margin-right: 5px;
}
.songlist ul .title {
  height: 30px;
  line-height: 30px;
  background: #8b968d;
}
.songlist ul li .albumname {
  /* width: 300px; */
  color: #666;
  /* font-size: 14px; */
  float: left;
  /* font-weight: normal; */
  margin-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.songlist ul li .singer {
  color: #666;
  font-size: 12px;
  float: left;
}
.songlist ul li > div {
  display: flex;
  justify-content: space-between;
}

.block el-pagination {
  width: 100%;
  margin: auto;
}
.play .btns {
  width: 100%;
  /* height: 150px; */
  text-align: center;
}
.play .btns .icont-box {
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  padding: 0 30px;
}
.play .btns .icont-box .icont {
  font-size: 12px;
}
.play .btns .icont-box > div {
  width: 36px;
  height: 36px;
  border: 3px solid #6d6d6d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}
.audio:focus {
  outline: none;
}
.show {
  text-align: center;
}
</style>