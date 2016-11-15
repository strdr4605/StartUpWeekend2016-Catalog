<template lang="html">
  <div class="dashboard">
    <nav class="navbar navbar-inverse navbar-fixed-top" id="header">
        <div class="navbar-header">
          <ul>
          <li id="catalog-size"><img src="../../static/images/catalog2.png"></li>
          <li id="home"><a href="#">HOME</li>
          </ul>
        </div>
    </nav>
    <div id="sidebar-wrapper">
      <div class="row">
        <div class="images">
          <img src="http://webneel.com/daily/sites/default/files/images/daily/10-2013/15-tree-painting.jpg" class="ui-widget-content drag" id="img1">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg" class="ui-widget-content">
          <img src="https://s-media-cache-ak0.pinimg.com/236x/1b/8d/d5/1b8dd592b1ca8f9e1b1e01d31d822d9c.jpg" class="ui-widget-content">
          <img src="../../static/images/bg.png" class="ui-widget-content">
        </div>

          <form enctype="multipart/form-data" action="http://localhost:3000/api/v1/upload/user@gmail.com" method="post">
            <input name="avatar" type="file">
            <button id="submit">Send Files</button>
          </form>
          {{message}}
        <div id="image-pos">
          <img src="../../static/images/upload.png">
          <img @click="this.getPDF" src="../../static/images/save.png">
        </div>
      </div>

    </div>

    <div class="col-md-8 col-md-offset-3" id="content">
      <div class="page" id="work-page">
        <!-- <div class="container" id="work-dropzone">
          <p>Dropp</p>
        </div> -->
        <div class="info">
            Summer, 2013 <br>
            110x85cm <br>
            Oil, canvas <br>
            800$
        </div>
        <!-- <img src="images/bg.png"> -->
      </div>
      <ul id="pages">
        <li><a href="#/dashboard" class="btn btn-default">1</a></li>
        <li><a href="#/dashboard" class="btn btn-default">2</a></li>
        <li><a href="#/dashboard" class="btn btn-primary">Add Page</a></li>

      </ul>
    </div>
  </div>
</template>

<script>
import request from 'browser-request'

export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    PDF () {
      return new Promise((resolve, reject) => {
        request('http://localhost:3000/api/v1/getPDF/user@gmail.com', function (er, response, body) {
          if (er) {
          }
          resolve(JSON.parse(body))
        })
      })
    },
    async getPDF () {
      this.message = await this.PDF()
      console.log('clicked  ')
    }
  }
}
</script>

<style lang="css" scoped>
#sidebar-wrapper {
  top: 50px;
}
#input-pos {
  display: none;
}

.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus {
    background-color: #000;
    border-color: #000;
}
</style>
