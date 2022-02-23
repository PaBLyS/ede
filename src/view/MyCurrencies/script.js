import { mapGetters } from 'vuex'
import CurrencieItem from '@/components/CurrencieItem'

export default {
    name: 'MyCurrencies',
    components: { CurrencieItem },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters(['currencies']),
        filterCurrencies() {
            return this.currencies.filter(i => i.fav).filter(i => i.label.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
        }
    },
}