<template>
  <div id="cardBody" style="position: relative;">
    <div style="position: relative;">
      <a :href="link">
        <img :src="imageLink" alt="images" width="100%" :style="{fill:fillcolor}">
      </a>
       <div style=""></div>
    </div>
    <ul v-for="(item, index) in language" :key="index">
      <li :class="item">{{ item }}</li>
    </ul>
    <div style="position:absolute; right:-10px; top: 145px; border-radius: 50%;"><i class="material-icons" style="color: #ffcc00; font-size: 1rem;" v-show="graphs[num].myPick">pan_tool</i></div>
  </div>
</template>
<script>
export default {
  props: {
    proj: {
      type: Object,
      required: true
    },
    num: {
      type: Number,
      required: true
    }
  },
  computed: {
    graphs (){
      return this.$store.state.graphs
    },
    link (){
      return this.proj.link
    },
    fillcolor (){
      return this.proj.color
    },
    language (){
      return this.proj.language
    },
    imageLink(){
      return this.proj.imgLink
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/setup/variables.scss";
@import "../../styles/views/card.scss";
</style>
