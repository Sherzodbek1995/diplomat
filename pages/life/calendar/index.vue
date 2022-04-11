<template>
  <section class="calendar">
    <RouteWay title="Academic calendar" text="Academic calendar" />
    <div class="container">
      <div class="transfer-inner">
        <div class="diplomat-row">
          <div class="col-9">
            <div class="calendar-content">
              <table>
                <tr>
                  <td colspan="12" class="calendar-tr">
                    <span>Diplomat University</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="12" class="calendar-tr">
                    <span>Academic Calendar 2021-2022</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="12" class="calendar-tr">
                    <span>Fall Semester 2021</span>
                  </td>
                </tr>
                <tr>
                  <td class="calendar-td"><span>1</span></td>
                  <td colspan="2"><span>Orientation Week (Foundation)</span></td>
                  <td colspan="2"><span>Foundation</span></td>
                  <td colspan="1"><span>September 20 – 25</span></td>
                </tr>
                <tr>
                  <td rowspan="4" class="calendar-td">2</td>
                  <td colspan="2" rowspan="4">Classes Begin</td>
                  <td colspan="2">Foundation</td>
                  <td rowspan="2">October 04</td>
                </tr>

                <tr>
                  <td colspan="2">Bangor University</td>
                </tr>
                <tr>
                  <td colspan="2">University of Sunderland</td>
                  <td>September 27</td>
                </tr>
                <tr>
                  <td colspan="2">Teesside University</td>
                  <td>October 04</td>
                </tr>
                <tr>
                  <td class="calendar-td">3</td>
                  <td colspan="2">Teachers' and Mentors' Day</td>
                  <td colspan="2">-</td>
                  <td>October 01</td>
                </tr>
              </table>
              <div class="academic-socials">
                <div class="academic-content">
                  <p class="academic-content__commit">Поделиться:</p>
                  <a href="" class="academic-content__img"
                    ><img src="~/assets/icons/telegram.svg" alt=""
                  /></a>
                  <a href="" class="academic-content__img"
                    ><img src="~/assets/icons/instagram.svg" alt=""
                  /></a>
                  <a href="" class="academic-content__img"
                    ><img src="~/assets/icons/facebo.svg" alt=""
                  /></a>
                  <a href="" class="academic-content__img"
                    ><img src="~/assets/icons/twitter.svg" alt=""
                  /></a>
                </div>
                <a href="" class="academic-print">
                  <div class="academic-print__img">
                    <img src="~/assets/icons/pechat.svg" alt="" />
                  </div>
                  <span class="academic-print__text">Скачать</span>
                </a>
              </div>
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
