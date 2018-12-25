<template>
  <div class="home-config">
    <div class="tt">
      <fieldset class="zgz-title-field">
        <legend>首页面版</legend>
      </fieldset>
    </div>
    <div class="row">
      <div class="col-md-10">
        <div class="zgz_cont">
          <h2 class="zgz_cont_title">
            标题xxxxx
            <i class="iconfont icon-check-circle"></i>
          </h2>
          <div class="zgz_cont_main">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-yonghu"></i>
                  <div class="con">
                    <p>阿士大夫撒地方是
                      <br>asdfs
                    </p>
                    <img src alt>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-duanxinjilu"></i>
                  <div class="con">
                    <p>阿士大夫撒地方是
                      <br>asdfs
                    </p>
                    <img src alt>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-14">
        <div class="zgz_cont">
          <div class="pan_title">
            titlesadf
            <i class="iconfont icon-export"></i>
          </div>
          <div class="pan_main">
            <dl class="pan_main_flex">
              <dt>
                <i class="iconfont icon-check-circle"></i>
              </dt>
              <dd>
                <h2>Write an article about design trends</h2>
                <strong>12Mar.20rmg</strong>
                <div
                  class="box"
                >lejahsjsadlkfjsakldjfokasjdofjiosajiofsadifjasiodjfioasjdiofjsaiodiasdjiofajsdi</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home-config {
  .tt {
    background-color: #fff;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
    border-left: 2px solid #34a6c6;
    .zgz-title-field {
      margin: 10px 0 10px;
      /* border-style: solid; */
      width: 20%;
      height: 30px;
      border-width: 1px 0 0;
      legend {
        margin-left: 20px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
  h3 {
    padding: 5px;
    margin-top: 5px;
    background-color: #fff;
  }
  .zgz_cont {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
    .zgz_cont_title {
      position: relative;
      height: 52px;
      line-height: 52px;
      padding: 0 15px 0 10px;
      color: #333;
      background-color: #ffffff;
      cursor: pointer;
      font-size: 14px;
      overflow: hidden;
      border-left: 2px solid #ad52f5;
      i {
        float: right;
      }
    }
    .zgz_cont_main {
      line-height: 0;
      ul {
        overflow: hidden;
        width: 100%;
        li {
          width: 100%;
          a {
            display: flex;
            padding: 15px 10px;
            border-top: 1px solid #ecedf2;
            background-color: #f1f2f7;
            transition: all 0.3s;
            text-decoration: none;
            border-top: 1px solid #ccc;
            color: #333;
            &:hover {
              background-color: #ffffff;
              color: #ad52f5;
              box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
            }
            i {
              width: 35px;
              margin-top: 16px;
            }
            .con {
              flex: 1;
              height: 30px;
              p {
                line-height: 18px;
              }
              img {
                width: 40px;
                float: right;
              }
            }
          }
        }
      }
    }
    .pan_title {
      padding: 10px 15px;
      i {
        float: right;
      }
    }
    .pan_main {
      padding: 15px;
      color: #333;
      .pan_main_flex {
        display: flex;
        dt {
          width: 35px;
          height: 35px;
          i {
            color: #ad52f5;
            font-weight: 700;
          }
        }
        dd {
          flex: 1;
          h2 {
          }
        }
      }
    }
  }
}
</style>

