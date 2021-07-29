<script lang='ts'>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'GeomertyBackground',
  setup (props, { slots }) {
    return () => h('section', { class: 'content' }, slots.default!())

  }
})

</script>

<style scoped>
.content{
  margin-bottom: 100px;
  max-width: 100%;
  margin: 0;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #E2DFDA;
  background-size: contain;
  background-attachment: fixed;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  background-position: center center;
  background-repeat: repeat-y;
  padding-bottom: 110px;
  background-image: url('../assets/img/geomerty.svg');
}
</style>
