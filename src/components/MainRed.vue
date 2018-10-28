<template>
    <main>
        <h1>Main</h1>
    </main>
    
</template>

<script>
export default {
    name:'MainRed'
}
</script>

<style lang="scss" scoped>

@import '../css/variables.scss';
@import '../css/style.scss';

main { 
    grid-area:mn;
    position: relative;
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

