//import Vue from 'vue'
//import Vuex from 'vuex'

//Vue.use(Vuex)
//

import {
    createStore
} from 'vuex'

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
       reset(state) {
            state.count=0;
        },
      add_x(state,x){
      state.count=state.count+x
      }
    },
    actions: {
    delay_action(context,num){
      console.log('num '+ num)
      setTimeout(()=>{console.log('delay ---- ' + context.state.count);
      context.commit('increment')
      },5000);
    }
    },
    modules: {},
})

export default store
