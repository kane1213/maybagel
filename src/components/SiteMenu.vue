<template>
  <div>
    <nav class="navbar navbar-toggleable-md fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link class="navbar-brand" to="/">
        May's Bagel Shop
        <img alt="May'bagel logo" src="../assets/images/home/logo.png">
      </router-link>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li  class="nav-item py-3 px-2" v-for="(site, key) in sitemap">
            <router-link :to="'/'+ key" v-text="site.en"></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sitemap: this.$store.state.sitemap
    }
  }
}
</script>

<style lang="sass" scoped>
  nav.navbar
    z-index: 1000
    position: fixed
    right: 0
    left: auto
    top: 50px
    background-color: rgba(255, 255, 255, .5)
    .nav-item
      a
        font-weight: bold
        color: #000
        transition: ease .25s color
      &:hover
        a
          color: #fe3210
    .navbar-brand
      padding-left: 20px
      position: fixed
      left: 0
      background-color: rgba(255, 255, 255, .5)
      font-weight: bold
      img
        max-width: 90px
  @media (max-width: 768px)
    nav.navbar
      background-color: transparent
      top: 10px
      display: flex
      justify-content: flex-end
      li
        a
          text-shadow: 0 1px #fff
          text-align: right
      .navbar-brand
        top: 20px
        background-color: transparent
        img
          max-width: 40px
</style>
