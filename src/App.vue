<template>
  <div id="app">
    <md-tabs>
      <md-tab>
        <img alt="R6S Logo" id="logo" src="./assets/r6_logo.png">
        <HomePage/>
      </md-tab>
    </md-tabs>
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

export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
body {
  background-color: #1c0e4e;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
  border-bottom: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: pink;
  text-shadow: -1px -1px 0 rgb(34, 34, 34), 1px -1px 0 rgb(34, 34, 34),
    -1px 1px 0 rgb(34, 34, 34), 1px 1px 0 rgb(34, 34, 34);
}

#app p {
  width: 800px;
  text-align: left;
  max-width: 95%;
  margin-bottom: 40px;
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

#logo {
  animation: App-logo-spin infinite 0.02s linear,
    App-logo-fx infinite 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  max-width: 100%;

  pointer-events: none;
  filter: invert(100%) drop-shadow(1px 0px 0 red) drop-shadow(-1px 0px 0 red)
    drop-shadow(0px 1px 0 red) drop-shadow(0px -1px 0 red);
}

@keyframes App-logo-spin {
  0% {
    transform: rotate(-3deg);
  }

  50% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(-3deg);
  }
}
</style>
