<template>
  <div id="aside-wrapper">
    <div id="aside-header">
    </div>
    <div id="aside-body">
      <ul id="categories">
        <p>Language</p>
        <li v-for="(items, index) in categories" :key="index" >
          <input @click="clickCheck(index)" :id="index" type="checkbox" :checked="items.checked">
          <label :for="index"><span></span></label>
          <label>{{ items.name }}</label>
        </li>
      </ul>
      <p>Viewing <span>{{ this.fontsNum }}</span> of {{ this.allfontsNum }} Projects</p>
      <div class="contact">
        <label for="heart-box">Likes</label>
        <ul id="heart-box">
          <li v-for="(heart, index) in hearts" :key="index" v-show="heart">
            <i class="material-icons">💙</i>
          </li>
        </ul>
        <div id="card">
          <p>KIM JIHEE</p>
          <div>
            <img id="face-img" v-show="cardShow" src="../assets/IMG_0025.jpg" alt="지희 짱" width="170px">
            <p>Developer & Designer</p>
            <p>jiheekim318@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories (){
      return this.$store.state.asideOption.categories
    },
    allfontsNum (){
      return this.$store.state.graphs.length
    },
    fontsNum (){
      let filtered = this.$store.getters.isVisible.filter(font => font == true)
      return filtered.length
    },
    hearts (){
      return this.$store.state.showOption.hearts
    },
    cardShow (){
     if (this.$store.state.showOption.hearts.length>2){
        return true
      }
      return false
    }
  },
  methods: {
    clickCheck (index) {
      this.$store.commit('clickCheck', index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/setup/normalize.scss";
@import "../styles/setup/variables.scss";
@import "../styles/basics/aside.scss";
@import "../styles/components/checkBox.scss";
@import "../styles/components/selectBox.scss";
@import "../styles/components/range_mini.scss";

// 덮어쓰는 스타일의 경우 이곳에 입력합니다.
#numbeOfStyles {
  margin-top: 1rem;
}
input[type=range]::-moz-range-thumb {
  width: 0.3rem;
  height: 0.3rem;
}
select {
  border-bottom: $border;
}
p:not(#card>p) {
  color: #777;
  &:nth-child(2){
    padding-bottom: 10px;
    // border-bottom: 1px solid $body-border;
  }
  span {
    padding-right: 3px; 
    padding-left: 3px;
    color: $point-color;
    font-weight: 800;
    font-size: 110%;
  }
  #contact label {
    font-size: 1rem;
  }
  #aside-body p {
    font-size: 1rem;
  }
}
</style>