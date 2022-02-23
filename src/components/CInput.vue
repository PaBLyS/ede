<template>
    <div class="cinput-wrap">
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :disabled="disabled"
            class="cinput"
            :placeholder="placeholder"
            :type="type"
        />
        <slot />
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {},
        placeholder: { type: String, default: '' },
        type: { type: String, default: 'text' },
        disabled: { type: Boolean, default: false }
    }
}
</script>

<style lang="sass" scoped>
.cinput
    border: none
    width: 100%
    font-size: 16px
    background: transparent
    color: var(--text-color)

    &:focus
        outline: none

    &-wrap 
        width: 100%
        height: 40px
        display: flex
        align-items: center
        border: 1px solid #DDDDDD
        padding-left: 7px
</style>