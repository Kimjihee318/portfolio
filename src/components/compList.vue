<template>
  <div id="comps">
    <p>Viewing {{ this.fontsNum }} of {{ this.allfontsNum }} Projects </p>
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
    }
  }
}
</script>
<style>
  #comps>p {
    padding-left: 1rem;
    margin-bottom: 0;
    font-weight: 400;
    color: #bbb;
  }
</style>