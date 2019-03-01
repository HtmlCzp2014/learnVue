<template>
    <div class="index">
      <nav-header headerTitle="首页"></nav-header>
      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/images/Bg.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/Bg1.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="news">
        <h3>新闻列表</h3>
        <ul>
          <li class="wow slideInUp"  v-for="(item,index) in newsList.result" :key="index">
            <a >
              <img :src="'/static/img/'+item.imgUrl" alt="">
            </a>
          </li>
        </ul>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  // @click="toNewsInner(index) "
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import Swiper from 'swiper'
  import axios from 'axios'
  import WOW from "wowjs"
  import $ from '../../assets/jquery-vendor'
    export default {
        name: "index",
      watch:{
      },
      data(){
          return{
            newsList:[]
          }
      },
        components:{
          NavFooter,
          NavHeader
      },
      mounted: function () {
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          paginationClickable: true,
          autoplay:{
            delay:2000,
            disableOnInteraction: false // 滑动后自动可滑动
          },
          speed:700,
          loop: true,
          autoplayDisableOnInteraction : false,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          on:{
            slideChangeTransitionStart:function () {

            },
            slideChangeTransitionEnd:function () {

            }
          }
        });
        this. getNewsList()
      },
      methods:{
          getNewsList(){
            axios.get("/api/news").then( res => {
              let data = res.data
              this.newsList = data.data
              console.log(res)
              new WOW.WOW({live:false}).init()

            })
          },
        toNewsInner(e){
            this.$router.push({
              name:"Inner",
              params:{
                userId:e
              }
            })
        }
      }
    }
    $(function () {
      $(".news ul li").click(function () {
        console.log($(this))
        $(this).addClass("active").siblings().removeClass("active")
      })
    })
</script>

<style scoped>
  body,html{
    width: 100%;
    overflow-x: hidden;
  }
  .index{
    padding-bottom: 1.6rem;
  }
.index .swiper-slide img{
  width: 100%;
  height: 4rem;
}
.news{
  padding-top: 0.2rem;
}
.news h3{
  text-align: center;
  line-height: 180%;
}
.news ul{
  padding-top: 0.2rem;
}
.news ul li{
  width: 100%;
  line-height: normal;
  margin-bottom: 0.2rem;
  transition: all 0.5s;
  position: relative;
}
.news ul li.active{
  transform: translate3d(50%,0,0);
}
.news ul li a{
  display: block;
  font-size: 0;
}
.news ul li img{
  width: 100%;
}
</style>
