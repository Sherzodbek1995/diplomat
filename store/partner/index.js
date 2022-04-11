export const state = () => ({
    partner: []
})

export const actions = {
    async PartnerData({ commit }) {
        try {

            const lang = "ru"
            let res = await this.$axios.get(`/${lang}/api/partners`);
            console.log(res);
            const { data } = res && res.data || {}
            commit("SetPart", data)

        } catch (e) {
            console.error(e)
        }
    },
}

export const mutations = {
    SetPart(state, payload) {
        state.partner = payload
    }
}
export const getters = {
    GetPart(state) {
        return state.partner
    }
}