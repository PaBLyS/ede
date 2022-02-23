import axios from '@/services/axios'

export default {
    state: () => ({
        currencies: []
    }),
    getters: {
        currencies: state => state.currencies
    },
    mutations: {
        setCurrencies(state, value) {
            state.currencies = value
        },
        changeFav(state, id) {
            let index = state.currencies.findIndex(i => i.id === id)
            if (index >= 0) {
                state.currencies[index] = { ...state.currencies[index], fav: !state.currencies[index].fav }
            }
        }
    },
    actions: {
        fetchAllCurrencies({ commit }, data) {
            commit('setCurrencies', [])
            return axios.get('latest', data)
                .then(res => {
                    commit('setCurrencies', Object.keys(res.data.rates).sort().map(item => ({ id: item, label: item, value: res.data.rates[item], fav: false })))
                    return res
                })
        },
        getConvert(vm, data) {
            return axios.get('convert', data)
                .then(res => {
                    return res.data
                })
        }
    }
}