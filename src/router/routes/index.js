import AllCurrencies from '@/view/AllCurrencies'
import MyCurrencies from '@/view/MyCurrencies'
import Currencie from '@/view/Currencie'

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
    {
        path: '/currencie/:id',
        name: 'Currencie',
        component: Currencie
    },
]