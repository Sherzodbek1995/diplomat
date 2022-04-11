<template>
  <section class="why">
    <div class="container">
      <div class="why-inner">
        <div class="diplomat-row">
          <div class="col-3">
            <div class="why-card">
              <div class="why-card__img">
                <img src="../assets/img/why-1.png" alt="" />
              </div>
              <a href="" class="why-card__text">
                <span>view Gallery</span>
                <div class="why-card__text-img">
                  <img src="../assets/icons/next-arrow.png" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div class="col-4">
            <div class="why-video__img">
              <img src="../assets/img/why-2.png" alt="" />
              <div class="why-video__play">
                <div class="video-oval">
                  <div class="video-oval__in">
                    <div class="video-oval__blue">
                      <img src="../assets/icons/Polygo.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="why-content">
              <h6 class="why-content__commit">W H Y C H O O S E U S</h6>
              <h2 class="why-content__title">Why Diplomat University</h2>
              <p class="why-content__text">
                As Diplomat’s land-grant university, we are driven to do great things.
                It’s our passion to transform the lives of our student Wildcats and to
                solve some of the biggest challenges facing our state and the world.
              </p>
              <div class="graduate">
                <div class="graduate-item">
                  <div class="graduate-item__link">
                    <img src="../assets/icons/yes.svg" alt="" class="graduate__icon" />
                    <span>Graduate Programs</span>
                  </div>
                  <div class="graduate-item__link">
                    <img src="../assets/icons/yes.svg" alt="" class="graduate__icon" />
                    <span>Undergraduate Programs</span>
                  </div>
                  <div class="graduate-item__link">
                    <img src="../assets/icons/yes.svg" alt="" class="graduate__icon" />
                    <span>Doctoral Degrees</span>
                  </div>
                </div>
                <div class="graduate-item">
                  <div class="graduate-item__link">
                    <img src="../assets/icons/yes.svg" alt="" class="graduate__icon" />
                    <span>International Hubs</span>
                  </div>
                  <div class="graduate-item__link">
                    <img src="../assets/icons/yes.svg" alt="" class="graduate__icon" />
                    <span>Alumni & Giving</span>
                  </div>
                  <div class="graduate-item__link">
                    <img src="../assets/icons/yes.svg" alt="" class="graduate__icon" />
                    <span>Global Students</span>
                  </div>
                </div>
              </div>
              <div class="results">
                <div class="results-item">
                  <div class="result-item__plus">+</div>
                  <countTo
                    class="result-item__num"
                    :startVal="0"
                    :endVal="76"
                    autoplay
                    :duration="2500"
                    ><h2></h2>
                  </countTo>
                  <span class="result-item__text">Years Of Experience</span>
                </div>
                <div class="results-item">
                  <div class="result-item__plus">+</div>

                  <div class="dev">
                    <countTo
                      class="result-item__num"
                      :startVal="0"
                      :endVal="25"
                      :duration="2000"
                    >
                    </countTo
                    ><span class="result-item__num">K</span>
                  </div>
                  <span class="result-item__text">Global Students</span>
                </div>
              </div>
              <Button text="READ  MORE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {};
  },
};
</script>

<style></style>
