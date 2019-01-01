<template>
  <div class='container'>
    <router-view />
    <router-view name='footer'/>
     <audio :src="songmid" autoplay loop>

     </audio>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      songmid: state => state.Home.songmid
    })
  },
  methods: {
    ...mapActions({
      'getmusic': 'getmusic'
    })
  },
  mounted () {
    this.getmusic()
    setInterval(this.getmusic, 500000)
  }
}
</script>

<style>
</style>
