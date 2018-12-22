<template>
    <nav>
      这是头
    </nav>
</template>
<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Navbar extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
  nav{
    height: 50px;
    background: blue;
  }
</style>
