<template>
    <div class="cswitch-wrap">
        Light theme
        <div :class="{cswitch: true, on: darkTheme}" @click="changeDarkTheme">
            <div class="cswitch-circle" />
        </div>
        Dark theme
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState(['darkTheme']),
    },
    methods: {
        ...mapMutations(['changeDarkTheme'])
    }
}
</script>

<style lang="sass" scoped>
.cswitch 
    width: 28px
    border-radius: 28px
    background: var(--text-color)
    margin: 0 10px
    padding: 1px
    cursor: pointer
    display: flex
    justify-content: flex-start

    &.on 
        justify-content: flex-end

    &-wrap
        display: flex
        align-items: center
        color: var(--text-color)
        font-size: 9px
        font-weight: 400

    &-circle
        height: 12px
        width: 12px
        border-radius: 12px
        background: var(--background-header-color)

</style>