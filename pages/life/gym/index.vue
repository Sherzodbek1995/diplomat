<template>
  <section class="bachelor">
    <RouteWay title="Bachelor of Economics" text="Bachelor of Economics" />
    <div class="container">
      <div class="bachelor-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="univercity-content">
              <div class="univercity-content__img">
                <img src="~/assets/img/gym.png" alt="" />
              </div>
              <div class="univercity-content__title">About</div>
              <div class="univercity-content__text">
                The Sport Centre oversees various student activities and events. MDIS
                Tashkent Sport Centre has excellent indoor and outdoor sports facilities
                that are designed to suit the needs of the students.
              </div>
              <div class="univercity-content__text">
                Sport Centre provides a whole range of sports and fitness activities such
                as badminton, basketball, football, gymnastics, handball, swimming,
                tennis, ping-pong and volleyball. The indoor Sport Centre is a beautiful
                two storey building consisting of a tennis court and an indoor stadium for
                handball, basketball, mini-football and volleyball with the capacity of
                500 spectators. In addition to the gym which is located on the second
                floor of this complex, there is an Olympic sized indoor swimming pool.
              </div>
              <div class="univercity-content__text">
                Outdoor sport facilities include athletics track, basketball, volleyball
                courts and football field. The football field is laid with artificial
                grass where students can enjoy a full season of playing on a lush grass
                field. The Sport Centre provides basic amenities like changing rooms,
                cloakroom, shower rooms and a medical room.
              </div>
              <table class="gym-table">
                <tr>
                  <th colspan="1">SPORT TYPE</th>
                  <th colspan="2">REQUIRED DOCUMENTS</th>
                </tr>
                <tr>
                  <td rowspan="5">SWIMMING</td>
                </tr>
                <tr>
                  <td>
                    Request Form to the Rector (read the Provision before submitting the
                    form)
                  </td>
                </tr>
                <tr>
                  <td>Medical Certificate from Dermatologist</td>
                </tr>
                <tr>
                  <td>One (1) photo 3х4 cm</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="col-3">
            <StuSide />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
