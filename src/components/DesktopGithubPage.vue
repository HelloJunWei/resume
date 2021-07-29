<template>
  <div class="page-container">
    <div class="card-row">
      <div class="card" v-for="item in isOddData(false)" :key="item.id" data-aos="fade-right" data-aos-anchor-placement="top-bottom" @click="openLink(item.html_url)">
        <img src="../assets/img/github_big.webp" alt="github" class="logo">
        <hr>
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="card-row mt">
      <div class="card" v-for="item in isOddData(true)" :key="item.id" data-aos="fade-left" data-aos-anchor-placement="top-bottom" @click="openLink(item.html_url)">
        <img src="../assets/img/github_big.png" alt="github" class="logo">
        <hr>
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, PropType, inject  } from 'vue'
import { GithubData } from '../api'


export default defineComponent({
  name: 'DesktopGithubPage',
  props: {
    githubData: {
      type: Object as PropType<Array<GithubData>>,
      required: true
    }
  },
  setup(props: any) {
    const { githubData } = toRefs(props)

    const isOddData = (isOdd: boolean): Array<GithubData>  => {
      const check = isOdd ? 1 : 0
      return githubData.value.filter((val: GithubData, index: number) => {
        if (index % 2 == check) return val
      })
    }

    const openLink = inject('openLink')

    return {
      isOddData,
      openLink
    }
  }
})
</script>

<style scoped>
.page-container {
  max-width: 768px;
  display: flex;
}
.card-row {
  padding: 12px;
  margin: 0 15px;
}
.mt {
  margin-top: 100px;
}
.card {
  position: relative;
  cursor: pointer;
  box-shadow: 0 5px 50px 0 rgb(0 0 0 / 15%);
  background-color: #eeecea;
  border-radius: 20px;
  margin: 50px 0;
  width: 334px;
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

