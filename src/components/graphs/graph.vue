<template>
  <div id=component-wrapper>
    <div v-for="(item, index) in graphs" :key="index" 
    v-show="true"
    :style="{'background-color': colorIn}">
      <i @click="clickFavorite" class="material-icons">favorite</i>
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
     colorIn (){
      return this.$store.state.showOption.colorIn
    }
  },
  methods: {
    clickFavorite(){
      this.$store.commit('clickFavorite');
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/setup/variables.scss";
  @import "../../styles/views/component.scss";
  .material-icons {
    color: $heart-color;
  }
</style>