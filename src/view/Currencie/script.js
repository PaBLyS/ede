import { mapActions } from "vuex"

export default {
    name: 'Currencie',
    data() {
        return {
            first_currencie: 0,
            second_currencie: 0
        }
    },
    watch: {
        first_currencie() {
            if (this.first_currencie !== '') this.fetchData()
            else this.second_currencie = 0
        }
    },
    methods: {
        ...mapActions(['getConvert']),
        fetchData() {
            this.getConvert({ params: {
                from: this.$route.params.id,
                to: 'USD',
                amount: this.first_currencie
            }})
                .then(res => {
                    this.second_currencie = res.result
                })
        }
    }
}