<template>
  <div class="about">
    <div class="paths">
      <fieldset class="zgz-title-field">
        <legend>用户管理</legend>
      </fieldset>
      <ul>
        <li >
          <router-link to="/user/user-survey" >
            <i class="iconfont icon-check-circle"></i>用户统计
          </router-link>
        </li>
        <li class="active">
          <router-link to="/user/add-user">
            <i class="iconfont icon-check-circle"></i>新增用户
          </router-link>
        </li>
        <li>
          <router-link to="/about/sub-about">
            <i class="iconfont icon-check-circle"></i>子路由
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .paths {
    background-color: #fff;
     .zgz-title-field{
      margin: 10px 0 20px;
      border-style: solid;
      border-width: 1px 0 0;
      legend{
        margin-left: 20px;
        padding: 0 10px;
        font-size: 20px;
        font-weight: 300;
      }
    }
    ul {
      overflow: hidden;
      background: #ccc;
      border-top: #fff;
      li {
        float: left;
        padding: 10px;
        transition: all 0.3s;
        &:hover{
          background: #fff;
           border-color: #c028c0;
          color: #c028c0;
          border-top: 1px solid;
        }
        a{
          display: block;
          padding: 0 10px;
          text-decoration: none;
          i{
            margin-right:5px;
          }  
        }
      }
      .active{
          background: #fff;
          border-color: #c028c0;
          color: #c028c0;
          border-top: 1px solid;
      }
    }
  }
  margin-top: 5px;
}
</style>
