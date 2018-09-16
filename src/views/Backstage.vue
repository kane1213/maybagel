<template>
  <div class="backstage">
    

    <nav class="navbar navbar-toggleable-md navbar-inverse  bg-inverse">
      <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Back stage</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>-->
        </ul>
        <!--<form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>-->
      </div>
    </nav>


    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
            </h6>

            <MainMenu/>

              <!--<ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a
                </li>
              </ul>>
            -->
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 pt-1">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">WELCOME</h1>
          </div>
          <router-view></router-view>
        </main>

      </div>
    </div>
  </div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'backstage',
  components: {
    MainMenu
  }
}
</script>

<style lang="sass" scoped>
body, html
  background-color: #fff
  nav.navbar
    z-index: 1000
.feather
  width: 16px
  height: 16px
  vertical-align: text-bottom

.sidebar
  position: fixed
  top: 0
  bottom: 0
  left: 0
  z-index: 100
  padding: 48px 0 0
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1)

.sidebar-sticky
  position: relative
  top: 0
  height: calc(100vh - 48px)
  padding-top: .5rem
  overflow-x: hidden
  overflow-y: auto

@supports (position: -webkit-sticky) or (position: sticky)
  .sidebar-sticky
    position: -webkit-sticky
    position: sticky

.sidebar .nav-link
  font-weight: 500
  color: #333
  .feather
    margin-right: 4px
    color: #999
  &.active
    color: #007bff
  &:hover .feather, &.active .feather
    color: inherit

.sidebar-heading
  font-size: .75rem
  text-transform: uppercase

.navbar-brand
  font-size: 1rem
  font-weight: bold

.navbar .form-control
  padding: .75rem 1rem
  border-width: 0
  border-radius: 0

.form-control-dark
  color: #fff
  background-color: rgba(255, 255, 255, 0.1)
  border-color: rgba(255, 255, 255, 0.1)
  &:focus
    border-color: transparent
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25)
</style>
