
export const state = () => ({
    currentURL: "",
    file: null
})

export const mutations = {
    GET_URL(state, url) {
        state.currentURL = url
    }
}

export const actions = {
    getURL({ commit, state }, url) {
        commit("GET_URL", url)
    },
    // play({ state }) {
    //     var file = state.file;
    //     file.play();
    // }
}