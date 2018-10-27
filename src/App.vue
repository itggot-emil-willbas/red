<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './css/variables.scss';
@import './css/style.scss';


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $vue-grey;
  box-sizing: border-box;
}
#nav {
  padding: 5px;
  height:5vh;
  background:$vue-red;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color:$vue-white;
    }
  }
}
</style>
