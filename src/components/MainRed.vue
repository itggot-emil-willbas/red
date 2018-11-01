<template>
    <main>
        <h1>Main</h1>
        <LokalJSON/>
        <AxiosJSON/>

        
    </main>
    
</template>

<script>
import LokalJSON from '@/components/LokalJSON.vue'
import AxiosJSON from '@/components/AxiosJSON.vue'

export default {
    name:'MainRed',
    components:{
        LokalJSON,AxiosJSON
        }
}
</script>

<style lang="scss" scoped>

@import '../css/variables.scss';
@import '../css/style.scss';

main { 
    grid-area:mn;
    position: relative;
    display:flex;
    flex-wrap: wrap;
    h1{
        width:100%;
    }
}

main::before {
  content: "";
  z-index:-1;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image:url('../assets/matt-artz-429832-unsplash.jpg');
  filter:grayscale(10%) contrast(86%);
}

</style>

