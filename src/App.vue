<template>
  <div id="app">
    <Navbar/>
    <!-- <Home/> -->

    <router-view></router-view>

  </div>
</template>

<script>
import Home from './components/Home'
import Navbar from './components/Navbar'

export default {
  // name: 'app',
  components: {
    Navbar,
    Home,
    // FileUpload: VueUploadComponent
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  #app {
    position: relative;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;

    // background: #ECEFF1;
    background-size: cover;

    a {
      &:hover {
        text-decoration: none !important;
      }
    }
    nav {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

      .nav-item {
        a {
          &:hover {
            text-decoration: none !important;
          }
        }
        &:hover {
          background-color: darken(#17a2b8, 5%) !important;
        }
        .nav-link {
          color: #ddd !important;
          font-weight: bold;
        }
      }
    }

    h4 {
      margin-bottom: 20px;
    }

    .custom-container {
      background: #fff;
      margin-top: 20px;
      padding: 20px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }

// https://github.com/lian-yue/vue-upload-component/blob/master/docs/views/examples/Full.vue

</style>



