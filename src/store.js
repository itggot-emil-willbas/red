import Vue from 'vue'
import Vuex from 'vuex'
import json from './employees.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomLorum:[
      {id:0,text:"Korem, ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.",author:"William Shakespeare"},
      {id:1,text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.",author:"Emil Willbas"},
      {id:2,text:"Vipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.",author:"Atrid Lindgren"},
      {id:3,text:"Ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.",author:"Haruki Murakami"}
    ],
    myJson:json
  },
  getters: {
    getEmployees: state => {
      return state.myJson.employees;
    }
  },
  mutations: {

  },
  actions: {
    
  }
})
