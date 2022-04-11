<template>
  <div class="new-slug">
    <section class="books">
      <RouteWay :title="$route.params.slug" :text="$route.params.slug" />
      <div class="container">
        <div class="univercity-inner">
          <div class="diplomat-row">
            <div class="col-9">
              <div class="univercity-content">
                <div
                  class="univercity-content__img"
                  v-for="item in getOnSlug"
                  :key="item.id"
                >
                  <img :src="item.img" alt="" />
                </div>
                <p class="books-content__commit">{{ getSlug.date }}</p>

                <h3 class="books-content__title">
                  {{ getSlug.title }}
                </h3>

                <div v-html="getSlug.content" class="books-p"></div>
              </div>
            </div>
            <div class="col-3">
              <NewsSide />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("news", ["getSlug"]),
    ...mapGetters("news", ["getOnSlug"]),
  },
  methods: {
    ...mapActions("news", ["staticNewsData"]),
  },
  async mounted() {
    await this.staticNewsData({ slug: this.$route.params.slug });
  },
};
</script>

<style></style>
