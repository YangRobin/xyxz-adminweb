<template>
  <div class="row">
    <span>你当前的位置</span>
    <ul class="bread-cut">
      <li v-for="i in paths">/{{i.name}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import menu from "../menu";
import { mount } from '@vue/test-utils';
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
        if (i.subs) {
          this.getName(i.subs, path);
        }
      }
    });
  }
}
</script>
<style lang="scss" scoped>
ul.bread-cut {
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


