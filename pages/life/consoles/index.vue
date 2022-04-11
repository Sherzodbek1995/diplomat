<template>
  <section class="console">
    <RouteWay title="Student Console" text="Student Console" />
    <div class="container">
      <div class="rector-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="univercity-content">
              <div class="diplomat-row">
                <div class="col-lg-12">
                  <div class="enter-date">
                    <span class="enter-date__text">Students:</span>
                    <select class="enter-date__select">
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 team-col" v-for="item in getConsole" :key="item.id">
                  <div class="team-card">
                    <div class="team-card__img"><img :src="item.url" alt="" /></div>
                    <div class="team-card__content">
                      <h5 class="team-card__title">{{ item.title }}</h5>
                      <p class="team-card__text">{{ item.category_title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <StuSide />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("consoles", ["getConsole"]),
  },
  methods: {
    ...mapActions("consoles", ["consoleData"]),
  },
  mounted() {
    this.consoleData();
  },
};
</script>

<style scoped></style>
