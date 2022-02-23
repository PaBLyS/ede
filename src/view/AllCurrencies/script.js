import { mapActions, mapGetters, mapMutations } from 'vuex'
import StarR from '@/assets/star-regular'
import StarS from '@/assets/star-solid'

export default {
    name: 'MyCurrencies',
    components: { StarR, StarS }, 
    created() {
        this.fetchAllCurrencies()
    },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters(['currencies']),
        filterCurrencies() {
            return this.currencies.sort().filter(i => i.label.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
        }
    },
    methods: {
        ...mapMutations(['changeFav']),
        ...mapActions(['fetchAllCurrencies']),
    }
}