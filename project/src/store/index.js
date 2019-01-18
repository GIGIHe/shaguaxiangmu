import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userinfo: null,
    news: "",
    course: "",
    policy:''
  },
  actions: {},
  mutations: {
    USERINFO(state, payload) {
      state.userinfo = payload;
    },
    NEWSLIST(state, payload) {
      state.news = payload;
    },
    COURSE(state, payload) {
      state.course = payload
    },
    POLICY(state, payload) {
      state.policy = payload;
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key)
      }
    })
  ]
});
export default store;
