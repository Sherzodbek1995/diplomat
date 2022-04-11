<template>
  <section class="journey">
    <div class="container">
      <div class="journey-inner">
        <div class="diplomat-row">
          <div class="col-6">
            <div class="journey-content">
              <h6 class="journey-content__commit">T O T H E J O U R N E Y A H E A D</h6>
              <h2 class="journey-content__title">Gain valuable Knowledga & Experience</h2>
              <div class="journey-services" v-if="journey.length">
                <div class="journey-service__item" v-for="item in journey" :key="item.id">
                  <div class="item-icon"><img :src="item.img" alt="" /></div>
                  <div class="item-content">
                    <h3 class="item-content__title">{{ item.title }}</h3>
                    <p class="item-content__text">{{ item.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="reference">
              <div class="reference-item__one">
                <div class="reference-card">
                  <h3 class="reference-card__title">You Apply</h3>
                  <p class="reference-card__text">
                    Your support makes it possible for students to rise over barriers and
                    gain valuable experience to expand their knowledge and leadership.
                  </p>
                </div>
                <div class="reference-item__img">
                  <img src="../assets/img/ref-1.png" alt="" />
                </div>
              </div>
              <div class="reference-item__two">
                <div class="reference-item__img">
                  <img src="../assets/img/ref-2.png" alt="" />
                </div>
                <div class="reference-card">
                  <h3 class="reference-card__title">We Connect</h3>
                  <p class="reference-card__text">
                    Eller College and the dean the flexibility to seize new initiatives,
                    meet unexpected needs and strengthen ongoing programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      journey: [
        {
          id: 1,
          img: require("../assets/icons/jor-1.svg"),
          title: "Online Education",
          text:
            "At Eller, our forward-looking approach gives students confidence to lead in the face of profound technical, social and economic change. ",
        },
        {
          id: 1,
          img: require("../assets/icons/jor-2.svg"),
          title: "University Life",
          text:
            "We collaborate without boundaries and create innovations that improve the world. Here, students become leaders. Ideas become best practices. ",
        },
        {
          id: 1,
          img: require("../assets/icons/jor-3.svg"),
          title: "Campus Tours",
          text:
            "Concepts become thriving businesses. Given our fearless spirit, it’s no wonder we often appear near the top in international rankings.",
        },
      ],
    };
  },
};
</script>

<style></style>
