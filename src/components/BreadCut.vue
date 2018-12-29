<template>
  <div class="row bread-cut">
    <span>你当前的位置:
      <br>
    </span>
    <ul>
      <li v-for="i in paths">>{{i.name}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import menu from "../menu";
import { mount } from "@vue/test-utils";
@Component
export default class BreadCut extends Vue {
  @Prop() private msg!: string;
  paths = [menu[0]];
  @Watch("$route")
  onPathChanged(val: any, oldVal: any) {
    this.paths = [];
    const routes = val.fullPath.match(/\/[^\/]*/gim).filter((i: Object) => {
      return i;
    });
    let temp = [];
    for (let j = 0; j < routes.length; j++) {
      if (j > 0) {
        temp.push(routes[j - 1] + routes[j]);
      } else {
        temp.push(routes[j]);
      }
    }
    temp.forEach((item: any) => {
      this.getName(menu, item);
    });
  }
  getName(menu: any, path: string) {
    return menu.find((i: any) => {
      if (i.path === path) {
        this.paths.push(i);
      } else {
        if (i.children) {
          this.getName(i.children, path);
        }
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.bread-cut {
  padding-left:10px;
  color: #7188fc;
  font-size: 13px;
  border-bottom: 1px solid #f6f6f6;
  background: white;
  border-left: 2px solid #65c465;
  height: 30px;
  line-height: 30px;
  font-weight: 500;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
  ul{
      overflow: hidden;
      height: 30px;
      background: #c028c01a;
      color: #4e5f5b;
      min-width: 60px;
      border-radius: 3px;
     li {
      float: left;
      list-style: none;
      margin-right: 10px;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>


