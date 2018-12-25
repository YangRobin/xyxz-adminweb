<template>
  <div id="app">
    <Navbar/>
    <main class="bfc">
      <div class="left fl" :class="subMenuVisible ? 'sub-menu-show':'sub-menu-hide'">
        <LeftMenu v-on:toggle-sub="toggleSubMenu"/>
      </div>
      <div
        class="right bfc"
        :class="subMenuVisible ?'m-left-show': 'm-left-hide'"
        style="height:500px;"
      >
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
  subMenuVisible: boolean = false;
  private toggleSubMenu(e: any) {
    this.subMenuVisible = !this.subMenuVisible;
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5c7ffc;
  position: relative;
  font-size: 14px;
  height: 100%;
  background: #f5f5f5;
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
li {
  list-style: none;
}
//
.left {
  width: 200px;
  min-height: 500px;
  height: 100%;

  // position: fixed;
}

main {
  height: 100%;
}
//子菜单显示的样式
.sub-menu-show {
  width: 400px !important;
}
.sub-menu-hide {
  width: 200px !important;
}
.m-left-show {
  margin-left: 405px !important;
}
.m-left-hide {
  margin-left: 210px !important;

  margin-top: 10px;
  padding: 8px;
  border-radius: 3px 3px 0 0;
}
.right {
  margin-left: 205px;
  margin-right: 5px;
}
.active-path {
  border-right: 3px solid #2a23ad;
  background: #f9f9f9;
}
</style>
