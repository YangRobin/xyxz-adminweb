<template>
   <nav  class="footer">
     <ul class="container">
       <li>home</li>
       <li>home</li>
       <li>home</li>
       <li>home</li>
     </ul>
   </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FooterBar extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
    nav.footer  {
      overflow: hidden;
      background-color:yellow;
      position: fixed;
      bottom:0;
      width: 100%;
      ul{
        li {
            float:left;
           margin-right: 20px;
           height: 30px;
           line-height: 30px;
        }
      }
    }
</style>


