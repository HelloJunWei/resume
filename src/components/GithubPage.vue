<template>
  <section class="bg">
    <DesktopGithubPage :githubData="githubData" v-if="width >= 756"/>
    <MobileGithubPage :githubData="githubData"  v-else/>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, provide, onMounted, onDeactivated  } from 'vue';
import { getMyRepo, GithubData } from '../api';
import DesktopGithubPage from './DesktopGithubPage.vue'
import MobileGithubPage from './MobileGithubPage.vue'


export default defineComponent({
  name: 'GithubPage',
  components: {
    DesktopGithubPage,
    MobileGithubPage
  },
  setup() {
    const width = ref(window.innerWidth)
    let githubData = ref<Array<GithubData>>([])

    const init = async () => {
      const data: any = await getMyRepo()
      data.sort((a: GithubData, b: GithubData) => b.id - a.id).forEach((val: GithubData) => {
        githubData.value.push({
          id: val.id,
          name: val.name,
          html_url: val.html_url,
          ...(val.description ?  { description: val.description } : {})
        })
      })
    }
    
    init()

    provide('openLink', (url: string) => {
      window.open(url)
    })
    const resize = () => {
      width.value = window.innerWidth
    }

    onMounted(() => {
      window.addEventListener('resize', resize)
    })
    
    onDeactivated(() => {
      window.removeEventListener('resize', resize)
    })

    return {
      githubData,
      width
    }
  }
});
</script>

<style scoped>
.bg {
  margin-top: 50px;
  background-color: #E2DFDA;
  width: 100%;
  display: flex;
  justify-content: center;
}
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
