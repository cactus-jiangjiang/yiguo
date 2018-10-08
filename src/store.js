import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      count:0,
      cartTotal:0
    },
    mutations: {
        increment(state,n){
            state.count+=n;
        },
        subtract(state,n){
            state.count-=n;
        },
        calcTotal(state,m){
            state.cartTotal+=m
        },
        clearTotal(state,m){
            state.cartTotal-=m
        }
    },
    getters:{
        optCount:function(state){
            return state.count;
        },
        optTotal:function(state){
            return state.cartTotal;
        }
    },
    actions: {

    }
})
