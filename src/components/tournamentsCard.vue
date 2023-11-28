<template>
  <div class="item-block">
    <div class="item-flex__block">
      <div class="image">
        <img :src="image" class="img-fluid">
      </div>
      <div class="info">
        <span class="name">{{ title }}</span>
        <span class="date">{{ date }}</span>
        <span class="info-link"><a :href="url" target="_blank">Информация</a></span>
      </div>
      <div class="prize">
        <span>Призовой фонд:</span>
        <span class="num">{{ prize }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tournamentsCard",

  props: {
    title: String,
    date: String,
    image: String,
    prize: String,
    url: String,
  },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.item-block {
  margin-top: 8px;
  background: rgba(65,65,94,0.4);
  backdrop-filter: blur(19px);
}
.item-flex__block {
  padding: 30px 30px 30px 60px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.name {
  color: #5F5FA6;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
}
.date {
  color: white;
  margin-bottom: 10px;
}
.info-link a {
  color: #e32124;
  cursor: pointer;
}
.prize {
  background-image: url(../assets/bg-t-red.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 347px;
  height: 103px;
  padding: 15px 0;
  color: white;
  font-size: 22px;
}
.prize .num {
  font-size: 36px;
  font-weight: 900;
}
.tournament__list .item-block span {
  display: block;
}
@media (max-width: 1550px) {
  .image {
    width: 175px;
  }
}
@media (max-width: 1350px) {
  .image {
    width: 150px;
  }
  .name {
    font-size: 20px;
  }
  .prize {
    padding: 0;
    width: 150px;
    height: 45px;
  }
  .prize .num {
    font-size: 18px;
  }
  .prize span {
    margin-top: 2px;
    font-size: 12px;
  }
  .name {
    font-size: 16px;
  }
  .date {
    font-size: 14px;
  }
  .info-link a {
    font-size: 14px;
  }
}
@media (max-width: 1000px) {
  .image {
    display: none;
  }
  .info {
    text-align: left;
  }
}
@media (max-width: 880px) {
  .item-flex__block {
    padding: 30px 30px 30px 30px;
  }
}
@media (max-width: 500px) {
  .prize {
    display: none;
  }
  .item-flex__block {
    display: block;
    justify-content: normal;
  }
  .info {
    text-align: center;
  }
}
</style>