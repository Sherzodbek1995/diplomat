export const state = () => ({
    news: [],
    event: [],
    slug: [],
    gallery: []
})

export const actions = {

    async staticNewsData({ commit }, { slug }) {
        try {
            const lang = "ru"
            let res = await this.$axios.get(`/${lang}/api/news/view/${slug}`);
            const { data, gallery } = res && res.data || {}
            commit("SetSlug", data)
            commit("SetOnSlug", gallery)
        } catch (err) {
            log.error(err)
        }
    },
    async EventData({ commit }) {
        try {
            let res = await this.$axios.get("/ru/api/news/events")
            const { data } = res.data || {}
            commit("SetEvent", data)
        } catch (e) {
            console.error(e)
        }
    },
    async newsData({ commit }) {
        try {
            let res = await this.$axios.get("/ru/api/news")
            const { data } = res.data || {}

            commit("setNews", data)
        } catch (e) {
            console.error(e)
        }

    },

}

export const mutations = {
    SetOnSlug(state, payload) {
        state.gallery = payload
    },
    SetSlug(state, payload) {
        state.slug = payload
    },
    SetEvent(state, payload) {
        state.event = payload
    },

    setNews(state, payload) {
        state.news = payload
    },
}
export const getters = {
    getOnSlug(state) {

        return state.gallery
    },
    getSlug(state) {
        return state.slug
    },
    getNews(state) {
        return state.news
    },
    GetEvent(state) {
        return state.event
    }

}