import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// Añade los iconos a la biblioteca
library.add(faFacebook, faInstagram, faTwitter, faLinkedin, faLocationDot, faPhone, faEnvelope);

const app = createApp(App);

// Registra el componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');