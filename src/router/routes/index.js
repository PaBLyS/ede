import AllCurrencies from '@/view/AllCurrencies'

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
]