<template>
    <div id="details">
      <header>
        <div class="explain">
          <h1>gangan Blog</h1>
          <h5>学习弯道超车技术</h5>
        </div>
      </header>
      <mavon-editor
        class="md"
        :value="mdContent"
        :subfield = "false"
        :defaultOpen = "'preview'"
        :toolbarsFlag = "false"
        :editable="false"
        :scrollStyle="true"
        :ishljs = "true"
      ></mavon-editor>
    </div>
</template>

<script>
    export default {
      name: "Details",
      data () {
        return {
          mdContent:"[TOC] \n## MarkDown\n## MarkDown\n## MarkDown\n## MarkDown\n## MarkDown\n## MarkDown\n## MarkDown\n",
          codeStyle:'monokai-sublime',//设置主题 ，
        }
      }
    }
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 100%;
    height: 580px;
    margin: 15px 0;
  }
</style>
