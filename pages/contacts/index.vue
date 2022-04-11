<template>
  <section class="contacts">
    <RouteWay title="Our contacts" text="Our contacts" />
    <div class="container">
      <div class="bachelor-inner">
        <div class="diplomat-row">
          <div class="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11986.725615568173!2d69.27583360000003!3d41.31579401705809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3e5e65ffd7%3A0xee17206ce2dc4f57!2z0L_Quy4g0KPRgNC00LA!5e0!3m2!1sru!2s!4v1649162278234!5m2!1sru!2s"
              width="100%"
              height="650"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="adress">
              <div class="adress-content">
                <p>Address:</p>
                <h6>Bunyodkor street 9, Chilanzar district, Tashkent, Uzbekistan</h6>
              </div>
              <div class="adress-content">
                <p>Email:</p>
                <h6>info@diplomat.university</h6>
              </div>
              <div class="adress-content">
                <p>Телефон:</p>
                <h6>+998 99 777 77 77</h6>
              </div>
            </div>
            <div class="contacts-content">
              <div class="contacts-content__title">
                Dear students, professors, prospective students, and the visitors of our
                website,
              </div>
              <div class="contacts-content__title">
                For your enquiries and getting support please email to contacts below.
                Please note that emails sent to the wrong contacts will not be considered.
                Please ensure that your issue is addressed to the relevant contact.
              </div>
            </div>

            <table class="adress-table">
              <tr class="table-one">
                <th>Service</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>Academic affairs</td>
                <td>academicaffairsdiplomatuniversity.org</td>
              </tr>
              <tr>
                <td>Admission</td>
                <td>academicaffairsdiplomatuniversity.org</td>
              </tr>
              <tr>
                <td>HR</td>
                <td>academicaffairsdiplomatuniversity.org</td>
              </tr>
              <tr>
                <td>Legal help</td>
                <td>academicaffairsdiplomatuniversity.org</td>
              </tr>
              <tr>
                <td>IT help</td>
                <td>academicaffairsdiplomatuniversity.org</td>
              </tr>
              <tr>
                <td>Other questions</td>
                <td>academicaffairsdiplomatuniversity.org</td>
              </tr>
            </table>
          </div>
          <div class="col-5">
            <form class="adress-form">
              <h3 class="form-title">Form for direct letter</h3>
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email the address" />
              <div class="adress-patch">
                <div class="adress-group">
                  <input type="checkbox" id="yes" name="yes" value="согласен" />
                  <label for="yes"
                    >Я согласен с условиями обработки персональных данных</label
                  >
                </div>
                <button type="button" class="btn adress-btn">Send</button>
              </div>
            </form>
          </div>
          <div class="col-7">
            <div class="adress-img"><img src="~/assets/img/adress.png" alt="" /></div>
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

<style scoped>
.adress-table th {
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #020105;
}

.adress-table td {
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #020105;
}

.adress-table th,
td {
  background: #ffffff;
  border: 0.5px solid rgba(45, 108, 177, 0.32);
  box-sizing: border-box;
  padding: 14px 24px;
}

.adress-table th,
td:nth-child(2) {
  width: 732px;
}

.adress-table th,
td:nth-child(1) {
  width: 342px;
}

.table-one th {
  background: rgba(45, 108, 177, 0.1);
}

.adress-table {
  margin: 56px 0 96px;
}
</style>
