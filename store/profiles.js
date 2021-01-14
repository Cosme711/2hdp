import Service from '@/services/Service.js'

export const state = () => ({
    profiles: {}
})

export const mutations = {
    GET_PROFILE(state, profiles) {
        state.profiles = profiles
    }
}

export const actions = {
    getProfiles({ commit }) {
        return Service.getProfiles().then(response => { 
            commit("GET_PROFILE", response.data)
        })
    }
}