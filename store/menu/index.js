export const state = () => ({
    menu: [],
})

export const actions = {
    async Menu_Data({ commit }) {
        try {
            let res = await this.$axios.get("/ru/api/menu")
            const { data } = res && res.data || {}
            commit("SetMenu", data)
        } catch (e) {
            console.error(e)
        }
    }

}
export const mutations = {
    SetMenu(state, payload) {
        state.menu = payload
    }
}
export const getters = {
    GetMenu(state) {
        return state.menu
    }
}