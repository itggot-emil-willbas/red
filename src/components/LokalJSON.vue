<template>
    <div id="demo">
        <h1>Lokal JSON</h1>
        <!-- <h1>{{emilData}}</h1> -->
        <ul>
            <li v-for="item in emilData" v-bind:key="item.id">{{item}}</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: "LokalJSON",
  data() {
    return {
      myJson: require("@/employees.json"),
      url: "http://localhost:5500/employees.json"
    };
  },
  computed: {
      emilData () {
          console.log(this.myJson.employees["0"].name)
          let obj = this.myJson.employees
          console.log(obj["0"])
          return obj["0"]
      }
    // axiosComputed() {
    //   this.$http
    //     .get(this.url)
    //     .then(resp => {
    //         console.log(resp)
    //       return resp;
    //     })
    //     .catch(err => console.error(err));

      //   var xhttp = new XMLHttpRequest();

      // xhttp.onreadystatechange = function() {
      //     if (this.readyState == 4 && this.status == 200) {
      //         console.log(responseText)
      //       return this.responseText;
      //     }
      //   };
      //   xhttp.open("GET", "../employees.json", true);
      //   xhttp.send();
    //}
  }
};
</script>

<style lang="scss">
#demo {
  width: 300px;
  height: 300px;
  background: black;
  margin: 10px;
  padding:10px;
}
</style>
