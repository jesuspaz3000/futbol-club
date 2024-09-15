<script>
export default {
  name: 'MainContainer',
  data() {
    return {
      qualityItems: [
        { title: 'Passion', description: 'How to love something and want to do it as much as possible' },
        { title: 'Discipline', description: 'Doing things that are tough to get better' },
        { title: 'Responsibility', description: 'On the field, at practice' },
        { title: 'Determination', description: 'How to impart your will in the game' }
      ],
      statistics: [
        { value: '+12 per year', label: 'Tournaments' },
        { value: 'Games', label: 'State Cup appearances, ID camps, Showcases' },
        { value: '+60', label: 'Players' },
        { value: '+8', label: 'Trainers' }
      ]
    }
  }
}
</script>

<template>
  <main class="main-container">
    <section class="qualities">
      <h1 class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      <h1 class="dark">Quisque convallis metus vel porttitor pharetra</h1>
      <div class="list">
        <div class="list-item" v-for="(item, index) in qualityItems" :key="index">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>
    <section class="activities">
      <div class="activities-content">
        <h1>Our activities</h1>
        <img src="../assets/pepe-defensa.jpg" alt="slide">
      </div>
    </section>
    <section class="description">
      <div class="text">
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis metus vel porttitor pharetra. Praesent ornare mi nisi, quis consectetur nisi auctor euismod. Vestibulum facilisis luctus lacus, fringilla lobortis augue molestie tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat tempus malesuada. Sed bibendum eros mauris, ut laoreet mi tincidunt nec. Vestibulum eu iaculis tellus. Proin vel finibus nisl, at faucibus leo. Nulla eu rutrum lectus. Proin orci purus, auctor ut dui nec, gravida porta elit.</p>
      </div>
      <div class="img">
        <img src="../assets/balon-futbol.jpg" alt="balon">
      </div>
    </section>
    <section class="services">
      <div class="img">
        <img src="../assets/balon-futbol.jpg" alt="balon">
      </div>
      <div class="text">
        <div class="text-description">
          <h1>We have the best service</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis metus vel porttitor pharetra. Praesent ornare mi nisi, quis consectetur nisi auctor euismod. Vestibulum.</p>
        </div>
        <div class="text-statistics">
          <div class="data" v-for="(stat, index) in statistics" :key="index">
            <h2>{{ stat.value }}</h2>
            <h3>{{ stat.label }}</h3>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* El CSS se mantiene igual que en la versión anterior */
.main-container {
  max-width: 100%;
  margin: 0 15%;
}

.qualities {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem 0;
}

.qualities h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 100;
  text-align: center;
}

.qualities h1.light { color: rgb(101, 101, 101); }
.qualities h1.dark { 
  margin-top: 1px;
  color: rgb(113, 2, 9);
}

.qualities .list {
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

.list-item {
  flex: 1;
  padding: 0 10px;
  text-align: center;
}

.list-item h2 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  color: rgb(113, 2, 9);
  font-weight: 100;
}

.list-item p {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: rgb(101, 101, 101);
}

.activities { margin-top: 2rem; }

.activities-content {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;
}

.activities-content h1 {
  font-weight: normal;
  font-size: 3rem;
  padding-top: 1rem;
  color: rgb(113, 2, 9);
}

.activities-content img { width: 100%; }

.description {
  display: flex;
  background: rgb(113, 2, 9);
  color: white;
  padding: 6rem;
  margin-top: 2rem;
}

.description .text {
  flex: 1;
  padding-right: 5rem;
}

.description .text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: normal;
}

.description .img {
  flex: 0 0 40%;
  max-width: 40%;
}

.description .img img, .services .img img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.services {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.services .img {
  flex: 0 0 40%;
  max-width: 40%;
  height: 50vh;
  overflow: hidden;
  position: relative;
}

.services .img img {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  object-fit: cover;
}

.services .text {
  padding-left: 4rem;
  padding-right: 2rem;
}

.services .text .text-description h1 {
  font-weight: normal;
  font-size: 3rem;
  color: rgb(113, 2, 9);
}

.services .text .text-description p {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: rgb(101, 101, 101);
}

.services .text .text-statistics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.services .text .text-statistics .data h2 { color: rgb(113, 2, 9); }
.services .text .text-statistics .data h3 {
  font-weight: normal;
  color: rgb(101, 101, 101);
}

@media (max-width: 1200px) {
  .main-container { margin: 0 10%; }
  .qualities h1 { font-size: 2rem; }
  .list-item h2 { font-size: 1.5rem; }
  .list-item p { font-size: 1rem; }
  .activities-content h1, .services .text .text-description h1 { font-size: 2.5rem; }
  .description, .services { flex-direction: column; }
  .description .text, .description .img, .services .img, .services .text { 
    flex: 1;
    max-width: 100%;
    padding: 2rem 0;
  }
  .services .img { height: auto; }
  .services .img img {
    position: static;
    transform: none;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .main-container { margin: 0 5%; }
  .qualities .list { 
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .list-item { width: 100%; }
  .description { padding: 3rem; }
  .services .text .text-statistics { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .qualities h1 { font-size: 1.5rem; }
  .activities-content h1, .services .text .text-description h1 { font-size: 2rem; }
  .description { padding: 2rem; }
  .description .text h1 { font-size: 2rem; }
}
</style>