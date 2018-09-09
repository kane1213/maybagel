<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="bagle in bagles" :style="'background-image: url(' + require('../assets/images/home/'+ bagle) + ')'"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Arrows -->
    <!--<div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>-->
  </div>
</template>


<script>

import Swiper from 'swiper/dist/js/swiper.js';


export default {
  name: "HelloWorld",
  data (){
    return {
      bagles: ["hp1.jpg", "hp2.jpg", "hp3.jpg", "hp4.jpg", "hp5.jpg"]
    }
  },
  props: {
    
  },
  methods: {
    
  },
  mounted() {
    setTimeout(()=>{
      new Swiper('.swiper-container', {
            spaceBetween: 10,
            effect: 'fade',
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
      });

    }, 500);
  }
};
</script>

<style>
html, body {
  position: relative;
  height: 100%;
}

  .swiper-slide {
    background-position: center;
    background-size: cover;
    height: 100vh !important;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 10vh #000 inset;
}
</style>
