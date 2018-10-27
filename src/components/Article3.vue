<template>
    <article id="article-3">
        <h2>Article 3</h2>
    </article>
    
</template>

<script>
export default {
    name:'Article3'
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

#article-3 {
    background:$vue-white;
    flex-basis:$vue-article-width;
    padding:10px 50px;
    h2 {
        color:$vue-grey;
    }
}
</style>