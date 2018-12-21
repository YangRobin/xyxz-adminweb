
<template>
   <div class="login-form">
     <div class="form_l">
        <h3>
          <img src="../../assets/logo2.png" alt="">
          System  logo
        </h3>
        <div class="form-title">
            <h2>Welcome to login system</h2>
            Sign in byentering the infomation below
        </div>
        <div class="form-item">
          <label for="">图标</label>
          <input type="text" placeholder="Designer">
        </div>
        <div class="form-item">
          <label for="">密码</label>
          <input type="text" name="passworld" placeholder="......">
        </div>
        <p class="form-bj">
          <input type="checkbox"> rember me
          <a href="javascript:;">Forget passworld</a>
        </p>
      <div class="form-btn">
        <button class="login">Login</button>
        <button class="out">Sign up</button>
        <a href="">sdf</a>
          <!-- <el-button type="primary">主要按钮</el-button> -->
      </div>
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
    margin:20px auto;
    margin-top: 100px;
    width:800px;
    height: 400px;
    box-shadow: 0px 0px 12px 0 rgba(7,17,27,.36);
    // border:1px solid red;
    text-align: center;
    // padding:20px 0;
    border-radius: 10px;
    .form_l{
       width: 290px;
       margin: 0px 25px;
       float: left;
       h3{
         color: #4b5963;
         text-align: left;
         img{
              width: 30px;
              height: 31px;
              position: relative;
              top: 10px;
         }
       }
      .form-title{
        font-size: 12px;
        color: #ccc;
        margin-top: 40px;
        margin-bottom: 30px;
        text-align: left;
        h2{
          margin: 0;
          color: #4b5963;
          font-size: 22px;
        }
      }
      .form-bj{
        text-align: left;
        a{
          color: #333;
          float: right;
          text-decoration: none;
          &:hover{
            color: rgb(119, 33, 217)
          }
        }
      }
      .form-btn{
        overflow: hidden;
        margin-top: 15px;
        .login{
          background-color: rgb(119, 33, 217);
          color: #fff;
          width: 75%;
          float: left;
          border: none;
          padding: 8px 15px;
          text-align: center;
          border-radius: 16px;
          outline: none; 
        }
        .out{
          background: transparent;
          border: none;
          outline: none;
        }
      }
      .form-item{
         margin: 15px 0;
         background-color: rgb(243, 242, 255);
         padding: 4px 15px;
         border-radius: 32px;
         overflow: hidden;
         line-height: 28px;
         label{
           width: 40px;
           float: left;
         }
         input{
           border: none;
           float: left;
           height: 28px;
           margin-left: 12px;
           background-color: rgb(243, 242, 255);
           outline: none;
         }
       }
    }
    
  }
</style>
