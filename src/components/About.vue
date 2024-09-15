<script>
export default {
  name: 'ClubAbout'
}
</script>

<template>
  <section class="about">
    <div class="content">
      <h1>ABOUT THE CLUB POLICIES</h1>
      <p>We expect parents and players to follow club policies and behave in a way that positively impacts the team and the club</p>
      <div class="policies-list">
        <div class="column">
          <div class="policy-item">Players evaluation & selection</div>
          <div class="policy-item">Tryouts Guidelines</div>
          <div class="policy-item">Travel Team Creation</div>
          <div class="policy-item">Locations and Fields</div>
          <div class="policy-item">Coach agreement</div>
        </div>
        <div class="column">
          <div class="policy-item">Player uniforms and equipment</div>
          <div class="policy-item">Transportation/ Pickup & drop off</div>
          <div class="policy-item">Social Media Policy</div>
          <div class="policy-item">Drug and alcohol policy</div>
        </div>
        <div class="column">
          <div class="policy-item">Contingency policy</div>
          <div class="policy-item">Club Agreement</div>
          <div class="policy-item">Parent Agreement</div>
          <div class="policy-item">Player Agreement</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: rgb(113, 2, 9);
  color: white;
  padding: 4rem 0;
  text-align: center;
  min-height: 80vh;
}

.content {
  margin: 0 15%;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

p {
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.policies-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 250px;
  margin-bottom: 1rem;
}

.policy-item {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  position: relative;
  padding-left: 2.5rem;
  text-align: left;
}

.policy-item::before {
  content: "•";
  font-size: 4rem;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  color: white;
}

@media (max-width: 1024px) {
  .content {
    margin: 0 10%;
  }
}

@media (max-width: 768px) {
  .content {
    margin: 0 5%;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
  }

  .policies-list {
    flex-direction: column;
  }

  .column {
    width: 100%;
  }

  .policy-item {
    justify-content: center;
    text-align: center;
    padding-left: 0;
  }

  .policy-item::before {
    position: static;
    margin-right: 10px;
    transform: none;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.3rem;
  }

  .policy-item {
    font-size: 1rem;
  }
}
</style>