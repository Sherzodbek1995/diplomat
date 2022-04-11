<template>
  <div class="diplomat-navbar">
    <div class="menu-top">
      <div class="container">
        <div class="diplomat-row">
          <div class="col-12">
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
      </div>
    </div>
    <div class="menu-bottom">
      <div class="container">
        <div class="diplomat-row">
          <div class="col-12">
            <div class="menu-bottom__inner">
              <div class="menu-brand">
                <nuxt-link to="/"
                  ><img src="../assets/img/Logo-3.png" alt=""
                /></nuxt-link>
              </div>
              <nav>
                <ul>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/about/univercity"
                      >About Us</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/academic/it"
                      >Academic part</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/reception/international"
                      >Reception</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/life/console"
                      >Life in Diplomat</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/research/research"
                      >Research</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/news/news"
                      >News and Events</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/about">Quick Links</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/contacts/contacts"
                      >Our contacts</nuxt-link
                    >
                  </li>
                </ul>
              </nav>
              <button class="menu-toggle btn">
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
