export const state = () => ({
    console: []
})
export const actions = {
    async consoleData({ commit }) {
        try {
            let res = await this.$axios.get("/ru/api/console")
            const { data } = res && res.data || {}
            commit("setConsole", data)
        } catch (e) {
            log.error(e)
        }
    }
}
export const mutations = {
    setConsole(state, payload) {
        state.console = payload
    }
}
export const getters = {
    getConsole(state) {
        return state.console
    }
}