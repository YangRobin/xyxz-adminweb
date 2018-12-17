<template>
  <div>
     <Navbar></Navbar>
     <div>
       <LoginForm></LoginForm>
     </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from '../../components/Navbar.vue';
import LoginForm from '../../components/LoginForm.vue';

@Component({
  components: {
    Navbar,
    LoginForm,
  },
})
export default class LoginApp extends Vue {
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
