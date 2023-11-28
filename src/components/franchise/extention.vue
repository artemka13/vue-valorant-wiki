<script>

</script>

<template>
  <section class="extention">
    <div class="extention__container">
      <h2 class="extention__title">
        Первые шаги в игровой процесс
      </h2>
      <p class="extention__sub-title">
        Действие игры происходит в будущем с более развитыми технологиями и материалами. <br>
        Один из таких материалов — Радионит, способствовал появлению у некоторых людей особых способностей. <br>
        Также радионит используется в продвинутом снаряжении и оборудовании. <br>
      </p>
      <div class="extention__content-wrapper">
        <img src="../../assets/maxresdefault.jpg" alt="map" class="extention__map-image">
        <div class="extention__column">
          <ul class="extention__numbers-list">
            <li class="extention__numbers-list_el">
              <strong class="extention__numbers-list_el-value">11</strong>
              <span class="extention__numbers-list_el-key">Порталов</span>
            </li>
            <li class="extention__numbers-list_el">
              <strong class="extention__numbers-list_el-value">124</strong>
              <span class="extention__numbers-list_el-key">Шара умений</span>
            </li>
            <li class="extention__numbers-list_el">
              <strong class="extention__numbers-list_el-value">250 000</strong>
              <span class="extention__numbers-list_el-key">Анонимных агентов</span>
            </li>
            <li class="extention__numbers-list_el">
              <strong class="extention__numbers-list_el-value">4000+</strong>
              <span class="extention__numbers-list_el-key">Неизвестных нам мест</span>
            </li>
          </ul>
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
.extention {
  background: #08111f;
  color: #fff;
  overflow: hidden;
  padding: 100px 0;
}
.extention__container {
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  padding: 0 20px;
}
.extention__title {
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 35px;
}
.extention__sub-title {
  font-size: 24px;
  line-height: 1.3;
  max-width: 770px;
}
.extention__content-wrapper {
  position: relative;
  margin-top: 65px;
  width: 100%;
  z-index: 9;
  text-align: center;
}
.extention__map-image {
  margin-bottom: 30px;
  width: 1000px;
}
img {
  max-width: 100%;
}
.extention__column {
  width: 100%;
  padding: 0 15px;
}
.extention__numbers-list {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}
.extention__numbers-list_el {
  margin-right: 20px;
}
.extention__numbers-list_el-value {
  display: block;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 10px;
}
.extention__numbers-list_el-key {
  display: block;
  font-size: 25px;
  line-height: 1.2;
  font-weight: 500;
}
ul {
  list-style: none;
}
@media (max-width: 1099px) {
  .extention__numbers-list {
    flex-wrap: wrap;
  }
  .extention__numbers-list_el {
    margin-bottom: 30px;
    width: 50%;
    margin-right: 0;
  }
  .extention__title {
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .extention__numbers-list_el {
    width: 100%;
  }
  .extention__title {
    font-size: 35px;
  }
}
@media (max-width: 500px) {
  .extention__numbers-list_el-key {
    font-size: 18px;
  }
  .extention__numbers-list_el-value {
    font-size: 30px;
  }
  .extention__title {
    font-size: 30px;
  }
  .extention__sub-title {
    font-size: 16px;
  }
}
@media (max-width: 310px) {
  .extention__title {
    font-size: 20px;
  }
}
</style>