<template>
    <footer>
        <h1>Footer</h1>
    </footer>
    
</template>

<script>
export default {
    name:'FooterRed'
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
@import '../css/style.scss';

footer {
    background:$vue-red;
    grid-area:ft;
}
</style>