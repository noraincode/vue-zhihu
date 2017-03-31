<template>
    <div>
        <swiper :top-data="top_stories"></swiper>
    </div>
</template>
<script>
import API from '../service/api.js'
import swiper from '../components/swiper'
export default {
  name: 'homepage',
  components: {
    swiper
  },
  data(){
      return {
          stories:[],
          top_stories:[]
      }
  },
  mounted: function () {
    this.$nextTick(function () {
        this.getLatestNews()
    })
  },
  methods:{
      getLatestNews(){
          API(this).getLatestNews().then((res) => {
              if (res.status === 200){
                  this.stories = res.data.stories,
                  this.top_stories = res.data.top_stories
              }
          })
      }
  }
}
</script>