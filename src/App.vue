<script setup>
import Header from './components/Header.vue'
import MainContainer from './components/Container.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <Home />
      <MainContainer />
      <About />
      <Contact />
    </main>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  main {
    padding: 0 1rem;
  }
}
</style>