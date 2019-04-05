<template>
  <div id="app">
    <b-tabs id="tabline">
      <b-tab title="Home">
        <HomePage/>
        <Footer/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
// import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

import HomePage from "./components/HomePage.vue";

import Footer from "./components/Footer.vue";

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

export default {
  name: "app",
  components: {
    HomePage,
    Footer
  }
};
</script>

<style lang="scss">
// @import "node_modules/bootstrap/scss/bootstrap";
// @import "node_modules/bootstrap-vue/src/index.scss";
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
</style>

<style lang="scss">
body {
  background-color: #1c0e4e;
  padding: 0;
  margin: 0;
  width: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  font-family: "Noto Sans KR", sans-serif;
  border-bottom: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: pink;
  text-shadow: -1px -1px 0 rgb(34, 34, 34), 1px -1px 0 rgb(34, 34, 34),
    -1px 1px 0 rgb(34, 34, 34), 1px 1px 0 rgb(34, 34, 34);

  width: 100%;
}

#app h1,
#app h2,
#app h3,
#app h4,
#app h5,
#app h6 {
  margin: 0;
  text-align: left;
}

.md-tabs {
  width: 100%;
}
</style>