<template>
  <div id="app">
     <header class="app-header" :class="{centralized: !isPageDetails()}">
      <router-link class="return-btn" :to="{ name: 'MoviesList' }" v-if="isPageDetails()"> <img src="@/assets/return.png" alt="Back"> </router-link>
      <img class="logo" src="@/assets/logo.svg" alt="The Movie DB">
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    isPageDetails() {
      return this.$route.name == 'MovieDetails'
    }
  }
}
</script>

<style lang="sass">
body  
  background-color: #151515
  padding: 20px
  font-family: DIN, Helvetica, Arial, sans-serif

  #app
    max-width: 1200px
    margin: auto

    .app-header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 25px

      .return-btn

        img
          width: 60px
          height: 60px

      .logo
        display: block
        max-width: 300px
        margin: auto

      &.centralized
        justify-content: center
</style>
