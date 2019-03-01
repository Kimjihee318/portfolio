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
    <a :href="graphs[num].haveGit.link"><i class="fab fa-github" style="font-size: 1.3rem;" v-show="graphs[num].haveGit.done"></i></a>
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
.fa-github { 
  position: absolute;
  right: 1px;
  bottom: -40px;
  opacity: 0.8;
}
</style>
