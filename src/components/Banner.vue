<template>
  <div class="flex container banner">
    <img class="photo" alt="Neil Guo" src="../assets/img/me.webp">
    <h1 class="name">Neil Guo</h1>
    <div class="icon-section">
      <a href="https://github.com/HelloJunWei" target="_blank">
        <img class="icon" alt="github" src="../assets/img/github.webp">
      </a>
      <a href="https://www.linkedin.com/in/juinweiiii/" target="_blank">
        <img class="icon" alt="linkedin" src="../assets/img/linkedin.webp">
      </a>
      <a href="https://www.instagram.com/juinweiiiii/" target="_blank">
        <img class="icon" alt="instagram" src="../assets/img/instagram.webp">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Banner',
});
</script>

<style scoped>
.banner {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.name {
  margin-top: 10px;
  font-size: 50px;
  color: #ffff;
}
.icon {
  margin: 0 10px;
  width: 32px;
  height: 32px;
}
</style>
