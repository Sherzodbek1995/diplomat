<template>
  <section class="apply">
    <div class="container">
      <div class="apply-inner">
        <div class="diplomat-row">
          <div class="col-6">
            <div class="apply-programm">
              <label for="cars">Программа</label>

              <select name="students" id="students">
                <option value="volvo">Intertational students</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="apply-programm">
              <label for="cars">Программа</label>

              <select name="students" id="students">
                <option value="volvo">Бакалавр</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="apply-programm">
              <label for="cars">Факультет</label>

              <select name="students" id="students">
                <option value="volvo">Экономика</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="apply-error">
              <p class="error-text">
                Об общем среднем образовании, либо диплома о среднем
                специальном/профессиональном образовании и приложение с оценками (или
                письмо, подтверждающее окончание в этом году)
              </p>
              <div class="error-card">
                <h4 class="error-card__title">Application number</h4>
                <input type="text" placeholder="115151651" class="error-card__input" />
                <h6 class="error-card__text">Abduyaminov Akmal</h6>
                <div class="error-card__btns">
                  <button class="error-card__btn">Aprowed</button>
                  <button class="error-card__btn">Aprowed</button>
                  <button class="error-card__btn">Aprowed</button>
                </div>
                <div class="error-card__check">
                  <button class="btn">Check</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="diplomat-row">
          <div class="col-12">
            <div class="apply-form">
              <h5>Заполните форму:</h5>
              <form>
                <div class="apply-box">
                  <div class="apply-input">
                    <label for="fname">Ф.И.О.</label>
                    <input placeholder="Ф.И.О." type="text" id="fname" name="fname" />
                  </div>
                  <div class="apply-input">
                    <label for="lname">Пол</label>
                    <input
                      placeholder="Серия и номер паспорта"
                      type="text"
                      id="lname"
                      name="lname"
                    />
                  </div>
                </div>
                <div class="apply-box">
                  <div class="apply-input">
                    <label for="fname">Серия и номер паспорта</label>
                    <input
                      placeholder="Серия и номер паспорта"
                      type="text"
                      id="fname"
                      name="fname"
                    />
                  </div>
                  <div class="apply-input">
                    <label for="lname">Место жительства</label>
                    <input
                      placeholder="Место жительства"
                      type="text"
                      id="lname"
                      name="lname"
                    />
                  </div>
                </div>
                <div class="apply-box">
                  <div class="apply-input">
                    <label for="fname">Номер телефона</label>
                    <input
                      placeholder="Номер телефона"
                      type="text"
                      id="fname"
                      name="fname"
                    />
                  </div>
                  <div class="apply-input">
                    <label for="lname"
                      >Номер телефона (зарегестрированный в Telegram)</label
                    >
                    <input
                      placeholder="Номер телефона (зарегестрированный в Telegram)"
                      type="text"
                      id="lname"
                      name="lname"
                    />
                  </div>
                </div>
                <div class="apply-box">
                  <div class="apply-input">
                    <label for="fname">E-mail</label>
                    <input placeholder="E-mail" type="text" id="fname" name="fname" />
                  </div>
                </div>
                <button type="button" class="btn apply-box__btn">Next</button>
              </form>
            </div>
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
