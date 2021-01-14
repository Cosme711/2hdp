import Service from '@/services/Service.js'

export const state = () => ({
    podcasts: [],
    displayed: 6,
    increment: 0
})

export const mutations = {
    SAVE_PODCASTS(state, podcasts) {
        state.podcasts = podcasts
    },
    PUSH_NEW_PODCASTS(state, newPodcasts) {
        state.podcasts.push(newPodcasts)
    },
    INITIALIZE_INCREMENT(state) {
        state.increment = state.displayed * 2
    },
    INCREMENT(state) {
        state.increment = state.increment + state.displayed
    },
}

export const actions = {
    getData({ commit, state }) {
        return Service.getData(state.displayed).then(response => {
            commit("SAVE_PODCASTS", response.data)
        })
    },
    getPodcasts({ commit, state }) {
        return Service.getData(state.displayed * 2).then(response => {
            commit("SAVE_PODCASTS", response.data)
            commit("INITIALIZE_INCREMENT")
        })
    },
    loadMore({ commit, state }) {
        return Service.loadMore(state.increment, state.displayed).then(response => {
            response.data.forEach(element => {
                commit("PUSH_NEW_PODCASTS", element)
            })
            commit("INCREMENT")
        })
    },
}