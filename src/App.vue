<template>
  <div id="app">
    <b-tabs id="tabline">
      <div id="tabline-bg"></div>
      <b-tab title="R6S TK PASS" id="home-tab">
        <HomePage/>
      </b-tab>
      <b-tab title="Members"></b-tab>
      <b-tab title="Staff"></b-tab>
      <b-tab title="Leaderboard">
        <Leaderboard/>
      </b-tab>
      <b-tab title="Requests">
        <Requests/>
      </b-tab>
    </b-tabs>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
// import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

import HomePage from "./components/pages/HomePage.vue";
import Leaderboard from "./components/pages/Leaderboard.vue";
import Requests from "./components/pages/Requests.vue";

import Footer from "./components/Footer.vue";

import BootstrapVue from "bootstrap-vue";
import "vuetify/dist/vuetify.min.css";

Vue.use(BootstrapVue);

import Vuetify from "vuetify";

Vue.use(Vuetify);

export default {
  name: "app",
  components: {
    HomePage,
    Leaderboard,
    Footer,
    Requests
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
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  font-family: "Noto Sans KR", sans-serif;
  border-bottom: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: pink;
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
</style>



<style>
.tab-content {
  max-width: 95vw;
  margin: 0 auto;
}

.nav-tabs {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  user-select: none;
  width: 100vw;
  border-bottom: 1px solid rgb(154, 153, 255);
  /* margin: 0 0 20px; */
  padding: 0;
  background: rgb(6, 17, 31);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);

  /* white-space: nowrap; */
}

.nav-item {
  font-weight: bold;
  font-size: 48px;
  display: inline-block;
  border-bottom: none;

  position: relative;
  list-style: none;

  cursor: pointer;
  color: rgb(109, 109, 109);

  vertical-align: middle;

  background: rgb(12, 36, 66);
}

.nav-link {
  display: inline-block;
  width: 100%;

  padding-left: 25px;
  padding-right: 25px;

  text-shadow: none;

  color: rgb(109, 109, 109);

  text-decoration: none;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.342);
}

.nav-link.active {
  background: rgb(7, 77, 168);
  color: rgb(255, 255, 255);
  /* border-left: 1px solid rgb(6, 62, 134);
  border-right: 1px solid rgb(6, 62, 134); */

  text-align: center;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
}

.react-tabs__tab--disabled {
  cursor: default;
}

#home-tab___BV_tab_button__ {
  /* background: rgb(139, 0, 0); */
  background: rgb(189, 0, 0);
  font-weight: bolder;
  /* display: flex; */
  z-index: 2;

  padding-left: 25px;
  padding-right: 25px;

  justify-content: center;
  align-items: center;
}

/* .react-tabs__tab--selected#react-tabs-0 {
  background: rgb(189, 0, 0);
} */

.react-tabs__tab-panel {
  display: none;
}

.react-tabs__tab-panel--selected {
  display: block;
}
</style>

