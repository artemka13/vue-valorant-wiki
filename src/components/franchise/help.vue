<script>

</script>

<template>
  <section class="help">
    <div class="help__part">
      <div class="help__image">
        <img src="../../assets/c48043bdafac8b53_original.jpeg" alt="">
      </div>
      <div class="help__desc">
        <div class="help__desc-unit">
          <h2 class="help__name">
            Присоединяйтесь! </h2>
          <h6 class="help__text">
            Если есть вопросы, можете звонить или писать нам!</h6>
          <a class="link help__phone" href="tel:+7 783 299-46-02">
            +7 783 299-46-02</a>
          <div class="help__mail">
            <a class="link" href="mailto:help@valowiki.ru">
              help@valowiki.ru</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.help {
  background: white;
}
.help__part {
  display: flex;
  align-items: stretch;
}
.help__image {
  width: 49%;
}
.help__image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.help__desc {
  padding: 55px 65px;
  color: #212121;
  display: flex;
  align-items: center;
  width: 50%;
}
.help__name {
  font-size: 3.75rem;
  line-height: 110%;
  margin: 45px 0;
}
.help__text {
  margin-bottom: 30px;
  font-size: 1.5rem;
}
.help__phone {
  font-weight: 700;
  margin: 42px 0 5px;
  font-size: 26px;
}
.link, a {
  text-decoration: none;
  color: #212121;
}
.help__mail {
  margin-bottom: 20px;
  margin-top: 8px;
}
@media (max-width: 1400px) {
  .help__name {
    font-size: 2.8rem;
    margin: 45px 0;
  }
}
@media (max-width: 1300px) {
  .help__name {
    font-size: 2.5rem;
    line-height: 110%;
    margin: 45px 0;
  }
  .help__text {
    margin-bottom: 30px;
    font-size: 1.2rem;
  }
}
@media (max-width: 1050px) {
  .help__desc {
    width: 100%;
    text-align: center;
    justify-content: center;
    max-width: 100%;
    padding-bottom: 0;
  }
  .help__part {
    display: block;
  }
  .help__image {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .help__name {
    font-size: 2.2rem;
    line-height: 110%;
    margin: 45px 0;
  }
  .help__text {
    font-size: 1rem;
  }
}
@media (max-width: 400px) {
  .help__name {
    font-size: 1.6rem;
    line-height: 110%;
    margin: 45px 0;
  }
}
@media (max-width: 300px) {
  .help__name {
    font-size: 1.2rem;
    line-height: 110%;
    margin: 45px 0;
  }
}
</style>