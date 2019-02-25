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

  #graphBody {
    width: 94%;
    height: 200px;
  // margin: 0 auto;
  }
  #graphBody + div {
    height: 100px;
  }
  img {
    border: 1px solid $body-border-opacity;
    border-radius: 4px;
  }
  ul {
    margin-top: 5px;
    li {
      float: left;
      padding: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-right: 5px;
      font-size: .9rem;
      border-radius: 2px;
      text-transform: uppercase;
      border: 1px solid $body-border;
      color: $font-color;
    }
  }
  .vue {
    background-color: #00bbd475;
  }
</style>
