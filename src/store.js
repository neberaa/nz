import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoaded: false,
    menuIsOpen: false,
  },
  mutations: {
    setIsLoaded(state, contentState) {
      state.isLoaded = contentState;
    },
    setMenuIsOpen(state, contentState) {
      state.menuIsOpen = contentState;
    }
  },
  getters: {
  }
});

export default store;
