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
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import Swiper from 'swiper'
    export default {
        name: "index",
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
      }
    }
</script>

<style scoped>
.index .swiper-slide img{
  width: 100%;
  height: 4rem;
}

</style>
