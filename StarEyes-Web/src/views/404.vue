<template>
  <div class="err404">
    <h1>404</h1>
    <h3>你访问的网页消失了！</h3>
    <p>
      The site configured at this address does not contain the requested file.
    </p>
    <h5>
      <router-link to="login" class="go-home">去首页</router-link>
    </h5>
  </div>
</template>

<style>
.err404 {
  text-align: center;
  width: 350px;
  margin: 150px auto;
  height: 255px;
  padding: 0 0 0 0;
}

.err404 .go-home {
  width: 130px;
  height: 38px;
  background: #4c99fe;
  line-height: 38px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  display: inline-block;
  border-radius: 5px;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>
