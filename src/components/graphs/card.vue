<template>
  <div id=component-wrapper>
    <div v-for="(item, index) in graphs" :key="index" 
    v-show="isVisible[index]">
      <i @click="clickFavorite(); clickPlus(index);" class="material-icons" v-show="!graphs[index].show">{{ colorIn.heart }}</i>
      <i @click="clickFavorite(); clickPlus(index);" class="material-icons" v-show="graphs[index].show" :style="{'color': colorIn.emptyHeart}">favorite_border</i>
      <h4 :style="{'color': colorIn.font}">{{ item.name }}</h4>
      <cardBody :num="index" :proj="item"></cardBody>
    </div>
  </div>
</template>

<script>
import cardBody from './cardBody.vue'
import _ from 'lodash'

export default {
  components: {
    cardBody,
  },
  computed: {
    graphs (){
      return this.$store.state.graphs
    },
    isVisible (){
      return this.$store.getters.isVisible
    },
     colorIn (){
      return this.$store.state.showOption.colorIn
    }
  },
  methods: {
    clickFavorite(){
      this.$store.commit('clickFavorite');
    },
    clickPlus(index){
      this.$store.commit('clickPlus', index);
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/setup/variables.scss";
  @import "../../styles/views/card.scss";
  #component-wrapper>div{
    position: relative;
  }
  h4 {
    color: $font-color;
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
  }
</style>