<template>
  <section class="container experience">
    <div class="d-flex flex-column" v-for="(item) in experienceData" :key="item.job_title">
      <h1>{{ item.job_title }}</h1>
      <div v-for="( sub ) in item.sub_title" :key="sub.title">
        <h3>{{ sub.title }}</h3>
        <div class="detail" >
          <p v-for="(job_detail, index) in sub.job" :key="job_detail">{{ index + 1 }} {{ job_detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getExperience } from '../api'

// experience json 結構
type ExperienceSubTitle = {
  title: string,
  job: Array<string>
}

type ExperienceData = {
  job_title: string,
  sub_title: Array<ExperienceSubTitle>
}

export default defineComponent({
  name: 'Experience',
  components: {
  },
  setup () {
    const experienceData =  ref<Array<ExperienceData>>([])

    // get data from json file.
    const init = async(): Promise<void> => {
      const data: any = await getExperience()
      data.forEach(( val: ExperienceData ) => {
        experienceData.value.push(val)
      })
    }

    init()

    return {
      experienceData
    }
  }
})
</script>

<style scoped>
  .experience {
    margin-top: 80px;
    max-width: 1000px;
  }
  .experience h1{
    font-size: 1.7rem;
  }
  .experience h3{
    margin-top: 10px;
    font-size: 1.4rem;
  }
  .detail {
    margin-left: 20px;
    margin-top: 10px;
    font-size: 1.1rem;
  }
  .detail p {
    margin: 0;
  }
</style>
