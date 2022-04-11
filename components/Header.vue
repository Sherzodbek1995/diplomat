<template>
  <header>
    <div class="menu-top">
      <div class="container">
        <div class="menu-top__inner">
          <div class="menu-content__pack">
            <div class="menu-tel">
              <div class="menu-tel__img">
                <img src="../assets/icons/tel.svg" alt="" />
              </div>
              <div class="menu-tel__num">+998 99 571 66 66</div>
            </div>
            <div class="menu-social">
              <div class="menu-social__img">
                <img src="../assets/icons/telegram.png" alt="" />
              </div>
              <div class="menu-social__img">
                <svg class="icon icon-youtube">
                  <use xlink:href="#icon-youtube"></use>
                </svg>
                <img src="../assets/icons/youtube.png" alt="" />
              </div>
              <div class="menu-social__img">
                <img src="../assets/icons/facebook.png" alt="" />
              </div>
              <div class="menu-social__img">
                <img src="../assets/icons/insta.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="menu-content__pack">
            <button type="button" class="btn menu-content__btn">Apply Now</button>
            <button class="btn menu-content__search" type="button">
              <img src="../assets/icons/search.svg" alt="" />
            </button>
            <select id="lang">
              <option active value="Eng">English</option>
              <option value="Rus">Russian</option>
              <option value="Uzb">Uzbek</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-bottom">
      <div class="container">
        <div class="menu-bottom__inner">
          <div class="menu-brand">
            <nuxt-link to="/"><img src="../assets/img/Logo.png" alt="" /></nuxt-link>
          </div>
          <nav>
            <RecuirciveMenuItem />
          </nav>
          <button class="menu-toggle btn">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
    </div>

    <div class="header-content">
      <div class="container">
        <div class="header-content__inner">
          <p class="header-content__commit">BEST University IN THIS TOWN</p>
          <div class="header-content__title">Diplomat University</div>
          <div class="header-content__text">
            Have you been admitted to our next great class? Start the countdown by
            completing your enrollment and meeting other incoming Wildcats.
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import RecuirciveMenu from "./RecuirciveMenu.vue";
export default { components: { RecuirciveMenu } };
</script>

<style scoped></style>
