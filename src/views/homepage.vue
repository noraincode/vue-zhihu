<template>
    <div class="main-content">
        <swiper :top-data="top_stories"></swiper>
        <newslist :news-data="stories"></newslist>
    </div>
</template>
<script>
import API from '../service/api.js'
import swiper from '../components/swiper'
import newslist from '../components/newslist'
export default {
  name: 'homepage',
  components: {
    swiper,
    newslist
  },
  data(){
      return {
          stories:[],
          top_stories:[]
      }
  },
  mounted() {
    this.getLatestNews()
  },
  methods:{
      getLatestNews(){
          if (this.$route.name === 'Home'){
              API(this).getLatestNews().then((res) => {
                if (res.status === 200){
                    this.stories = res.data.stories,
                    this.top_stories = res.data.top_stories
                }
             })
          } else {
              API(this).getThemeNews().then((res) => {
                if (res.status === 200){
                    this.stories = res.data.stories,
                    this.top_stories = res.data.top_stories
                }
             })
          }
      }
  }
}
</script>

<style>
.main-content{
    padding-top: 56px;
}
</style>