import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    name: 'John Doe',
    title : 'Frontend Developer' 
};

const getters = {
    welcome(state) { 
        return `${ state.name } (${ state.title })`;
    }
};

const mutations = {
    setUserInfo(state, payload) {
        state.name = payload.name;
        state.title = payload.title;
    },
};

const actions = {
    updateUserInfo({ commit }, payload) {
        setTimeout(() => {
            commit('setUserInfo', payload);
        }, 1000);
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;