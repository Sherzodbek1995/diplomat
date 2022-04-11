<template>
  <div class="side">
    <div class="side-menu">
      <h4 class="side-menu__title">Our programs</h4>
      <nuxt-link class="side-menu__text" to="/academic/it">Bachelor of IT</nuxt-link>
      <nuxt-link class="side-menu__text" to="/academic/economics"
        >Bachelor of Economics</nuxt-link
      >
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
