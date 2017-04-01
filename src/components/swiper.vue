<template>
  <div>
    <swiper :options="swiperOption">
        <swiper-slide style="height: 230px;" v-for="item in topData" :item="item" :key="item.id">
          <img class="slide-img" :src="item.image || defaultImg | replaceImgUrl ">
          <p class="slide-title">{{item.title}}</p>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props:['topData'],
    filters:{
      replaceImgUrl(url){
        return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoHeight: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false,
          effect: 'fade',
          defaultImg: 'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg'
        },
      }
    },
    methods: {

    }
  }
</script>

<style>
  .swiper-slide {
    height: 200px;
    background-position: center;
    background-size: cover;
  }
  .slide-img{
    width: 100%;
  }
  .slide-title{
    position: absolute;
    bottom: 2.613rem;
    line-height: 1.2;
    left: 0;
    padding: 0 .48rem;
    font-weight: 300;
    font-size: 2.0rem;
    color: #fff;
  }
</style>