import Service from '@/services/Service.js'

export const state = () => ({
    podcasts: [],
    increment: 0
})

export const mutations = {
    SAVE_PODCASTS(state, podcasts) {
        state.podcasts = podcasts
    },
    PUSH_NEW_PODCASTS(state, newPodcasts) {
        state.podcasts.push(newPodcasts)
    },
    INCREMENT(state) {
        state.increment = state.increment + 6
    }
}

export const actions = {
    getData({ commit }) {
        return Service.getData().then(response => {
            commit("SAVE_PODCASTS", response.data)
        })
    },
    loadMore({ commit, state }) {
        return Service.loadMore(state.increment).then(response => {
            response.data.forEach(element => {
                commit("PUSH_NEW_PODCASTS", element)
            })
        })
    },
    increment({ commit }) {
        commit("INCREMENT")
    }
}