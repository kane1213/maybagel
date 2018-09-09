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
  }
}
</script>