<template>
  <div id="header">
    <h2>JIHEE'S LAB</h2>
    <ul id="menu">
      <div class="menu-icon"><i class="material-icons ">menu</i></div>
      <a href=""><li>About Jihee</li></a>
      <a href=""><li>Portfolio</li></a>
       <ul class="color-pick">
         <li v-for="(color, index) in colors" :key="index" @click="getCol(color)" class="colors">
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
  
</style>
