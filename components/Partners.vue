<template>
  <div class="partners">
    <div class="container">
      <div class="partners-inner">
        <div class="partner-title">Our Partners</div>
        <div class="diplomat-row">
          <div class="col-3" v-for="item in port" :key="item.id">
            <div class="partners-card">
              <div class="partners-card__img">
                <img :src="item.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      port: [
        { id: 1, img: require("~/assets/icons/part-1.svg") },
        { id: 2, img: require("~/assets/icons/part-2.svg") },
        { id: 3, img: require("~/assets/icons/part-3.svg") },
        { id: 4, img: require("~/assets/icons/part-4.svg") },
      ],
    };
  },
};
</script>

<style></style>
