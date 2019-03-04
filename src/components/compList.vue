<template>
  <div id="comps" :style="{'backgroundColor': colorIn}">
    <card></card>
  </div>
</template>

<script>
import card from './graphs/card.vue'
import ani from './cssAni/ani_comp.vue'
export default {
  components: {
    card,
    ani,    
  },
  computed: {
    allfontsNum (){
      return this.$store.state.graphs.length
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
    color: #888;
  }
</style>