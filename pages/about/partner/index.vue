<template>
  <section class="partner">
    <RouteWay title="Our Partners" text="Our Partners" />
    <div class="container">
      <div class="partner-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="partner-content">
              <div class="diplomat-row">
                <div class="col-lg-4" v-for="item in GetPart" :key="item.id">
                  <div class="partner-card">
                    <div class="partner-card__img">
                      <img :src="item.url" alt="" />
                    </div>
                    <div class="partner-card__icon">
                      <img :src="item.logo" alt="" />
                    </div>
                    <div class="partner-card__title">{{ item.title }}</div>
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
    ...mapGetters("partner", ["GetPart"]),
  },
  methods: {
    ...mapActions("partner", ["PartnerData"]),
  },
  mounted() {
    this.PartnerData();
  },
};
</script>

<style scoped></style>
