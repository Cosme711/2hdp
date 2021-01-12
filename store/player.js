import { Howl } from 'howler';

export const state = () => ({
    currentURL: "",
    file: null
})

export const mutations = {
    GET_URL(state, url) {
        state.currentPlaying = url
    }
}

export const actions = {
    getURL({ commit }, url) {
        commit("GET_URL", url)
    },
    play({ state }) {
        var file = state.file;
        file.play();
    }
}