<template>
  <div id="graphBody">
    <div>
      <img src="image" alt="images" width="100%">
      <ul v-for="(item, index) in language" :key="index">
       <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proj: {
      type: Object,
      required: true
    }
  },
  computed: {
    language (){
      return this.proj.language
    },
    image (){
      return this.proj.img
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/setup/variables.scss";

  #graphBody > div {
    width: 90%;
    height: 200px;
    margin: 0 auto;
  }
  img {
    border: $border;
  }
  ul > li {
    float: left;
    padding: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-right: 5px;
    font-size: .9rem;
    border-radius: 2px;
    text-transform: uppercase;
  }
  .vue {

  }
</style>
