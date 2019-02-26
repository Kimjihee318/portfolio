<template>
  <div id="app">
   <layout></layout>
  </div>
</template>

<script>
import layout from './components/layout.vue'

export default {
  components: {
    layout
  }
}
</script>

<style lang="scss">
  // global css
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
@import './styles/setup/variables.scss';

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    a:link {
    color:#000;
    text-decoration: none;
    }
    a:visited {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        color: #000;
        text-decoration: none;
    }
    a img {
        border: 0;
    }
  }
  html {
    background-color: $sub-back;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
</style>