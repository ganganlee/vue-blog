<template>
  <div id="app">
    <div class="container">
      <aside class="left-wrapper">
        <div class="user-wrapper">
          <img src="../static/images/face.jpg">
          <p class="user-name">ganganlee</p>
          <p class="user-email">ganganlee@outlook.com</p>
        </div>
      </aside>
      <div class="main-wrapper">
        <router-view/>
      </div>
    </div>
    <div class="footer">@copyright zozoo.net</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container{
    display: flex;
    min-height: 100vh;
  }
  .left-wrapper{
    flex:  0 0 240px;
    width: 240px;
    background-color: antiquewhite;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .main-wrapper{
    flex: 1;
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
</style>
