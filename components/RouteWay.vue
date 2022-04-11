<template>
  <section class="route">
    <div class="container">
      <div class="diplomat-row">
        <div class="col-12">
          <div class="route-inner">
            <h5 class="route-title">{{ title }}</h5>
            <p class="route-text">
              <span>Home </span> <span>/</span> <span>About Us</span> <span>/</span>
              {{ text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.route {
  height: 225px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("~/assets/img/route.png");
}
.route-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 225px;
}
.route-title {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 50px;
  text-transform: capitalize;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  width: 980px;
  text-overflow: ellipsis;
}
.route-text span {
  opacity: 0.72;
  margin-right: 5px;
}
.route-text {
  font-family: "Effra", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  width: 530px;
  text-overflow: ellipsis;
  text-transform: capitalize;
}
</style>
