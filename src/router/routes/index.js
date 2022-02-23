import AllCurrencies from '@/view/AllCurrencies'
import MyCurrencies from '@/view/MyCurrencies'

export default [
    {
        path: '/',
        name: 'Home',
        component: null,
        redirect: '/all-currencies'
    },
    {
        path: '/all-currencies',
        name: 'AllCurrencies',
        component: AllCurrencies
    },
    {
        path: '/my-currencies',
        name: 'MyCurrencies',
        component: MyCurrencies
    },
]