<template>
  <div>
    <top></top>
    <right></right>
    <comps></comps>
  </div>
</template>

<script>
import top from './header.vue'
import comps from './compList.vue'
import right from './aside.vue'

export default {
  components: {
    top,
    comps,
    right
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/layout.scss";
</style>