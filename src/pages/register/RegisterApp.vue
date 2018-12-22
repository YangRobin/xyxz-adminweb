
<template>
   <div>register

      <!-- <Navbar></Navbar> -->
   </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// @Component({
//   components: {

//   }
// })
export default class RegisterApp extends Vue {
  @Prop() private msg!: string;
}
</script>


<style lang="scss">
    body,div,ul{
     margin:0 auto;
   }

   .container{
     width:1200px;
   }
   li{
     list-style: none;
   }
</style>