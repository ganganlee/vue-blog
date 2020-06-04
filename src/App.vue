<template>
  <div id="app">
    <div class="container">
      <transition name="fade">
        <aside v-if="menuStatus" class="left-wrapper">
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
      </transition>
      <div class="main-wrapper">
        <div class="nav-wrapper" :class="{'nav-shadow':navShadow}" >
          <i class="iconfont" :class="{'icon-close move-right' :menuStatus, 'icon-menu move-left':!menuStatus}" @click="asideStatus()"></i>
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
        <div class="footer">
          <div class="copyright">
            <p>ganganLee©2018-2020 黔ICP备18012301号</p>
            <p>Power by <a href="">vue</a>  Theme <a href="">element</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //导航栏是否显示阴影
      navShadow   :false,
      //左边菜单栏是否显示
      menuStatus  :true,
      //导航栏paddingLeft
      navPadding  :240
    }
  },
  mounted () {
    // 触发监听窗口滚动事件
    window.addEventListener('scroll', this.isScroll);
  },
  methods:{
    // 监听窗口滚动
    isScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop == 0)
      {
        //滚动条为0
        this.navShadow = false;
      }else {
        //滚动条不为0
        this.navShadow = true;
      }
    },

    //切换左边菜单栏显示状态
    asideStatus(){
      this.menuStatus = !this.menuStatus;
      let self = this;
      if(this.menuStatus)
      {

        let interval = setInterval(function () {
          self.navPadding +=1;
          if(self.navPadding >= 240)
          {
            self.navPadding = 240;
            clearInterval(interval);
          }
        },0.5)
      }else {
        let interval = setInterval(function () {
          self.navPadding -= 1;
          if(self.navPadding <= 0)
          {
            self.navPadding = 0;
            clearInterval(interval);
          }
        },1)
      }
    }
  },
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
    z-index: 2;
  }
  .main-wrapper{
    flex: 1;
    background: #f6f6f6;
    padding: 0 15px;
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
    width: 100%;
    left: 0;
  }
  .nav-shadow{
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
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
    margin: 0 -15px;
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
  .footer{
    padding: 15px;
    background: #303f9f;
    text-align: center;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
    font-size: 13px;
    margin: 0 -15px;
  }
  .footer a{
    color: inherit;
    opacity: .8;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  .fade-enter, .fade-leave-to {
    margin-left: -240px;
  }

  .move-left{
    animation:moveLeft 0.5s ease;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
  }
  .move-right{
    animation:moveRight 0.5s ease;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
  }
  @keyframes moveLeft
  {
    from {left:0px;}
    to {left:-240px;}
  }
  @keyframes moveRight
  {
    from {right:0px;}
    to {right:240px;}
  }
</style>
