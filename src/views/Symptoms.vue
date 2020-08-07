<template>
  <div>
    <NavigationMenu />
    <!-- Page Header Section Start Here -->
    <section class="page-header">
      <div class="container">
        <div class="page-title">
          <h2>Covid-19 Symtomes</h2>
          <ul class="breadcrumb lab-ul">
            <li><router-link to="/">Home</router-link></li>
            <li>Prevention</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Page Header Section Ending Here -->
    <!-- Service Section Start Here -->
    <section class="service-section home-3 padding-tb" id="symptoms">
      <div class="container">
        <div
          class="section-header wow fadeInUp"
          data-wow-delay="0.3s"
          style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
        >
          <h2>Corona Virus Symptoms</h2>
          <p>
            Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear
            two to 14 days after exposure. This time after exposure and before
            having symptoms is called the incubation period. Common signs and
            symptoms can include:
          </p>
        </div>
        <div class="section-wrapper">
          <div class="row no-gutters justify-content-center">
            <div
              class="col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.3s"
              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <div class="service-item style-2">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src="../assets/images/avatars/01.jpg" alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Coughing And Sneezing</h4>
                    <p>
                      Covering coughs and sneezes and keeping hands clean can
                      help prevent the spread of serious respiratory illnesses
                      like influenza, respiratory syncytial virus (RSV),
                      whooping cough, and COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
            >
              <div class="service-item style-2">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src="../assets/images/avatars/02.jpg" alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Hot Fever</h4>
                    <p>
                      A fever occurs when the body’s temperature rises above
                      100.4°F (38°C) for a sustained period
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.5s"
              style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"
            >
              <div class="service-item style-2">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src="../assets/images/avatars/03.jpg" alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Strong Headacke</h4>
                    <p>
                      A headache can affect any part of the head, and pain may
                      be present in one or several locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.6s"
              style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
            >
              <div class="service-item style-2">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src="../assets/images/avatars/04.jpg" alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Shortness Of Breath</h4>
                    <p>
                      Another common symptoms of COVID-19 include Shortness of
                      breath, or dyspnea, is an uncomfortable condition that
                      makes it difficult to fully get air into your lungs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.7s"
              style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
            >
              <div class="service-item style-2">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src="../assets/images/avatars/05.jpg" alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Confusion</h4>
                    <p>
                      Confusion is a symptom that makes you feel as if you can't
                      think clearly. You might feel disoriented and have a hard
                      time focusing or making decisions. Confusion is also
                      referred to as disorientation. In its extreme state, it's
                      referred to as delirium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.8s"
              style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;"
            >
              <div class="service-item style-2">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src="../assets/images/avatars/06.jpg" alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Sore Throat</h4>
                    <p>
                      A sore throat is a painful, dry, or scratchy feeling in
                      the throat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Section Ending Here -->
  </div>
</template>
<script>
import NavigationMenu from "../components/NavigationMenu";
export default {
  name: "Symptoms",
  components: {
    NavigationMenu,
  },
};
</script>
