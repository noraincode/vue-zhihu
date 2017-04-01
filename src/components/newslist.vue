<template>
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in newsData">
        <mu-list-item disableRipple>
            <div>{{item.title}}</div>
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
export default {
  props:['newsData'],
  data () {
    return {
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.trigger = this.$el
    this.scroller = this.$el
  },
  methods: {
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
        console.log("refresh")
      }, 2000)
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        console.log("refresh")
      }, 2000)
    }
  }
}
</script>

<style>
.demo-refresh-container{
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
  position: relative;
  user-select: none;
}
</style>