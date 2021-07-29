
<template>
  <section class="container">
  </section>
</template>
<script lang="ts">
import { defineComponent  } from 'vue';
import { getMyRepo, GithubData } from '../api';


export default defineComponent({
  name: 'GithubPage',
  components: {
  },
  async mounted() {
    const data: any = await getMyRepo()
    let data2: Array<GithubData> = []
    data.sort((a: GithubData, b: GithubData) => b.id - a.id).forEach((val: GithubData) => {
      data2.push({
        id: val.id,
        name: val.name,
        html_url: val.html_url,
        ...(val.description ?  { description: val.description } : {})
      })
    })
    console.log(data2)
  }
});
</script>

<style scoped>
</style>
