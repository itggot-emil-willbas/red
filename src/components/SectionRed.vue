<template>
    <section>
        <Article1/>
        <Article2/>
        <Article3/>
    </section>
    
</template>

<script>
import Article1 from '@/components/Article1.vue'
import Article2 from '@/components/Article2.vue'
import Article3 from '@/components/Article3.vue'

export default {
    name:'SectionRed',
    components:{
        Article1,Article2,Article3
    }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

section {
    padding:$box-padding;
    padding-top:20px;
    padding-bottom:20px;
    background:$vue-grey;
    grid-area:sc;
    display: flex;
    justify-content: space-around;
}
</style>