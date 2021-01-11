import Service from '@/services/Service.js'

export const state = () => ({
    podcasts: [],
    increment: 10
})

export const mutations = {
    SAVE_PODCASTS(state, podcasts) {
        state.podcasts = podcasts
    },
    PUSH_NEW_PODCASTS(state, newPodcasts) {
        state.podcasts.push(newPodcasts)
    },
    INCREMENT(state) {
        state.increment = state.increment + 4
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
            console.log(response.data)
            commit("PUSH_NEW_PODCASTS", response.data[0])
            commit("PUSH_NEW_PODCASTS", response.data[1])
            commit("PUSH_NEW_PODCASTS", response.data[2])
            commit("PUSH_NEW_PODCASTS", response.data[3])
            // Crée une fonction forEach id etc ... 
        })
    },
    increment({ commit, state }) {
        commit("INCREMENT")
        console.log(state.increment)
    }
}