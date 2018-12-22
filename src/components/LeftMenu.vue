<template>
  <div class="left-menu">
    <div class="main-menu">
      <div class="avator"></div>
      <ul class="links">
        <li v-for="i in menu" @click="toggle(i.name)">
          <router-link :to="i.path">{{i.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="sub-menu" v-show="subMenuVisible">
      <button @click="closeSub()">close sub</button>
      <ul>
        <li v-for="i in subMenu" @click="toggle(i.name)">
          <router-link :to="i.path">{{i.name}}</router-link>
        </li>
      </ul>
    </div>
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
    menu.forEach(i => {
      console.log(i);
    });
  }
  public toggle(name: string) {
    //判断点击的路由 是否是当前路由
    if (this.name === name) {
      this.subMenuVisible = !this.subMenuVisible;
      this.toggleSub(name);
      const currentMenu = menu.find(i => {
        return i.name === name;
      });
      this.subMenu = currentMenu ? currentMenu.subs : {};
    } else {
      //
      const currentMenu = menu.find(i => {
        return i.name === name;
      });
      this.subMenu = currentMenu ? currentMenu.subs : {};
      if (this.subMenuVisible) {
        this.name = name;
      } else {
        this.toggleSub(name);
        this.subMenuVisible = true;
      }
    }
  }
  public closeSub() {
    this.subMenuVisible = false;
    this.toggleSub(this.name);
  }
  @Emit()
  private toggleSub(e: any) {
    console.info(e);
  }
}
</script>
<style lang="scss" scoped>
.left-menu {
  color: white;
  display: flex;
  // justify-content: stretch;
  height: 100%;
  .main-menu {
    width: 230px;
    background-color: #222430;
    .avator {
      margin-top: 10px;
      width: 50px;
      height: 50px;
      background: #29ebff;
      border-radius: 50%;
      text-align: center;
    }
  }
  .sub-menu {
    flex: 1 1 auto;
    width: 60%;
    background-color: gray;
  }
}
</style>

