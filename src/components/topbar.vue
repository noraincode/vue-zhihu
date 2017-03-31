<template>
    <div>
        <mu-appbar title="Title">
            <mu-icon-button @click="toggle(true)" icon='menu' slot="left"/>
            <mu-icon-button icon='expand_more' slot="right"/>
        </mu-appbar>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-card>
                <mu-card-header title="Myron Avatar" subTitle="sub title">
                    <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="avatar"/>
                </mu-card-header>
                <mu-card-actions>
                    <mu-flat-button label="我的收藏" icon="grade"/>
                    <mu-flat-button label="离线下载" icon="cloud_download"/>
                </mu-card-actions>
            </mu-card>
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="首页">
                    <mu-icon slot="left" value="home" :size="24"/>
                </mu-list-item>
                <mu-list-item v-for="item in themeList" :item="item" :key="item.id" :vlaue="item.name">
                    {{item.name}}
                </mu-list-item>
                <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
import API from '../service/api.js'
export default {
  name: 'topbar',
  components: {
    
  },
  data(){
      return {
          open: false,
          docked: true,
          themeList: []
      }
  },
  methods: {
    toggle(flag) {
      this.open = !this.open
      this.docked = !flag
      if(flag) {
          this.getThemeList()
      }
    },
    getThemeList(){
      API(this).getThemeList().then((res) => {
        if (res.status === 200){
            this.themeList = res.data.others
        }
      })
    }
  }
}
</script>