<script>
export default {
  name: 'ClubHeader',
}
</script>

<template>
  <header class="club-header">
    <div class="logo-container">
      <img src="../assets/logo-futbol2.jpg" alt="Picapiedras Futbol Club" class="logo">
      <div class="club-name">
        <h1>PICAPIEDRAS Futbol Club</h1>
        <p>Goals for College</p>
      </div>
    </div>
    <nav class="main-nav">
      <a href="#the-club">The Club</a>
      <a href="#programas">Programas</a>
      <a href="#competitive-belief">Competitive Belief</a>
      <a href="#elite-teams">Elite Teams</a>
    </nav>
  </header>
</template>

<style scoped>
.club-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 15%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;
  margin-right: 1rem;
}

.club-name {
  display: flex;
  flex-direction: column;
}

.club-name h1 {
  font-size: 2rem;
  font-family: var(--font-family-header);
  font-weight: 600;
  color: rgb(113, 2, 9);
  margin: 0;
}

.club-name p {
  font-size: 1.2rem;
  font-family: var(--font-family-header);
  font-weight: 600;
  color: rgb(113, 2, 9);
  margin: 0;
  padding: 0;
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  text-decoration: none;
  color: rgb(113, 2, 9);
  font-weight: 500;
  font-size: 1.4rem;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: rgba(113, 2, 9, 0.7);
}

@media (max-width: 1024px) {
  .club-header {
    padding: 0.5rem 2%;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  .club-name h1 {
    font-size: 1.5rem;
  }

  .club-name p {
    font-size: 1rem;
  }

  .main-nav a {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .club-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 5%;
  }

  .logo-container {
    margin-bottom: 1rem;
  }

  .main-nav {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .main-nav a {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 50px;
    height: 50px;
  }

  .club-name h1 {
    font-size: 1.2rem;
  }

  .club-name p {
    font-size: 0.9rem;
  }

  .main-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-nav a {
    margin-bottom: 0.5rem;
  }
}
</style>