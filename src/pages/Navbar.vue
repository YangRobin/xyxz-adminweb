

<template>
   <nav>
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
export default class Navbar extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
    nav  {
      overflow: hidden;
      background-color:yellow;
      ul{
        li {
            float:left;
           margin-right: 20px;
           height: 30px;
           line-height: 30px;
           &:hover{
             color:blue
           }
        }
      }
    }
</style>


