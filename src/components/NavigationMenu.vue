<template>
  <div>
    <!-- Mobile Menu Start Here -->
    <div class="mobile-menu" id="home">
      <nav class="mobile-header">
        <div class="header-logo">
          <a href="index.html"
            ><img src="../assets/images/logo/01.png" alt="logo"
          /></a>
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
              <li><a href="#home">Home</a></li>
              <li><a href="#symptoms">Symptoms</a></li>
              <li><a href="#prevention">Prevention</a></li>
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
              <a href="index.html"
                ><img src="../assets/images/logo/03.png" alt="logo"
              /></a>
            </div>
            <div class="main-area">
              <div class="main-menu">
                <ul class="lab-ul">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#symptoms">Symptoms</a></li>
                  <li><a href="#prevention">Prevention</a></li>
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
  components: {}
};
</script>
