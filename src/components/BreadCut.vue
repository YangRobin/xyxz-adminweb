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
  padding: 5px 0 10px 10px;
  color: #7188fc;
  font-size: 13px;
  border-bottom: 1px solid #f6f6f6;
  background: white;
  border-left: 5px solid #65c465;
  height: 30px;
  font-weight: 500;
  width: 50%;
  li {
    float: left;
    list-style: none;
    margin-right: 10px;
    a {
      text-decoration: none;
    }
  }
}
</style>


