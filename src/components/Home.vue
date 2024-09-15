<script>
export default {
  name: 'ClubHome'
}
</script>

<template>
  <section class="home">
    <div class="content-wrapper">
      <div class="text-content">
        <h1>Lorem ipsum dolor sit ametcte</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis metus vel porttitor pharetra. Praesent ornare mi nisi, quis consectetur nisi auctor euismod.</p>
        <button class="more-info">MORE INFORMATION</button>
      </div>
      <div class="social-icons">
        <a href="#" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a href="#" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="#" aria-label="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(105deg, rgb(113, 2, 9) 50%, transparent 50%), url('../assets/roberto-carlos-pateando.jpg');
  background-size: 100% 100%, auto 100%;
  background-position: left top, calc(100% + 300px) top;
  background-repeat: no-repeat, no-repeat;
  display: flex;
  align-items: center;
  color: white;
}

.content-wrapper {
  width: 100%;
  padding-right: 5%;
  position: relative;
  margin-left: 15%;
  max-width: 35%;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.more-info {
  background-color: white;
  color: rgb(113, 2, 9);
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.more-info:hover {
  background-color: rgb(240, 240, 240);
}

.social-icons {
  margin-top: 2rem;
  bottom: 20px;
  left: 5%;
}

.social-icons a {
  color: white;
  font-size: 2rem;
  margin-right: 25px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: rgb(240, 240, 240);
}

@media (max-width: 1440px) {
  .home {
    background-position: left top, calc(100% + 200px) top;
  }
}

@media (max-width: 1200px) {
  .home {
    background-position: left top, calc(100% + 100px) top;
  }
  
  h1 {
    font-size: 3.5rem;
  }
  
  p {
    font-size: 1.2rem;
  }
}

@media (max-width: 992px) {
  .home {
    background-image: linear-gradient(105deg, rgb(113, 2, 9) 60%, transparent 40%), url('../assets/roberto-carlos-pateando.jpg');
    background-position: left top, right top;
  }
  
  .content-wrapper {
    margin-left: 10%;
    max-width: 50%;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  p {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .home {
    background-image: linear-gradient(rgba(113, 2, 9, 0.9), rgba(113, 2, 9, 0.9)), url('../assets/roberto-carlos-pateando.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .content-wrapper {
    margin-left: 5%;
    max-width: 90%;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  .social-icons a {
    font-size: 1.5rem;
    margin-right: 20px;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    margin-left: 0;
    padding: 0 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .more-info {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
}
</style>