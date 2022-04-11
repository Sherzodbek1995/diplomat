export const state = () => ({
    members: []
})
export const actions = {
    async facultyData({ commit }) {
        try {
            let res = await this.$axios.get('/ru/api/members')
            const data = res.data || {}
            commit("setMembers", data.data)
        } catch (err) {
            log.error(err)
        }
    }
}
export const mutations = {
    setMembers(state, payload) {
        state.members = payload
    }
}
export const getters = {
    getMembers(state) {
        return state.members
    }
}