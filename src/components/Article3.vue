<template>
    <article id="article-3">
        <h2>Article 3</h2>
        <p 
            v-for="employee in getEmployees" 
            v-bind:key="employee.id">
            {{employee.name}}, {{employee.age}} år, bor i {{employee.city}}
        </p>
    </article>
    
</template>

<script>
export default {
    name:'Article3',
    computed:{
        getEmployees () {
            return this.$store.getters.getEmployees;
            //return this.$store.state.myJson.employees  
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

#article-3 {
    overflow-y:scroll;
    background:$vue-white;
    flex-basis:$vue-article-width;
    padding:10px 50px;
    h2 {
        color:$vue-grey;
    }
    p {
        text-align: left;
    }
}
</style>