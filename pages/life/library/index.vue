<template>
  <section class="library">
    <RouteWay title="Library" text="Library" />
    <div class="container">
      <div class="bachelor-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="library-content">
              <div class="univercity-content__img">
                <img src="~/assets/img/library.png" alt="" />
              </div>
              <div class="univercity-content__text">
                MDIS Tashkent Learning Resource Centre (LRC) among the leading libraries
                of International Universities in Tashkent. It has been collaborating with
                the libraries at Management Development Institute of Singapore, The
                National Library of the Republic of Uzbekistan. It is equipped in a new
                style with advanced technologies, and has contributed to the development
                of library services in the country.
              </div>
              <div class="univercity-content__text">
                As one of the Institute’s most important sectors, Learning Resource Centre
                aims to create conditions to support academic process. In accordance with
                the international standards Learning Resource Centre consists of a library
                and a copy center that meet international standards.
              </div>

              <table class="library-table">
                <tr>
                  <td rowspan="5">SWIMMING</td>
                  <td>
                    Request Form to the Rector (read the Provision before submitting the
                    form)
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td>Medical Certificate from Dermatologist</td>
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
