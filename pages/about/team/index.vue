<template>
  <section class="rector">
    <RouteWay title="Our team" text="Our team" />
    <div class="container">
      <div class="rector-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="univercity-content">
              <div class="diplomat-row">
                <div class="col-4 team-col" v-for="item in getTeam" :key="item.id">
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
            <AboutSide />
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
    ...mapGetters("team", ["getTeam"]),
  },
  methods: {
    ...mapActions("team", ["teamData"]),
  },
  mounted() {
    this.teamData();
  },
};
</script>

<style scoped></style>
