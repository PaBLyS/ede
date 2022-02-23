<template>
  <div
    class="currencieItem"
    @click.self="$router.push({ name: 'Currencie', params: { id: data.id } })"
  >
    {{ data.label }}
    <div class="currencieItem__fav" @click="changeFav(data.id)">
      <Star :type="data.fav" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Star from "./Star";

export default {
  name: "CurrencieItem",
  components: { Star },
  props: {
    data: { type: Object, required: true },
  },
  methods: {
    ...mapMutations(["changeFav"]),
  },
};
</script>

<style lang="sass" scoped>
.currencieItem
  width: 700px
  height: 80px
  margin-bottom: 10px
  background: var(--background-color)
  color: var(--text-color)
  font-size: 20px
  border: 2px solid #DDDDDD
  padding: 15px
  display: flex
  align-items: center
  justify-content: space-between

  &:hover
    border: 2px solid var(--text-color)

  &__fav
    height: 32px
    width: 32px
    cursor: pointer
</style>