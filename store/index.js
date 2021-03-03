import Service from '@/services/Service.js'

export const state = () => ({
    podcasts: [
        {
            picture: {
                formats: {
                    small: {
                        "url": null
                    }
                }
            }
        }
    ],
    displayed: 8,
    increment: 0,
})

export const mutations = {
    SAVE_PODCASTS(state, podcasts) {
        state.podcasts = {} // Here for fix bug with reset filter on podcasts page
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
    REPLACE_BY_SEASON(state, podcasts) {
        state.podcasts = {}
        state.podcasts = podcasts
    }
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
    getBySeason({ commit }, number) {
        return Service.getBySeason(number).then(response => {
            commit("REPLACE_BY_SEASON", response.data)
        })
    }
}