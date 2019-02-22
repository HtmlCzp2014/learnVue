<template>
  <div class="footer">
      <section v-bind:class="[this.$route.path.indexOf('home') !== -1 ? 'active':'']" @click="jump('/home')">
        <i class="iconfont icon-shouye"></i>
        首页
      </section>
      <section v-bind:class="[this.$route.path.indexOf('list') !== -1 ? 'active':'']" @click="jump('/list')">
        <i class="iconfont icon-list-1-copy"></i>
        列表
      </section>
  </div>
</template>

<script>
    export default {
        name: "NavFooter",
      methods: {
          jump(e){
            this.$router.push({
              path:e
            })
          }
      }
    }
</script>

<style scoped>

.footer .active{
  color:#f00;
}
  .footer{
    position: fixed;
    border-top: 1px solid #ccc;
    bottom: 0;
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    background: #fff;
  }
.footer section{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer i{
  display: block;
  text-align: center;
  margin-bottom: 0.08rem;
}
</style>
