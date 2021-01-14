import Service from '@/services/Service.js'


export const state = () => ({
    numberOfPodcasts: 0,
    numberOfHours: 0
})

export const mutations = {
    GET_NUMBER_PODCASTS(state, number) {
        state.numberOfPodcasts = number
    },
    GET_NUMBER_HOURS(state, number) {
        state.numberOfHours = number
    }
}

export const actions = {
    getNumber({ commit }) {
        return Service.getNumber().then(response => { 
            commit("GET_NUMBER_PODCASTS", response.data[0].podcasts)
            commit("GET_NUMBER_HOURS", response.data[0].hours)
        })
    }
}