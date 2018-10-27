<template>
    <article id="article-1">
        <h2>Article 1</h2>
        <p>{{this.$store.state.randomLorum[3].text}}</p>
    </article>
    
</template>

<script>
export default {
    name:'Article1'
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

 #article-1 {
    background:$vue-white;
    flex-basis:$vue-article-width;
    padding:10px 50px;
    h2 {
        color:$vue-grey;
    }
}
</style>