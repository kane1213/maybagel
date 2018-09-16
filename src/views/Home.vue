<template>
  <div class="home">
    <SiteMenu></SiteMenu>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
// <HelloWorld msg="Welcome to Your Vue.js App"/>
import HelloWorld from '@/components/HelloWorld.vue'
import SiteMenu from '@/components/SiteMenu.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SiteMenu
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "May's Bagel",
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  },
  mounted() {
    //console.log(process.env.VUE_APP_API);
  }
}
</script>

<style lang="sass">
a
  color: #fff
  &:focus, &:hover
    color: #fff

.btn-secondary
  color: #333
  text-shadow: none
  background-color: #fff
  border: .05rem solid #fff
  &:hover, &:focus
    color: #333
    text-shadow: none
    background-color: #fff
    border: .05rem solid #fff
html
  height: 100%
  background-color: #aaa

body
  height: 100%
  background-color: #aaa
  display: -ms-flexbox
  display: -webkit-box
  display: flex
  -ms-flex-pack: center
  -webkit-box-pack: center
  justify-content: center
  color: #fff
.cover-container
  max-width: 42em
.masthead
  margin-bottom: 2rem

.masthead-brand
  margin-bottom: 0

.nav-masthead
  .nav-link
    padding: .25rem 0
    font-weight: 700
    color: rgba(255, 255, 255, 0.5)
    background-color: transparent
    border-bottom: .25rem solid transparent
    &:hover, &:focus
      border-bottom-color: rgba(255, 255, 255, 0.25)
    + .nav-link
      margin-left: 1rem
  .active
    color: #fff
    border-bottom-color: #fff

@media (min-width: 48em)
  .masthead-brand
    float: left
  .nav-masthead
    float: right
.cover
  padding: 0 1.5rem
  .btn-lg
    padding: .75rem 1.25rem
    font-weight: 700
.mastfoot
  color: rgba(255, 255, 255, 0.5)
</style>
