<template>
  <div class="news">
    <SiteMenu></SiteMenu>
    <h1>This is an news page</h1>
  </div>
</template>

<script>
import SiteMenu from '@/components/SiteMenu.vue'

export default {
  name: 'News',
  components: {
    SiteMenu
  }
}
</script>