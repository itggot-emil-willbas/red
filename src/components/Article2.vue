<template>
    <article id="article-2">
        <h2>Article 2</h2>
        <ul>
            <li v-for="item in getAuthors" v-bind:key="item.id">{{item.author}}</li>
        </ul>
    </article>
    
</template>

<script>
export default {
    name:'Article2',
    computed:{
        getAuthors () {
            return this.$store.state.randomLorum
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

#article-2 {
    background:$vue-white;
    flex-basis:$vue-article-width;
    padding:10px 50px;
    h2 {
        color:$vue-grey;
    }
}
</style>