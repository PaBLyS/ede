<template>
  <DefaultLayout :class="rootClass">
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/Default";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  created() {
    this.fetchAllCurrencies();
  },
  computed: {
    ...mapState(["darkTheme"]),
    rootClass() {
      return {
        root: true,
        "dark-theme": this.darkTheme,
      };
    },
  },
  methods: {
    ...mapActions(["fetchAllCurrencies"]),
  },
};
</script>

<style lang="scss">
@import "style/style";
</style>
