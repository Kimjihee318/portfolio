<template>
  <div id="comps" :style="{'backgroundColor': colorIn}">
    <!-- <p>Viewing {{ this.fontsNum }} of {{ this.allfontsNum }} Projects </p> -->
    <graph></graph>
  </div>
</template>

<script>
import graph from './graphs/graph.vue'
import ani from './cssAni/ani_comp.vue'
export default {
  components: {
    graph,
    ani,
  },
  computed: {
    allfontsNum (){
      return this.$store.state.fonts.length
    },
    fontsNum (){
      let filtered = this.$store.getters.isVisible.filter(font => font == true)
      return filtered.length
    },
     colorIn (){
      return this.$store.state.showOption.colorIn
    }
  }
}
</script>
<style>
  #comps>p {
    padding-left: 2rem;
    margin-bottom: 0;
    font-weight: 300;
    color: #aaa;
  }
</style>