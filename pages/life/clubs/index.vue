<template>
  <section class="clubs">
    <RouteWay title="Clubs" text="Clubs" />
    <div class="container">
      <div class="rector-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="univercity-content">
              <div class="diplomat-row">
                <div class="col-4 team-col" v-for="item in getClubs" :key="item.id">
                  <div class="team-card">
                    <div class="team-card__img"><img :src="item.url" alt="" /></div>
                    <div class="team-card__content">
                      <h5 class="team-card__title">{{ item.title }}</h5>
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
    ...mapGetters("clubs", ["getClubs"]),
  },
  methods: {
    ...mapActions("clubs", ["clubsData"]),
  },
  mounted() {
    this.clubsData();
  },
};
</script>

<style scoped></style>
