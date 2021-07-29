<template>
  <BigBackground />
  <Banner />
  <SelfInstruction />
  <TitleSection title="工作經驗"/>
  <GeomertyBackground>
    <Experience />
  </GeomertyBackground>
  <TitleSection title="Github"/>
  <GithubPage />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AOS from 'aos'

import Banner from './components/Banner.vue'
import BigBackground from './components/BigBackground.vue'
import SelfInstruction from './components/SelfInstruction.vue'
import TitleSection from './components/TitleSection.vue'
import Experience from './components/Experience.vue'
import GithubPage from './components/GithubPage.vue'
import Footer from './components/Footer.vue'
import GeomertyBackground from './components/GeometryBackground.vue'

export default defineComponent({
  name: 'App',
  components: {
    Banner,
    BigBackground,
    TitleSection,
    SelfInstruction,
    GeomertyBackground,
    Experience,
    GithubPage,
    Footer
  },
  setup () {
    // init AOS
    AOS.init({
      duration: 600,
    })
  }
})
</script>

<style>
#app {
  margin: 0;
  font-family: Roboto,sans-serif !important;
}
</style>
