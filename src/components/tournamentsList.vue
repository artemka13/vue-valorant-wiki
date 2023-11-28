<template>
  <section class="tournaments-block">

    <div class="container">
      <div class="head-block">
        Не пропусти турниры
      </div>
      <div class="tournament__list">
        <TournamentsCard v-for="tournaments in filteredTournaments"
                         :key="tournaments.id"
                         :title="tournaments.title"
                         :date="tournaments.date"
                         :image="tournaments.image"
                         :prize="tournaments.prize"
                         :url="tournaments.url" />
        <input v-model="searchQuery" placeholder="Найти турнир..." />
      </div>
      <div class="clearfix">

      </div>
    </div>
  </section>
</template>

<script>
import TournamentsCard from "@/components/tournamentsCard";

export default {
  name: "tournamentsList",
  components: {TournamentsCard},
  data() {
    return {
      tournamentsList: [
        {
          id: 1,
          title: "Valorant Deadlock's Domain",
          date: "22 Апреля",
          image: require("../assets/val-logot2.png"),
          prize: "20 000 руб.",
          url: "https://www.challengermode.com/s/TopAgents/tournaments/21adac24-a1c8-4794-713f-08dbec30b584",
        },
        {
          id: 2,
          title: "Valorant KFO Series IC | 2v2",
          date: "23 Апреля",
          image: require("../assets/val-logot2.png"),
          prize: "50 000 руб.",
          url: "https://www.challengermode.com/s/killingfrequency/tournaments/94b53006-6267-4250-e83e-08dbda150f9a",
        },
        {
          id: 3,
          title: "Valorant Cybersports Premium Cup",
          date: "29 Апреля",
          image: require("../assets/val-logot2.png"),
          prize: "20 000 руб.",
          url: "https://www.challengermode.com/s/Nohook/tournaments/67944000-d872-4c73-5520-08dbe071ed5b",
        },
        {
          id: 4,
          title: "Valorant MixCup 5x5",
          date: "28 Мая",
          image: require("../assets/val-logot2.png"),
          prize: "50 000 руб.",
          url: "https://www.challengermode.com/s/TopAgents/tournaments/718e9347-eab0-42ce-7169-08dbec30b584",
        },
        {
          id: 5,
          title: "Valorant | Saturday Showdown | Team Bloodsport",
          date: "28 Июня",
          image: require("../assets/val-logot2.png"),
          prize: "30 000 руб.",
          url: "https://www.challengermode.com/s/teambloodsport/tournaments/8403a8f3-7424-4720-7120-08dbec30b584",
        },
      ],
      searchQuery: "",
    };
  },
  computed: {
    latestTournaments() {
      return this.tournamentsList.slice(-4)
    },
    filteredTournaments() {
      return this.tournamentsList.filter((tournament) => {
        return tournament.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.tournaments-block {
  padding: 100px 0;
  background-image: url(../assets/gambit-scaled.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.container {
  position: relative;
  margin-left: 200px;
  margin-right: 200px;
}
.head-block {
  position: relative;
  transform: rotate(0);
  font-size: 28px;
  font-weight: 700;
  top: 0;
  left: 0;
  color: white;
  text-align: center;
  margin-bottom: 30px;
}
.head-block:before {
  content: "";
  display: none;
  position: absolute;
  width: 70%;
  height: 1px;
  left: 100%;
  top: 50%;
  margin-left: 25px;
  background: #E30B0F;
}
.head-block:after {
  content: "";
  display: block;
  width: 100px;
  height: 70px;
  background-image: url(../assets/icons/free-icon-tournament-3069131.png);
  position: absolute;
  transform: rotate(0);
  left: 50%;
  top: 0;
  margin-left: -50px;
  margin-top: -70px;
  background-repeat: no-repeat;
  background-size: contain;
}
.tournament__list {
  width: 100%;
  float: right;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
@media (max-width: 1200px) {
  .tournaments-block {
    background-repeat: repeat;
    background-attachment: scroll;
    background-size: cover;
  }
}
@media (max-width: 1550px) {
  .tournament__list {
    max-width: none;
  }
}

input {
  padding: 10px;
  background-color: transparent;
  border: 1px solid red;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  margin-top: 60px;
  text-align: center;
}

input:focus {
  outline: none;
  box-shadow: 0 0 5px red;
}
@media (max-width: 880px) {
  .container {
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media (max-width: 650px) {
  .container {
    margin-left: 50px;
    margin-right: 50px;
  }
  input {
    font-size: 12px;
  }
}
</style>