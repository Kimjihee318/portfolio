<template>
  <div id="graphBody">
    <div >
      <a :href="link">
        <img :src="imageLink" alt="images" width="100%" :style="{fill:fillcolor}">
      </a>
    </div>
    <ul v-for="(item, index) in language" :key="index">
      <li :class="item">{{ item }}</li>
    </ul>
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
