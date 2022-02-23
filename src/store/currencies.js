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
            return new Promise((resolve, reject) => {
                axios.get('latest', data)
                    .then(res => {
                        commit('setCurrencies', Object.keys(res.data.rates).sort().map(item => ({ id: item, label: item, value: res.data.rates[item], fav: false })))
                        resolve(res)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
}