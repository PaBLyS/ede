<template>
  <div class="cswitch-wrap">
    Light theme
    <div :class="{ cswitch: true, on: darkTheme }" @click="changeDarkTheme">
      <div class="cswitch-circle" />
    </div>
    Dark theme
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["darkTheme"]),
  },
  methods: {
    ...mapMutations(["changeDarkTheme"]),
  },
};
</script>

<style lang="sass" scoped>
.cswitch
    width: 44px
    border-radius: 28px
    background: var(--text-header-color)
    margin: 0 10px
    padding: 2px
    cursor: pointer
    display: flex
    justify-content: flex-start

    &.on
        justify-content: flex-end

    &-wrap
        display: flex
        align-items: center
        color: var(--text-header-color)
        font-size: 14px
        font-weight: 400

    &-circle
        height: 20px
        width: 20px
        border-radius: 12px
        background: var(--background-header-color)
</style>