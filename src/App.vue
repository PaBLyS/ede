<template>
    <DefaultLayout :class="rootClass">
        <router-view/>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layout/Default'
import { mapState } from 'vuex'

export default {
    name: 'App',
    components: {
        DefaultLayout
    },
    computed: {
        ...mapState(['darkTheme']),
        rootClass() {
            return {
                root: true,
                'dark-theme': this.darkTheme 
            }
        }
    }
}
</script>

<style lang="scss">@import "style/style"</style>
