<template>
   <footer>
      footer
   </footer>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
   footer{
      height: 30px;
      background-color: rgb(71, 67, 52);
      color:white;
      // position: fixed;
      // width: 100%;
      // bottom: 0;
     margin-top:500px;
   }
</style>
