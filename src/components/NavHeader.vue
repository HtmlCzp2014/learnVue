<template>
    <div class="header">
        <div class="container">
          <div class="back" v-if="goback" @click="$router.go(-1)"> < </div>
          <div class="title">
            {{headerTitle}}
          </div>
        </div>
    </div>
</template>
<script>
  export default {
    name:"NavHeader",
    props:[
      'headerTitle',
      'goback'
    ]
  }
</script>
<style scoped>
  .header{
    width: 100%;
    box-sizing: border-box;
    padding:0 0.2rem;
    position: relative;
    text-align: center;
  }
.back{
  font-family: \5B8B\4F53;
  font-weight: bold;
  position: absolute;
}
</style>
