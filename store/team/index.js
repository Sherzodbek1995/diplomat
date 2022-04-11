export const state = () => ({
    team: []
})
export const actions = {
    async teamData({ commit }) {
        try {
            let res = await this.$axios.get('/ru/api/teams')
            const data = res && res.data || {}
            commit("setTeam", data.data)
        } catch (err) {
            log.error(err)
        }
    }
}
export const mutations = {
    setTeam(state, payload) {
        state.team = payload
    }
}
export const getters = {
    getTeam(state) {
        return state.team
    }
}