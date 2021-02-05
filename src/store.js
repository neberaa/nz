import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoaded: false,
  },
  mutations: {
    setIsLoaded(state, contentState) {
      state.isLoaded = contentState;
    }
  },
  getters: {
  }
});

export default store;
