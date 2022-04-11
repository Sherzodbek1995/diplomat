<template>
  <div class="slider">
    <div class="slider-tangle-top"></div>
    <div class="slider-tangle-bottom"></div>
    <button type="button" @click="prevSlide" class="btn btn-left-arrow">
      <img src="../assets/icons/left.png" alt="" />
    </button>
    <button type="button" @click="nextSlide" class="btn btn-right-arrow">
      <img src="../assets/icons/right.png" alt="" />
    </button>
    <div class="container">
      <div class="slider-inner" :style="{ 'margin-left': '-' + 15 * slideIndex + '%' }">
        <div class="diplomat-row">
          <div class="col-3 slider-card" v-for="item in slider" :key="item.id">
            <div class="slider-hover">
              <img :src="item.img" alt="" />
            </div>
            <div class="slider-content">
              <div class="slider-card__title">{{ item.title }}</div>
              <div class="slider-card__text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      slideIndex: 0,
      slider: [
        {
          id: 1,
          img: require("../assets/img/slide-hover.png"),
          title: "College Advisory",
          text:
            "Pursue your education without financial worry. At Arizona, you’ll find a variety of options from",
        },
        {
          id: 2,
          img: require("../assets/img/slide-hover.png"),
          title: "College Advisory",
          text:
            "Pursue your education without financial worry. At Arizona, you’ll find a variety of options from",
        },
        {
          id: 3,
          img: require("../assets/img/slide-hover.png"),
          title: "College Advisory",
          text:
            "Pursue your education without financial worry. At Arizona, you’ll find a variety of options from",
        },
        {
          id: 4,
          img: require("../assets/img/slide-hover.png"),
          title: "College Advisory",
          text:
            "Pursue your education without financial worry. At Arizona, you’ll find a variety of options from",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    prevSlide() {
      if (this.slideIndex > 0) {
        this.slideIndex--;
      }
    },
    nextSlide() {
      if (this.slideIndex >= this.carousel_data.length - 1) {
        this.slideIndex = 0;
      } else {
        this.slideIndex++;
      }
    },
  },
};
</script>

<style></style>
