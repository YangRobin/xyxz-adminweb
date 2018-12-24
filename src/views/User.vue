<template>
  <div class="about">
    <div class="paths">
     <h3>用户管理</h3>
      <ul>
        <li>
          <router-link to="/user/user-survey">
            <i class="iconfont icon-check-circle"></i>用户统计
          </router-link>
        </li>
        <li>
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
    ul {
      overflow: hidden;
      li {
        float: left;
        margin-right: 10px;
        border-right: 2px solid #c028c0;
        padding: 10px;
      }
    }
  }
  margin-top: 5px;
}
</style>
