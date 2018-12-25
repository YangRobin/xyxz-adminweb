<template>
  <div class="left-menu">
    <div class="main-menu">
      <div class="avator"></div>
      <div class="pers_name">
          杨国凤薛文倩
          <br>
          <b>创办于2018/12/25</b>
      </div>
      <ul class="links">
        <li  v-for="i in menu">
            <router-link :to="i.path">
               <i :class="i.icon"></i>
               {{i.name}}
            </router-link>
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
  box-shadow: 0px 0px 12px 0 rgba(7,17,27,.36);
  .main-menu {
   color: #e6e6e6;
    width: 230px;
    background-color: #42485b;
    height: 100%;
    padding: 15px 0px;
    .avator {
      margin: 0 auto;
      width: 50px;
      height: 50px;
      background: #0a1213;
      border-radius: 50%;
      text-align: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .pers_name{
      line-height: 20px;
      margin: 12px 0;
      text-align: center;
      font-weight: 900;
      font-size: 18px;
      color: #00b7d3;
      b{
        color: #e6e6e6;
        font-size: 9px;
      }
    }
    .links {
      border-top: 1px solid #f5f5f7;
      padding: 8px 0;  
      margin-top: 10px;
      li {
        position: relative;
        display: block;
        a {
          display: block;
          color: #e6e6e6;
          padding: 14px 20px 14px 25px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 700;
          &:hover{ 
            background-color: rgba(0,0,0,.09)!important;
            color: #00b7d3; 
            border-left: 3px solid #00b7d3;
            transition: all .2s;
            -webkit-transition:all .2s;
            }
          i{
            margin-right: 6px;
          }
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

