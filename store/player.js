
export const state = () => ({
    currentURL: "",
    title: "",
    saison: 0,
    episode: 0
})

export const mutations = {
    GET_URL(state, url) {
        state.currentURL = url
    },
    GET_TITLE(state, title) {
        state.title = title
    },
    GET_SAISON(state, saison) {
        state.saison = saison
    },
    GET_EPISODE(state, episode) {
        state.episode = episode
    }
}

export const actions = {
    getURL({ commit }, url) {
        commit("GET_URL", url)
    },
    getTitle({ commit }, title) {
        commit("GET_TITLE", title)
    },
    getSaison({ commit }, saison) {
        commit("GET_SAISON", saison)
    },
    getEpisode({ commit }, episode) {
        commit("GET_EPISODE", episode)
    },
}