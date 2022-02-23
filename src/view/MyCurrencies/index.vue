<template>
    <div class="allCurrencies">
        <div class="allCurrencies-header">
            My currencies
            <c-input
                v-model="search"
                placeholder="Search by name"
            />
        </div>
        <div
            v-for="item in filterCurrencies"
            :key="item.id"
            class="allCurrencies-item"
        >
            {{item.label}}
            <div class="allCurrencies-item__fav" @click="changeFav(item.id)">
                <StarS v-if="item.fav" />
                <StarR v-else />
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
<style lang="scss">@import "style"</style>