<template>
  <div class="side">
    <div class="side-menu">
      <h4 class="side-menu__title">About Us</h4>
      <nuxt-link class="side-menu__text" to="/about/univercity">University</nuxt-link>
      <nuxt-link class="side-menu__text" to="/about/rectors"
        >Rector's congratulations</nuxt-link
      >
      <nuxt-link class="side-menu__text" to="/about/mission">Our mission</nuxt-link>
      <nuxt-link class="side-menu__text" to="/about/sitructure">Structure</nuxt-link>
      <nuxt-link class="side-menu__text" to="/about/team">Our team</nuxt-link>
      <nuxt-link class="side-menu__text" to="/about/policies"
        >Policies and regulations</nuxt-link
      >
      <nuxt-link class="side-menu__text" to="/about/partner">Our Partners</nuxt-link>
    </div>
    <div class="side-title">Diplomat events</div>
    <div class="side-box" v-if="side.length">
      <div class="side-item" v-for="item in side" :key="item.id">
        <div class="side-item__img"><img :src="item.img" alt="" /></div>
        <div class="side-item__title">{{ item.title }}</div>
        <div class="side-item__date">
          <div class="date-text">04 march, 2022</div>
          <div class="date-plan">Seminar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      side: [
        {
          id: 1,
          img: require("~/assets/img/side-1.png"),
          title: "Canadians push research ethics in undergraduate classes",
        },
        {
          id: 2,
          img: require("~/assets/img/side-2.png"),
          title: "Canadians push research ethics in undergraduate classes",
        },
        {
          id: 3,
          img: require("~/assets/img/side-3.png"),
          title: "Canadians push research ethics in undergraduate classes",
        },
      ],
    };
  },
};
</script>

<style></style>
