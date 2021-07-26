<template>
  <div class="hello">
    <img alt="vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  z-index: 1;
  width: 200px;
  background-color: #ffff;
  margin-top: 100px;
  height: 1000px;

}
</style>
