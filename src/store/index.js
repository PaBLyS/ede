import { createStore } from 'vuex'
import currencies from './currencies'

const store = createStore({
    state: () => ({
        darkTheme: !!localStorage.getItem('theme')
    }),
    mutations: {
        changeDarkTheme(state) { 
            state.darkTheme = !state.darkTheme
            localStorage.setItem('theme', state.darkTheme ? 'dark' : '')
        }
    },
    modules: [
        currencies
    ]
})

export default store