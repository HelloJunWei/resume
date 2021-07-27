<script lang='ts'>
import {defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  render(context: any) {
    return  h('div',{ class: 'section-title'}, [...context.title])
  }
})

</script>

<style scoped>
.section-title {
  margin: 100px 0;
  text-align: center;
  color: #ffff;
  font-size: 3.5rem; 
}
</style>
