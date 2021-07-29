<template>
  <div class="swiper-container my-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide-center" v-for="item in githubData" :key="getKey(item.id)">
        <div class="card" @click="openLink(item.html_url)">
          <img src="../assets/img/github_big.webp" alt="github" class="logo">
          <hr>
          <h1>{{ item.name }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, inject, onMounted  } from 'vue'
import { GithubData } from '../api'
import Swiper, { Autoplay } from 'swiper'
Swiper.use([ Autoplay ])
export default defineComponent({
  name: 'MobileGithubPage',
  props: {
    githubData: {
      type: Object as PropType<Array<GithubData>>,
      required: true
    }
  },
  setup() {
    const initSwiper = () => {
      setTimeout(() => {
        const swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 1500,
          }
        })
      }, 500)
    }

    
    const getKey = (id: number) => {
      return `${id.toString()}_mobile`
    }

    onMounted(() => {
      initSwiper()
    })

    const openLink = inject('openLink')

    return {
      getKey,
      openLink
    }
  }
});
</script>

<style scoped>
.my-container {
  margin: 50px 0;
}
.slide-center {
  display: flex;
  justify-content: center;
}
.card {
  position: relative;
  cursor: pointer;
  box-shadow: 0 5px 50px 0 rgb(0 0 0 / 15%);
  background-color: #eeecea;
  border-radius: 20px;
  margin: 50px 0;
  width: 80%;
  border: solid 6px #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.card hr {
  border-top: 1px solid #979797;
  width: 100px;
  margin: 15px 0;
}
.card h1 {
  margin-bottom: 30px;
}
.card p {
  font-weight: 400;
  font-size: 17px;
  text-align: center;
}

.logo {
  width: 60px;
  position: relative;
  top: -10px;
}
</style>

