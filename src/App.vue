<template>
  <BigBackground />
  <Banner />
  <SelfInstruction />
  <TitleSection title="工作經驗"/>
  <section class="content">
    <Experience />
  </section>
  <TitleSection title="Github"/>
  <GithubPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from './components/Banner.vue'
import BigBackground from './components/BigBackground.vue'
import SelfInstruction from './components/SelfInstruction.vue'
import TitleSection from './components/TitleSection.vue'
import Experience from './components/Experience.vue'
import GithubPage from './components/GithubPage.vue'
import AOS from 'aos'

export default defineComponent({
  name: 'App',
  components: {
    Banner,
    BigBackground,
    TitleSection,
    SelfInstruction,
    Experience,
    GithubPage
  },
  setup () {
    AOS.init()
  }
});
</script>

<style>
#app {
  margin: 0;
  font-family: Roboto,sans-serif !important;
}
.content{
  margin-bottom: 100px;
  max-width: 100%;
  margin: 0;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #E2DFDA;
  background-size: contain;
  background-attachment: fixed;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  background-position: center center;
  background-repeat: repeat-y;
  padding-bottom: 110px;
  background-image: url('./assets/img/price.svg');
}
</style>
