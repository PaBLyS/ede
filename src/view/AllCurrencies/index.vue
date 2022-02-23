<template>
    <div class="allCurrencies">
        <div class="allCurrencies-header">
            All currencies
            <c-input
                v-model="search"
                placeholder="Search by name"
                style="width: 340px"
            >
                <img src="@/assets/search.png" style="margin: 0 10px; width: 18px; height: 18px" />
            </c-input>
        </div>
        <div
            v-for="item in filterCurrencies"
            :key="item.id"
            class="allCurrencies-item"
            @click.self="$router.push({ name: 'Currencie', params: { id: item.id }} )"
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