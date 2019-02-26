<template>
  <div id="header">
    <h2>JIHEE'S LAB</h2>
    <ul id="menu">
      <a href=""><li>About Jihee</li></a>
      <a href=""><li>Portfolio</li></a>
      <a href=""><li>경력기술서</li></a>
       <ul class="color-pick">
         <li v-for="(color, index) in colors" :key="index" @click="getCol(color)">
           <div class="color-circle" :style="{'background-color':color.color}"></div>
         </li>
       </ul>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    colors (){
      return this.$store.state.showOption.colors
    } 
  },
  methods: {
    getCol (color){
      this.$store.commit('colorVmodel', color);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/layout.scss";
  .color-pick {
    width: 70px;
    height: 60px;
    border-radius: 3px;
    li {
      float: left;
      width: 50%;
      height: 50%;
    }
  }
  .color-circle {
    margin: 0 auto;
    margin-top: 2px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    &:last-child {
      border: $border
    }
  }
</style>
