<template>
  <ul class="bread-cut bfc">
    <li>
      <a href="#">home/</a>
    </li>
    <li>
      <a href="#">home/</a>
    </li>
    <li>
      <a href="#">home/</a>
    </li>
    <li>
      <a href="#">home/</a>
    </li>
    <li>
      <a href="#">home/</a>
    </li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class BreadCut extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
ul.bread-cut {
  li {
    float: left;
    list-style: none;
    margin-right: 10px;
    a{
      text-decoration: none;
    }
  }
}
</style>


