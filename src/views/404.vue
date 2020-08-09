<template>
  <div>
    <!-- Page Header Section Start Here -->
    <section class="page-header">
      <div class="container">
        <div class="page-title">
          <h2>Covid-19 404</h2>
          <ul class="breadcrumb lab-ul">
            <li><router-link to="/">Home</router-link></li>
            <li>404</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 404 Section Start Here -->
    <div class="fore-zero-page">
      <div class="container">
        <div class="images">
          <img src="../assets/images/banner/404/404.png" alt="404" />
        </div>
        <div class="text-content text-center">
          <h3>Oops! This Page Not Found</h3>
          <p>We are Really Sorry But the Page you Requested is Missing :(</p>
          <router-link to="/" class="lab-btn"
            ><span>Go Back to Home</span></router-link
          >
        </div>
      </div>
    </div>
    <!-- 404 Section Ending Here -->
  </div>
</template>
<script>
export default {
  name: "404",
  components: {},
};
</script>
<style lang="stylus" scoped></style>
