<template>
  <div id="app">
    <div class="container">
      <aside class="left-wrapper">
        <div class="left-wrapper-fixed">
          <div class="user-wrapper">
            <img src="../static/images/face.jpg">
            <p class="user-name">ganganlee</p>
            <p class="user-email">ganganlee@outlook.com</p>
          </div>
          <div class="menu-wrapper">
            <ul>
              <li class="li-active">
                <i class="iconfont icon-home"></i>
                <p>Home</p>
              </li>
              <li class="">
                <i class="iconfont icon-home"></i>
                <p>Home</p>
              </li>
              <li class="">
                <i class="iconfont icon-home"></i>
                <p>Home</p>
              </li>
              <li class="">
                <i class="iconfont icon-home"></i>
                <p>Home</p>
              </li>
              <li class="">
                <i class="iconfont icon-home"></i>
                <p>Home</p>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div class="main-wrapper">
        <div class="nav-wrapper">
          <i class="iconfont icon-close"></i>
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-share"></i>
        </div>
        <header>
          <div class="explain">
            <h1>gangan Blog</h1>
            <h5>学习弯道超车技术</h5>
          </div>
        </header>
        <router-view/>
        <div class="footer">@copyright zozoo.net</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  ul {list-style:none;margin:0px;}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    border: #f6f6f6;
  }
  .container{
    display: flex;
    min-height: 100vh;
  }
  .left-wrapper{
    flex:  0 0 240px;
    width: 240px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .left-wrapper-fixed{
    position: fixed;
    width: 240px;
    height: 100%;
  }
  .main-wrapper{
    flex: 1;
    background: #f6f6f6;
  }
  .user-wrapper{
    padding: 20px;
    height: 200px;
    background-image: url(../static/images/brand.jpg);
    background-position: center;
  }
  .user-wrapper img{
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .user-name{
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #fff;
  }
  .user-email{
    padding-top: 4px;
    color: #c5cae9;
    font-size: 13px;
  }
  .menu-wrapper{
    padding: 20px 0;
  }
  .li-active,.menu-wrapper li:hover{
    background: rgba(0,0,0,0.05);
    color: #3f51b5;
  }
  .menu-wrapper li{
    display: flex;
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    cursor: pointer;
  }
  .menu-wrapper li i{
    flex: 0 0 50px;
    width: 50px;
  }
  .nav-wrapper{
    height: 56px;
    background: #3f51b5;
    color: #fff;
    line-height: 56px;
    position: fixed;
    top: 0;
    z-index: 1;
    width: calc(100% - 240px);
  }
  .nav-wrapper i {
    display: inline-block;
    width: 56px;
    text-align: center;
  }
  .nav-wrapper i:nth-child(1){
    float: left;
  }
  .nav-wrapper i:nth-child(2),.nav-wrapper i:nth-child(3){
    float: right;
  }
  header{
    padding: 104px 15px 48px 100px;
    color: #fff;
    background: #3f51b5;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);
  }
  header h1{
    line-height: 48px;
    font-size: 36px;
    font-weight: 500;
  }
  header h5{
    font-size: 16px;
    margin-top: 5px;
    font-weight: 300;
  }
  /*.main-wrapper{*/
    /*height: 100vh;*/
    /*overflow: scroll;*/
  /*}*/
</style>
