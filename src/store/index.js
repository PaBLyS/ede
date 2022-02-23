import { createStore } from 'vuex'
import currencies from './currencies'

const store = createStore({
    modules: [
        currencies
    ]
})

export default store