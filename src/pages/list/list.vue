<template>
  <div class="box">
    <nav-header goback="1" headerTitle="列表页"></nav-header>
      <div class="list">
        <ul>
          <li v-for="(item,index) in lists.result" :key="index" @click="jump1(index)">
            <div class="user-logo">
              <img :src="item.data.header.icon" alt="">
            </div>
            <p>{{item.data.header.title}}</p>
          </li>
        </ul>
      </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavFooter from "@/components/NavFooter"
  import NavHeader from "@/components/NavHeader"
  export default {
    name: "Inner",
    data(){
      return{
        lists:null
      }
    },
    components:{
      NavFooter,
      NavHeader
    },
    mounted(){
      this.$http.get("https://api.apiopen.top/videoCategoryDetails?id=14").then(res => {
        this.lists = res.data
      })
    },
    methods:{
      jump1(e){
        this.$router.push({
          name:"Inner",
          params:{
            userId:e
          }
        })
      }
    }
  }
</script>

<style scoped>
.box{
  padding-bottom: 1.4rem;
}
.list{
  padding-top: 0.3rem;
}
.list li:first-child{
  border-top: none;
}
.list li{
  width: 100%;
  box-sizing: border-box;
  padding:0 0.2rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  white-space: normal;
  display: block;
  font-size: 0.28rem;
  line-height: 180%;
  word-break: break-all;
  border-bottom: 1px solid #cccc;
}
.list li:last-child{
  border: none;
}
.list li .user-logo{
  width: 0.6rem;
  height:0.6rem;
  margin-bottom: 0.12rem;
}
.list li .user-logo img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
