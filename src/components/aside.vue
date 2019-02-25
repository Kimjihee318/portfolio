<template>
  <div id="aside-wrapper">
    <div id="aside-header"></div>
    <div id="aside-body">
      <ul id="categories">
        <p>Categories</p>
        <li v-for="(items, index) in categories" :key="index" >
          <input @click="clickCheck(index)" :id="index" type="checkbox" :checked="items.checked">
          <label :for="index"><span></span></label>
          <label>{{ items.name }}</label>
        </li>
      </ul>
      <div class="contact">
        <!-- <label for="star-box">Smile</label>
        <ul id="star-box">
          <li v-for="(heart, index) in hearts" :key="index" v-show="heart">
            <i @click="clickFavorite" class="material-icons">star</i>
          </li>
        </ul> -->
        <label for="heart-box">Like</label>
        <ul id="heart-box">
          <li v-for="(heart, index) in hearts" :key="index" v-show="heart">
            <i @click="clickFavorite" class="material-icons">favorite</i>
          </li>
        </ul>
        <p>You like my works!</p>
        <div>
          <p>KIM JIHEE</p>
          <div>
            <img src="" alt="">
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
    sorting (){
      return this.$store.state.asideOption.sorting
    },
    language (){
      return this.$store.state.asideOption.language
    },
    hearts (){
      return this.$store.state.showOption.hearts
    }
  },
  methods: {
    clickCheck (index) {
      this.$store.commit('clickCheck', index);
    },
    clickFavorite () {
      this.$store.commit('clickFavorite');
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
</style>