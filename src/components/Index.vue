<template>
  <div>
    <header>
      <div class="explain">
        <h1>gangan Blog</h1>
        <h5>学习弯道超车技术</h5>
      </div>
    </header>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper" @click="$parent.location('/details')">
          <p class="blog-time">2018年07月30日</p>
          <h3 class="blog-title">基于 MIME 类型的服务端推送</h3>
          <div class="blog-content">
            目前就职于视听行业相关的公司，故而需要接触流媒体传输相关技术。今天介绍一种基于 MIME 类型的服务端流媒体推送实现。<span class="blog-more">阅读原文...</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>文章标签</li>
              <li>文章标签</li>
              <li>文章标签</li>
            </ul>
          </div>
        </li>
        <li class="blog-wrapper">
          <p class="blog-time">2018年07月30日</p>
          <h3 class="blog-title">基于 MIME 类型的服务端推送</h3>
          <div class="blog-content">
            目前就职于视听行业相关的公司，故而需要接触流媒体传输相关技术。今天介绍一种基于 MIME 类型的服务端流媒体推送实现。<span class="blog-more">阅读原文...</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>文章标签</li>
              <li>文章标签</li>
              <li>文章标签</li>
            </ul>
          </div>
        </li>
        <li class="blog-wrapper">
          <p class="blog-time">2018年07月30日</p>
          <h3 class="blog-title">基于 MIME 类型的服务端推送</h3>
          <div class="blog-content">
            目前就职于视听行业相关的公司，故而需要接触流媒体传输相关技术。今天介绍一种基于 MIME 类型的服务端流媒体推送实现。<span class="blog-more">阅读原文...</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>文章标签</li>
              <li>文章标签</li>
              <li>文章标签</li>
            </ul>
          </div>
        </li>
        <li class="blog-wrapper">
          <p class="blog-time">2018年07月30日</p>
          <h3 class="blog-title">基于 MIME 类型的服务端推送</h3>
          <div class="blog-content">
            目前就职于视听行业相关的公司，故而需要接触流媒体传输相关技术。今天介绍一种基于 MIME 类型的服务端流媒体推送实现。<span class="blog-more">阅读原文...</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>文章标签</li>
              <li>文章标签</li>
              <li>文章标签</li>
            </ul>
          </div>
        </li>
        <li class="blog-wrapper">
          <p class="blog-time">2018年07月30日</p>
          <h3 class="blog-title">基于 MIME 类型的服务端推送</h3>
          <div class="blog-content">
            目前就职于视听行业相关的公司，故而需要接触流媒体传输相关技术。今天介绍一种基于 MIME 类型的服务端流媒体推送实现。<span class="blog-more">阅读原文...</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>文章标签</li>
              <li>文章标签</li>
              <li>文章标签</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrapper{
    max-width: 960px;
    margin: 30px auto 40px;
  }
  .blog-wrapper{
    margin-bottom: 30px;
    padding: 12px 12px 0;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(151,151,151,0.58);
  }
  .blog-time{
    line-height: 24px;
    margin: 0 0 10px;
    font-size: 13px;
    font-weight: bold;
    color: #727272;
    overflow: hidden;
  }
  .blog-title{
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 32px;
    color: #3f51b5;
  }
  .blog-content{
    word-break: break-all;
    padding-bottom: 20px;
    line-height: 1.8;
  }
  .blog-more{
    display: inline-block;
    padding: 0 6px;
    font-weight: 500;
    color: #3f51b5 !important;
    border: none !important;
    border-radius: 3px;
  }
  .blog-tag{
    position: relative;
    margin: 0 -12px;
    padding: 12px 20px 8px;
    border-top: 1px solid #ddd;
  }
  .blog-tag li{
    display: inline-block;
    margin: 0 8px 8px 0;
    border-radius: 2px;
    background: #8bc34a;
    padding: 0 16px;
    line-height: 28px;
    color: rgba(255,255,255,0.8);
  }
</style>
