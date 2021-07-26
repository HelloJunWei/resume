<template>
  <div id="tsparticles">
  </div>
  <div class="banner">
   reqeqweqwk 
  </div>
  <img alt="vue logo" src="./assets/logo.png">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { tsParticles } from 'tsparticles';
export default defineComponent({
  name: 'App',
  mounted() {
    tsParticles
    .loadJSON("tsparticles", "static/particles.json")
    .then((container) => {
      console.log("callback - tsparticles config loaded" + container);
    })
    .catch((error) => {
      console.error(error);
    });

  }
});
</script>

<style>
#app {
  margin: 0;
}
#tsparticles {
  z-index: -10px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #323840;
}
.banner{
  width: 300px;
  height: 100vh;
  background-color: white;
}
</style>
