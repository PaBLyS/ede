<template>
  <div class="allCurrencies">
    <div class="allCurrencies-header">
      All currencies
      <c-input
        v-model="search"
        placeholder="Search by name"
        style="width: 340px"
      >
        <img
          src="@/assets/search.png"
          style="margin: 0 10px; width: 18px; height: 18px"
        />
      </c-input>
    </div>
    <CurrencieItem
      v-for="item in filterCurrencies"
      :key="item.id"
      :data="item"
    />
  </div>
</template>

<script src="./script.js" />
<style lang="scss">
@import "style";
</style>