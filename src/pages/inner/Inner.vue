<template>
  <div>
      <nav-header goback="1" headerTitle="内容页"></nav-header>
        {{this.$route.params.userId}}
  </div>
</template>

<script>
  import NavFooter from "@/components/NavFooter"
  import NavHeader from "@/components/NavHeader"
    export default {
        name: "Inner",
      components:{
          NavFooter,
        NavHeader
      }
    }
</script>

<style scoped>

</style>
