<template>
  <div
    class="allCurrencies-item"
    @click.self="$router.push({ name: 'Currencie', params: { id: data.id } })"
  >
    {{ data.label }}
    <div class="allCurrencies-item__fav" @click="changeFav(data.id)">
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
</style>