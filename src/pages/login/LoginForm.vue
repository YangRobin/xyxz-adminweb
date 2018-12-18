
<template>
   <div class="login-form">
     <h3>欢迎登陆面对面</h3>

      <div class="form-item">
        <label for="">name</label>
      <div>
        <input type="text">
      </div>
     </div>
      <div class="form-item">
        <label for="">password</label>
      <div>
        <input type="text">
      </div>
     </div>
     <div class="form-item">
       <button>登陆</button>
       <span>注册</span>
     </div>
   </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
  .login-form{
    margin-top:30px;
    width:300px;
    border:1px solid red;
    text-align: center;
    padding:20px 0;
    .form-item{
      margin-bottom: 10px;
    }
  }
</style>
