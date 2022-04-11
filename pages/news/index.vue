<template>
  <section class="news">
    <RouteWay title="News and Events" text="News and Events" />
    <div class="container">
      <div class="new-inner">
        <TabNav>
          <Tab name="News" selected="true">
            <div class="diplomat-row">
              <div class="col-6">
                <div class="news-card">
                  <div class="news-card__img">
                    <img src="~/assets/img/card-1.png" alt="" />
                  </div>
                  <div class="news-card__date">March 23, 2022</div>
                  <div class="news-card__title">
                    Books and podcasts that inspire to break the gender bias
                  </div>
                </div>
              </div>
              <div class="col-3" v-for="item in getNews" :key="item.id">
                <nuxt-link :to="'/news/' + item.slug">
                  <div class="news-card">
                    <div class="news-card__img"><img :src="item.url" alt="" /></div>
                    <p class="news-card__date">{{ item.date }}</p>
                    <div class="news-card__text">{{ item.title }}</div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </Tab>
          <Tab name="Events">
            <div class="events-box">
              <div class="events-item" v-for="item in GetEvent" :key="item.id">
                <div class="events-item__date">
                  <h3 class="date-day">{{ item.day }}</h3>
                  <p class="date-month">{{ item.date }}</p>
                  <span class="date-week">{{ item.weeks }}</span>
                </div>

                <div class="events-item__img"><img :src="item.url" alt="" /></div>

                <div class="events-item__commit">
                  <h5 v-html="item.title"></h5>
                </div>

                <div class="events-item__connect">
                  <div class="events-item__mini">
                    <h5 class="connect-hour">{{ item.option_1 }}</h5>
                    <span class="connect-plan">{{ item.category_title }}</span>
                  </div>
                  <button type="button" class="connect-btn btn btn-outline-primary">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </Tab>
        </TabNav>

        <div class="event-btn">
          <button type="button" class="btn"><span>Load more</span></button>
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
    return {
      gets: {},
    };
  },
  computed: {
    ...mapGetters("news", ["getNews"]),
    ...mapGetters("news", ["GetEvent"]),
  },
  mounted() {
    this.newsData();
    this.EventData();
  },
  methods: {
    ...mapActions("news", ["newsData"]),
    ...mapActions("news", ["EventData"]),
    getsss(asd) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let d = new Date(asd);
      return monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    },
  },
};
</script>

<style scoped></style>
