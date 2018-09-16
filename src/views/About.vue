<template>
  <div class="about">
    <SiteMenu></SiteMenu>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import SiteMenu from '@/components/SiteMenu.vue'

export default {
  name: 'About',
  components: {
    SiteMenu
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'About Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  }
}
</script>