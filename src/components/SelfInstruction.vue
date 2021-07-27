<template>
  <div class="self-instr">
    <div>
      <p>
      <strong>Hello</strong>
      </p>
      <p>
        我是 Neil，目前的職稱是全端工程師，喜歡看書追影集，也熱愛學習新的東西。
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SelfInstruction'
})

</script>

<style scoped>
  .self-instr {
    width: 100%;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    background-color: #E2DFDA;
  }
  .self-instr div {
    max-width: 700px;
    width: 90%;
  }
  .self-instr p {
    width: 100%;
    font-weight: 350;
  }
</style>
