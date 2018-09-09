<template>
  <div>
    <b-navbar toggleable="md" type="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        May's Bagel Shop
        <img alt="May'bagel logo" src="../assets/images/home/logo.png">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
          <b-nav-item v-for="(site, key) in sitemap" :to="'/'+ key">
            <font v-text="site.en"></font>
          </b-nav-item>
        </b-navbar-nav>

          <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!--<b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>-->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>-->
          <!--
          <b-nav-item-dropdown right>
            <!-- Using button-content slot 
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    
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

<style lang="sass">
  nav.navbar
    z-index: 1000
    position: fixed
    right: 0
    top: 50px
    background-color: rgba(255, 255, 255, .5)
    .nav-item
      font
        font-weight: bold
        color: #000
        transition: ease .25s color
      &:hover
        font
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
