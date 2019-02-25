<template>
  <div id=component-wrapper>
    <div v-for="(item, index) in graphs" :key="index" 
    v-show="true">
      <i @click="clickFavorite" class="material-icons">{{ favorite }}</i>
      <h4>{{ item.name }}</h4>
      <graphBody :num="index" :proj="item"></graphBody>
    </div>
  </div>
</template>

<script>
import graphBody from './graphBody.vue'
import _ from 'lodash'

export default {
  components: {
    graphBody,
  },
  computed: {
    graphs (){
      return this.$store.state.graphs
    },
    isVisible (){
      return this.$store.getters.isVisible
    },
    favorite (){
      return this.$store.state.showOption.heartIcon[0].icon
    }
  },
  methods: {
    changeHeart(){
      this.$store.commit('changeHeart')
    },
    clickFavorite(){
      this.$store.commit('clickFavorite');
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/setup/variables.scss";
  @import "../../styles/views/component.scss";

  #component-wrapper>div{
    position: relative;
  }
  h4 {
    color: $font-color;
    font-size: 1.2rem;
    font-weight: 300;
  }
  .material-icons {
    color: $heart-color;
    position: absolute;
    bottom: -5px;
    right: 44px;
  }
</style>