<template>
    <div class="cinput-wrap">
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="cinput"
            :placeholder="placeholder"
        />
        <img src="@/assets/search.png" />
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {},
        placeholder: { type: String, default: '' }
    }
}
</script>

<style lang="sass" scoped>
.cinput
    border: none
    width: 100%
    font-size: 10px
    background: transparent
    color: var(--text-color)

    &:focus
        outline: none

    &-wrap 
        width: 200px
        height: 25px
        display: flex
        align-items: center
        border: 1px solid #DDDDDD
        padding-left: 7px

        img 
            margin: 0 3px
</style>