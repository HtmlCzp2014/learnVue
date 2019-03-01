<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import "@/assets/css/style.css"
export default {
  name: 'App',
  components:{
    NavHeader,
    NavFooter
  },
  data(){
    return {
      num:10,
      theNum:0,
      liArr:[1,2,3,4,5,6,7,8,9,10],
      resource:null
    }
  },
  filters: {

  },
  mounted: function(){
    this.$http.get("https://api.apiopen.top/likePoetry",{
      params:{
        name:"李白"
      }
    }).then(res => {
      this.resource = res.data.result
    },error => {
      console.log(error)
    })
  },
  computed:{

  },
  watch:{

  },
  methods: {
    addNum(e){
      this.num++;
      this.theNum = e;
      console.log("123".substr(0))
    },
    decNum(){
      this.num--
    },
    jumpTo(e){
      this.$router.push({
        name: "Route",
        params:{
          id: e
        }
      })
    }
  }
}
</script>

<style>
  html{
    overflow-x: hidden;
  }
  body{
    overflow-x: hidden;
    width: 100%;
  }
.tab-nav{
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding:0 8px;
  line-height: 40px;
  font-size: 0;
  display: flex;
  justify-content: space-around;
}
.tab-nav a{
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  color:#333;
}
ul{
  padding: 0;
}
  li{
    list-style: none;
    line-height: 50px;
    width: 50%;
    box-sizing: border-box;
    border-bottom: none;
    cursor: pointer;
    transition: all 0.5s;
  }

li:last-child{
  border-bottom: 1px solid #ccc;
}
</style>
