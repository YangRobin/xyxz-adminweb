<template>
  <div class="nav">
    <a href="#">ROBINDESIGN</a>
    <div class="bfc">
      <ul>
        <li>
          <a href="#">登出</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Navbar extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
.nav {
  // position: fixed;
  // width: 100%;
  // top:0;
  color: #e6e6e6;
  height: 50px;
  line-height: 50px;
  background: #373d41;
 
  a {
    display: block;
    width: 200px;
    float: left;
    color: inherit;
    padding-left: 10px;
    box-sizing: border-box;
  }
  ul {
    float: right;
    text-align: right;
    padding-right: 20px;
    li {
      list-style: none;
    }
  }
}
</style>
