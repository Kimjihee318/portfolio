<template>
  <div id=component-wrapper>
    <div v-for="(item, index) in graphs" :key="index" 
    v-show="isVisible[index]">
      <i @click="clickFavorite(); clickPlus(index);" class="material-icons" v-show="!graphs[index].show">favorite</i>
      <i @click="clickFavorite(); clickPlus(index);" class="material-icons" v-show="graphs[index].show" 
      :style="{'color': '#ff8bcb11'}">favorite</i>
      <i @click="clickFavorite(); clickPlus(index);" class="material-icons" v-show="graphs[index].show">favorite_border</i>
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
</style>