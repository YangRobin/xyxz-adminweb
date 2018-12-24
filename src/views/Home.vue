<template>
  <div class="home-config">
    <h3>首页配置</h3>
    <div class="test">
      案例1
    </div>
     <div class="test1">
      案例2
    </div>
  </div>
</template>
  <script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home-config {
  h3 {
    padding: 5px;
    margin: 5px 0;
    background-color: #fff;
  }
  .test{
    width:50%;
    border-left:2px solid plum;
    height: 100px;
    background-color: #fff;
  }
  .test1{
    margin-top:5px;
    width:50%;
    border-top:2px solid blue;
    height: 100px;
    background-color: #fff;
  }
}
</style>

