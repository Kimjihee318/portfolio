<template>
  <div id="comps" :style="{'backgroundColor': colorIn}">
    <!-- <p>마음에 드는 포트폴리오의 <i class="material-icons" style="position:relative; top: 6px; color:#3274e6;">favorite_border</i>를 클릭 해보세요!</p> -->
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