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
    console.log(context.title)
    return  h('div',{ class: 'title'}, [...context.title])
  }
})

</script>

<style scoped>
.title {
  margin: 100px 0;
  text-align: center;
  color: #ffff;
  font-size: 70px;
}
</style>
