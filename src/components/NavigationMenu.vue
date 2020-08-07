<template>
  <div>
    <!-- Mobile Menu Start Here -->
    <div class="mobile-menu" id="home">
      <nav class="mobile-header">
        <div class="header-logo">
          <router-link to="/"
            ><img src="../assets/images/logo/01.png" alt="logo"
          /></router-link>
        </div>
        <div class="header-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <nav class="mobile-menu">
        <div class="mobile-menu-area">
          <div class="mobile-menu-area-inner">
            <ul class="lab-ul">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/symptoms">Symptoms</router-link></li>
              <li><router-link to="/prevention">Prevention</router-link></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- Mobile Menu Ending Here -->
    <!-- desktop menu start here -->
    <header class="header-section transparent-header" id="home">
      <div class="header-area">
        <div class="container">
          <div class="primary-menu">
            <div class="logo">
              <router-link to="/"
                ><img src="../assets/images/logo/03.png" alt="logo"
              /></router-link>
            </div>
            <div class="main-area">
              <div class="main-menu">
                <ul class="lab-ul">
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/symptoms">Symptoms</router-link></li>
                  <li>
                    <router-link to="/prevention">Prevention</router-link>
                  </li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </div>
              <div class="header-btn">
                <a href="#" class="lab-btn style-2"
                  ><span>are you sick</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- desktop menu ending here -->
  </div>
</template>
<script>
export default {
  name: "NavigationMenu",
  components: {},
};
</script>
