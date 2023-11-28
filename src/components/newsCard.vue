<template>
  <div class="news-card">
    <img :src="image" alt="news image">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="url">Читать далее...</a>
  </div>
</template>

<script>
export default {
  name: "newsCard",

  props: {
    title: String,
    description: String,
    image: String,
    url: String,
  },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.news-card {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 1rem;
  background-color: #020213;
  color: white;
  width: 400px;
}

.news-card img {
  width: 100%;
  margin-bottom: 1rem;
  max-height: 400px;
}

.news-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.news-card p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.news-card a {
  display: block;
  text-align: center;
  color: white;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  background-image: url(../assets/btn-bg-red.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 25px;
}
</style>