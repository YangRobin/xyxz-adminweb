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
  color: #5c7ffc;
  height: 50px;
  line-height: 50px;
  background: white;
  a {
    display: block;
    width: 200px;
    float: left;
    color: inherit;
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
