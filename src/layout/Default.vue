<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-header-nav">
                <router-link :to="{ name: 'AllCurrencies' }" class="layout-header-nav__item">All currencies</router-link>
                <router-link :to="{ name: 'MyCurrencies' }" class="layout-header-nav__item">My currencies</router-link>
            </div>

            <SwitchTheme />
        </div>
        <slot />
    </div>
</template>

<script>
import SwitchTheme from '@/components/SwitchTheme.vue'

export default {
    name: 'DefaultLayout',
    components: { SwitchTheme },
}
</script>

<style lang="sass" scoped>
.layout
    min-height: 100vh
    background: var(--background-color)

    &-header
        height: 50px
        width: 100%
        background: var(--background-header-color)
        padding: 0 20px
        display: flex
        align-items: center
        justify-content: space-between
        position: sticky
        top: 0

        &-nav
            display: flex
            align-items: center

            &__item 
                margin: 0 10px
                text-decoration: none
                color: var(--text-header-color)
                font-family: var(--text-family), sans-serif
                font-weight: 500
                font-size: 10px
                line-height: 15px
                
                &.active
                    text-decoration: underline
</style>