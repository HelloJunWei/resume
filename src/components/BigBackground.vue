<template>
  <div id="big-background">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tsParticles } from 'tsparticles'
export default defineComponent({
  name: 'BigBackground',
  setup () {
    tsParticles
    .loadJSON("big-background", "static/particles.json")
    .then((container) => {
      console.log("callback - tsparticles config loaded" + container)
    })
    .catch((error) => {
      alert('init particles fail' + error.message)
    })
  }
})
</script>

<style>
#big-background {
  z-index: -10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #323840;
}
</style>
