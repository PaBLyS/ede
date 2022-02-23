import { mapGetters, mapMutations } from 'vuex'
import StarR from '@/assets/star-regular'
import StarS from '@/assets/star-solid'

export default {
    name: 'AllCurrencies',
    components: { StarR, StarS }, 
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters(['currencies']),
        filterCurrencies() {
            return this.currencies.filter(i => i.label.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
        }
    },
    methods: {
        ...mapMutations(['changeFav']),
    }
}