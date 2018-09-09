<template>
  <div class="contact">
    <SiteMenu></SiteMenu>
    <h1>This is an product page</h1>
    <h3 v-text="$route.params.id"></h3>
  </div>
</template>

<script>
import SiteMenu from '@/components/SiteMenu.vue'

export default {
  name: 'Contact',
  components: {
    SiteMenu
  }
}
</script>