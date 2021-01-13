
export const state = () => ({
    currentURL: "",
    title: ""
})

export const mutations = {
    GET_URL(state, url) {
        state.currentURL = url
    },
    GET_TITLE(state, title) {
        state.title = title
    }
}

export const actions = {
    getURL({ commit }, url) {
        commit("GET_URL", url)
    },
    getTitle({ commit }, title) {
        commit("GET_TITLE", title)
    },
    // play({ state }) {
    //     var file = state.file;
    //     file.play();
    // }
}