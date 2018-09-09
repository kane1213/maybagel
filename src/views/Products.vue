<template>
  <div class="product">
    <SiteMenu></SiteMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteMenu from '@/components/SiteMenu.vue'

export default {
  name: 'Products',
  components: {
    SiteMenu
  }
}
</script>