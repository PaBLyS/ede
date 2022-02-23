<template>
  <DefaultLayout>
    <router-view/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layout/Default'

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style>
</style>
