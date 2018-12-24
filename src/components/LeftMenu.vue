<template>
  <div class="left-menu">
    <div class="main-menu">
      <div class="avator"></div>
      <ul class="links">
        <li  v-for="i in menu">
            <router-link :to="i.path"> <i class="iconfont icon-check-circle" ></i>{{i.name}}</router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="sub-menu" v-show="subMenuVisible">
      <span @click="closeSub()"> <i class="icon-guanji iconfont"></i> </span>
      <ul>
        <li  class="active-path" v-for="i in subMenu">
          <router-link :to="i.path">{{i.name}}</router-link>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import menu from "../menu";
@Component
export default class LeftMenu extends Vue {
  @Prop() private msg!: string;
  subMenuVisible = false;
  name: string = "";
  menu: object = {};
  subMenu: object = {};
  mounted() {
    this.menu = menu;
  }
  // public toggle(name: string) {
  //   //判断点击的路由 是否是当前路由
  //   if (this.name === name) {
  //     this.subMenuVisible = !this.subMenuVisible;
  //     this.toggleSub(name);
  //     const currentMenu = menu.find(i => {
  //       return i.name === name;
  //     });
  //     this.subMenu = currentMenu ? currentMenu.children : {};
  //   } else {
  //     //
  //     const currentMenu = menu.find(i => {
  //       return i.name === name;
  //     });
  //     this.subMenu = currentMenu ? currentMenu.children : {};
  //     if (this.subMenuVisible) {
  //       this.name = name;
  //     } else {
  //       this.toggleSub(name);
  //       this.subMenuVisible = true;
  //     }
  //   }
  // }
  // public closeSub() {
  //   this.subMenuVisible = false;
  //   this.toggleSub(this.name);
  // }
  // @Emit()
  // private toggleSub(e: any) {
  //   console.info(e);
  // }
}
</script>
<style lang="scss" scoped>
.left-menu {
  color: #4e5f5b;
  display: flex;
  height: 100%;
  .main-menu {
   
    width: 230px;
    background-color: #ffffff;
    height: 100%;
    .avator {
      margin-top: 10px;
      width: 50px;
      height: 50px;
      background: #0a1213;
      border-radius: 50%;
      text-align: center;
    }
    ul {
      margin-top: 10px;
      li {
        height: 26px;
        line-height: 26px;
        a {
          color: #5c7ffc;
        }
      }
    }
  }
  .sub-menu {
     position: relative;
    flex: 1 1 auto;
    width: 60%;
    background-color: #fcfcfd;
    span {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    ul {
      margin-top: 30px;
      li {
        height: 26px;
        line-height: 26px;
        a {
          color: #5c7ffc;
        }
      }
    }
  }
}
</style>

