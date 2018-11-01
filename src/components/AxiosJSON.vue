<template>
    <div id="test">
        <h1>Axios</h1>
        <p>{{crawl}}</p>
    </div>
</template>

<script>
export default {
  name: "AxiosJSON",
  data() {
    return {
      url: "https://swapi.co/api/films",
      crawl: "Loading..."
    };
  },
  created: function() {
    this.loadStarWars();
  },
  methods: {
    loadStarWars() {
      this.$http
        .get(this.url)
        .then(resp => {
          console.log(resp);
          this.crawl = resp.data.results[0].opening_crawl;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss">
#test {
  width: 300px;
  height: 300px;
  background: black;
  overflow-y: scroll;
  margin: 10px;
  padding: 10px;
}
</style>
