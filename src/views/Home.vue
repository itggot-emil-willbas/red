<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MainRed/>
    <SectionRed/>
    <FooterRed/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainRed from '@/components/MainRed.vue'
import SectionRed from '@/components/SectionRed.vue'
import FooterRed from '@/components/FooterRed.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,MainRed,SectionRed,FooterRed
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

.home {
  display:grid;
  height:90vw;
  grid-template-rows:70vh minmax(20vh,30vh) minmax(5vh,20vh);
  grid-gap:10px;
  grid-template-areas:
  'mn mn mn'
  'sc sc sc'
  'ft ft ft'
}
</style>

