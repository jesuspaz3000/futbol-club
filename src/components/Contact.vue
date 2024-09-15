<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'ClubContact',
  components: {
    FontAwesomeIcon
  }
}
</script>

<template>
  <footer class="club-contact">
    <div class="contact-content">
      <div class="logo">
        <div class="logo-content">
            <img src="../assets/logo-futbol2.jpg" alt="Picapiedras Futbol Club">
            <div class="club-info">
                <h2>PICAPIEDRAS Futbol Club</h2>
                <p>Goals for College</p>
            </div>
        </div>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis metus vel porttitor pharetra. Praesent ornare mi nisi, quis consectetur nisi auctor euismod.</p>
      </div>
      <div class="follow-us">
        <h3>FOLLOW US</h3>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
          <a href="#" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          <a href="#" aria-label="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          <a href="#" aria-label="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </div>
      </div>
      <div class="contact-info">
        <h3>CONTACT US</h3>
        <p><font-awesome-icon :icon="['fas', 'location-dot']" /> 16th Street Fort Lauderdale</p>
        <p><font-awesome-icon :icon="['far', 'envelope']" /> email@gmail.com</p>
        <p><font-awesome-icon :icon="['fas', 'phone']" /> 982775042</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.club-contact {
  background-color: rgb(113, 2, 9);
  color: white;
  padding: 3rem 15%;
}

.contact-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.logo, .follow-us, .contact-info {
  display: flex;
  flex-direction: column;
}

.logo-content {
  display: flex;
  align-items: center;
  height: 80px;
}

.logo-content img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.club-info {
  margin-left: 1.5rem;
}

.club-info h2 {
  font-size: 2rem;
  font-family: var(--font-family-header);
  font-weight: 600;
  margin: 0;
}

.club-info p {
  font-size: 1.2rem;
  font-family: var(--font-family-header);
  font-weight: 600;
  margin: 0;
}

.description {
  margin-top: 1rem;
  padding-right: 1rem;
  font-size: 1.3rem;
}

.follow-us {
  align-items: center;
}

h3 {
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons {
  display: flex;
  gap: 2rem;
}

.social-icons a {
  font-size: 2rem;
  color: white;
  text-decoration: none;
}

.contact-info p {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-info h3 {
  height: 80px;
  text-align: center;
}

.contact-info svg {
  margin-right: 0.5rem;
}

@media (max-width: 1200px) {
  .club-contact {
    padding: 3rem 5rem;
  }
}

@media (max-width: 1024px) {
  .club-contact {
    padding: 3rem 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .logo, .follow-us, .contact-info {
    align-items: center;
    text-align: center;
  }

  .logo-content {
    justify-content: center;
  }

  .club-info {
    margin-left: 1rem;
  }

  .description {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .club-info h2 {
    font-size: 1.8rem;
  }

  .club-info p, .description {
    font-size: 1.1rem;
  }

  .contact-info p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .logo-content img {
    width: 60px;
    height: 60px;
  }

  .club-info h2 {
    font-size: 1.5rem;
  }

  .club-info p, .description, .contact-info p {
    font-size: 1rem;
  }

  .social-icons a {
    font-size: 1.8rem;
  }
}
</style>