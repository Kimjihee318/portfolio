<template>
  <div id="header">
    <h2>JIHEE'S LAB</h2>
    <div id="menuIcon" @click="menuClick" ><i class="material-icons">menu</i></div>
    <ul id="menu">
      <a href="" v-show="menuShow"><li>About Jihee</li></a>
      <a href="" v-show="menuShow"><li>Portfolio</li></a>
       <ul class="color-pick" v-show="true">
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
    },
    menuShow (){
      return this.$store.state.showOption.show
    }
  },
  methods: {
    getCol (color){
      this.$store.commit('colorVmodel', color);
    },
    menuClick() {
      this.$store.commit('menuClick');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/layout.scss";
</style>
