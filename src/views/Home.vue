<template>
  <div class="home">
    <NavigationMenu />
    <section class="banner-section home-3">
      <div class="banner-area">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-6 col-12">
              <div class="content-part">
                <div class="banner-content">
                  <h2>COVID-19 Tracker</h2>
                  <h4>Tatal Confirmed Corona Cases</h4>
                  <h2 class="count-people">19232680</h2>
                  <ul class="lab-ul">
                    <li>
                      Active cases <span class="count-people">799571</span>
                    </li>
                    <li>
                      Recovered cases <span class="count-people">12344200</span>
                    </li>
                    <li>Deaths <span class="count-people">716436</span></li>
                  </ul>
                  <a href="#" class="lab-btn style-2"
                    ><span>Meet the doctor</span></a
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="banner-round">
                <img src="../assets/images/banner/home/01.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationMenu from "../components/NavigationMenu";
export default {
  name: "Home",
  components: {
    NavigationMenu,
  },
};
</script>
<style>
#app {
  height: 100%;
}
.home {
  height: 100%;
}
html,
body {
  height: 100%;
}
</style>
