export const state = () => ({
    club: []
})
export const actions = {
    async clubsData({ commit }) {
        try {
            let res = await this.$axios.get("/ru/api/clubs")
            const data = res.data.data || {}
            commit("setClubs", data)

        } catch (err) {
            log.error(err)
        }
    }
}
export const mutations = {
    setClubs(state, payload) {
        state.club = payload
    }
}
export const getters = {
    getClubs(state) {
        return state.club
    }
}