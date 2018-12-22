<template>
  <div id="app">
    <Navbar/>
    <main class="bfc">
      <div class="left fl" :class="subMenuVisible ? 'sub-menu-show':'sub-menu-hide'">
        <LeftMenu v-on:toggle-sub="toggleSubMenu"/>
      </div>
      <div class="right bfc" :class="subMenuVisible ?'m-left-show': 'm-left-hide'" style="height:500px;">
        <BreadCut/>
        <router-view/>
        <Footer/>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import BreadCut from "@/components/BreadCut.vue";
@Component({
  components: {
    Navbar,
    Footer,
    LeftMenu,
    BreadCut
  }
})
export default class App extends Vue {
  //子菜单显示开关
  subMenuVisible:boolean=false;
  private toggleSubMenu (e: any) {
    this.subMenuVisible=!this.subMenuVisible;
    console.log(this.subMenuVisible)
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
//
.left {
  width:200px;
  // background-color:blue;
  height: 100%;
  position: fixed;
}
//子菜单显示的样式
.sub-menu-show{
  width:400px !important;
}
.sub-menu-hide{
   width:200px !important;
}
.m-left-show{
  margin-left:400px !important;
}
.m-left-hide{
  margin-left:200px !important;
}
.right {
  margin-left: 200px;
}
</style>
