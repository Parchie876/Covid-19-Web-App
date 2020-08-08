<template>
  <div>
    <!-- Page Header Section Start Here -->
    <section class="page-header">
      <div class="container">
        <div class="page-title">
          <h2>Covid-19 FAQ</h2>
          <ul class="breadcrumb lab-ul">
            <li><router-link to="/">Home</router-link></li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- faq section start here -->

    <section class="faq-section bg-f9 padding-tb">
      <div class="container">
        <div class="section-header wow fadeInUp" data-wow-delay="0.3s">
          <div class="faq-shape">
            <img src="../assets/images/faq/01.png" alt="action-shape" />
          </div>
          <span>FAQ Of The Coronavirus-</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="section-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <ul
            class="tab-lists lab-ul nav justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item tab-list">
              <a
                class="active"
                id="general-tab"
                data-toggle="tab"
                href="#general"
                role="tab"
                aria-controls="general"
                aria-selected="true"
                >General</a
              >
            </li>
            <li class="nav-item tab-list">
              <a
                id="Spread-tab"
                data-toggle="tab"
                href="#Spread"
                role="tab"
                aria-controls="Spread"
                aria-selected="false"
                >Spreads</a
              >
            </li>
            <li class="nav-item tab-list">
              <a
                id="medical-tab"
                data-toggle="tab"
                href="#medical"
                role="tab"
                aria-controls="medical"
                aria-selected="false"
                >Medical</a
              >
            </li>
            <li class="nav-item tab-list">
              <a
                id="contact-tracing-tab"
                data-toggle="tab"
                href="#contact-tracing"
                role="tab"
                aria-controls="contact-tracing"
                aria-selected="false"
                >Contact Tracing</a
              >
            </li>
            <li class="nav-item tab-list">
              <a
                id="travel-tab"
                data-toggle="tab"
                href="#travel"
                role="tab"
                aria-controls="travel"
                aria-selected="false"
                >Travel</a
              >
            </li>
          </ul>
          <div class="tab-content faq-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="general"
              role="tabpanel"
              aria-labelledby="general-tab"
            >
              <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>What is Covid-19?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          The coronavirus disease (COVID-19) is an infectious
                          disease caused by a new strain of coronavirus. This
                          new virus and disease were unknown before the outbreak
                          began in Wuhan, China, in December 2019.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item" v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Why is the diease being called coronavirus disease
                            2019,COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          On February 11, 2020 the World Health Organization
                          announced an official name for the disease that is
                          causing the 2019 novel coronavirus outbreak, first
                          identified in Wuhan China. The new name of this
                          disease is coronavirus disease 2019, abbreviated as
                          COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’
                          for ‘virus,’ and ‘D’ for disease. Formerly, this
                          disease was referred to as “2019 novel coronavirus” or
                          “2019-nCoV”.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item" v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>Should I worry about COVID-19?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Illness due to COVID-19 infection is generally mild,
                          especially for children and young adults. However, it
                          can cause serious illness: about 1 in every 5 people
                          who catch it need hospital care. It is therefore quite
                          normal for people to worry about how the COVID-19
                          outbreak will affect them and their loved ones. We can
                          channel our concerns into actions to protect
                          ourselves, our loved ones and our communities. First
                          and foremost among these actions is regular and
                          thorough hand-washing and good respiratory hygiene.
                          Secondly, keep informed and follow the advice of the
                          local health authorities including any restrictions
                          put in place on travel, movement and gatherings.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item" v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>Is COVID-19 the same as SARS?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer" v-on:click="all()">
                        <p>
                          No. The virus that causes COVID-19 and the one that
                          caused the outbreak of Severe Acute Respiratory
                          Syndrome (SARS) in 2003 are related to each other
                          genetically, but the diseases they cause are quite
                          different. SARS was more deadly but much less
                          infectious than COVID-19. There have been no outbreaks
                          of SARS anywhere in the world since 2003.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item" v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            How long is the incubation period for COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          The “incubation period” means the time between
                          catching the virus and beginning to have symptoms of
                          the disease. Most estimates of the incubation period
                          for COVID-19 range from 1-14 days, most commonly
                          around five days. These estimates will be updated as
                          more data become available.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item" v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Is it safe to receive a package from any area where
                            COVID-19 has been reported?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Yes. The likelihood of an infected person
                          contaminating commercial goods is low and the risk of
                          catching the virus that causes COVID-19 from a package
                          that has been moved, travelled, and exposed to
                          different conditions and temperature is also low.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="Spread"
              role="tabpanel"
              aria-labelledby="Spread-tab"
            >
              <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            How does the virus spread?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          The virus that causes COVID-19 is thought to spread
                          mainly from person to person, mainly through
                          respiratory droplets produced when an infected person
                          coughs, sneezes, or talks. These droplets can land in
                          the mouths or noses of people who are nearby or
                          possibly be inhaled into the lungs. Spread is more
                          likely when people are in close contact with one
                          another (within about 6 feet). COVID-19 seems to be
                          spreading easily and sustainably in the community
                          (“community spread”) in many affected geographic
                          areas. Community spread means people have been
                          infected with the virus in an area, including some who
                          are not sure how or where they became infected.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Can the virus that cause COVID-19 be spread through
                            food?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Coronaviruses are generally thought to be spread from
                          person to person through respiratory droplets.
                          Currently, there is no evidence to support
                          transmission of COVID-19 associated with food. Before
                          preparing or eating food it is important to always
                          wash your hands with soap and water for at least 20
                          seconds for general food safety. Throughout the day
                          use a tissue to cover your coughing or sneezing, and
                          wash your hands after blowing your nose, coughing or
                          sneezing, or going to the bathroom.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Will worm weather stop the outbreak of COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          It is not yet known whether weather and temperature
                          affect the spread of COVID-19. Some other viruses,
                          like those that cause the common cold and flu, spread
                          more during cold weather months but that does not mean
                          it is impossible to become sick with these viruses
                          during other months. There is much more to learn about
                          the transmissibility, severity, and other features
                          associated with COVID-19 and investigations are
                          ongoing.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>What is community spread?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Community spread means people have been infected with
                          the virus in an area, including some who are not sure
                          how or where they became infected. Each health
                          department determines community spread differently
                          based on local conditions. For information on
                          community spread in your area, please visit your
                          health department’s website
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Can mosquitoes or ticks spread the virus that cause
                            COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          At this time, CDC has no data to suggest that this new
                          coronavirus or other similar coronaviruses are spread
                          by mosquitoes or ticks. The main way that COVID-19
                          spreads is from person to person. See How Coronavirus
                          Spreads for more information.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>Can the coronavirus spread via feces?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          There is some evidence that COVID-19 infection may
                          lead to intestinal infection and be present in faeces.
                          However, to date only one study has cultured the
                          COVID-19 virus from a single stool specimen. There
                          have been no reports of faecal−oral transmission of
                          the COVID-19 virus to date
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="medical"
              role="tabpanel"
              aria-labelledby="medical-tab"
            >
              <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>Who is at risk for severe COVID-19?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          COVID-19 is a new disease and CDC is learning more
                          about it every day. Among adults, the risk for severe
                          illness from COVID-19 increases with age, with older
                          adults at highest risk. Severe illness means that the
                          person with COVID-19 may require hospitalization,
                          intensive care, or a ventilator to help them breathe,
                          or they may even die. People of any age with certain
                          underlying medical conditions are also at increased
                          risk for severe illness from SARS-CoV-2 infection.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>How are Covid19 patients treated?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Not all patients with COVID-19 will require medical
                          supportive care. Clinical management for hospitalized
                          patients with COVID-19 is focused on supportive care
                          for complications, including supplemental oxygen and
                          advanced organ support for respiratory failure, septic
                          shock, and multi-organ failure. Empiric testing and
                          treatment for other viral or bacterial etiologies may
                          be warranted.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Do patients with confirmed or suspected COVID-19
                            need to be admitted to the hospital?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Not all patients with COVID-19 require hospital
                          admission. Patients whose clinical presentation
                          warrants in-patient clinical management for supportive
                          medical care should be admitted to the hospital under
                          appropriate Transmission-Based Precautions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            When can patients with confirmed COVID-19 be
                            discharged from the hospital?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Patients can be discharged from the healthcare
                          facility whenever clinically indicated. Meeting
                          criteria for discontinuation of Transmission-Based
                          Precautions is not a prerequisite for discharge from a
                          healthcare facility. Isolation should be maintained at
                          home if the patient returns home before the time
                          period recommended for discontinuation of hospital
                          Transmission-Based Precautions.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>Can you catch the coronavirus twice?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Research suggests coronavirus reinfection is unlikely
                          But despite the anecdotal reports from doctors about
                          patients becoming reinfected with the coronavirus,
                          researchers say there's no evidence supporting the
                          notion that people can become reinfected with the
                          virus within a short time period. "I haven't heard of
                          a case where it's been truly unambiguously
                          demonstrated," said Marc Lipsitch, an epidemiologist
                          at the Harvard T.H. Chan School of Public Health.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>Are people with disabilities at higher risk?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Most people with disabilities are not inherently at
                          higher risk for becoming infected with or having
                          severe illness from COVID-19. Some people with
                          physical limitations or other disabilities might be at
                          a higher risk of infection because of their underlying
                          medical condition.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="contact-tracing"
              role="tabpanel"
              aria-labelledby="contact-tracing-tab"
            >
              <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>What is contact tracing?</h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Contact tracing has been used for decades by state and
                          local health departments to slow or stop the spread of
                          infectious diseases. Contact tracing slows the spread
                          of COVID-19 by Letting people know they may have been
                          exposed to COVID-19 and should monitor their health
                          for signs and symptoms of COVID-19 Helping people who
                          may have been exposed to COVID-19 get tested Asking
                          people to self-isolate if they have COVID-19 or
                          self-quarantine if they are a close contact of someone
                          with COVID-19
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Who is considered a close contact to someone with
                            COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          For COVID-19, a close contact is anyone who was within
                          6 feet of an infected person for at least 15 minutes.
                          An infected person can spread COVID-19 starting 48
                          hours (or 2 days) before the person had any symptoms
                          or tested positive for COVID-19.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Am I considered a close contact if I was wearing a
                            mask?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Yes, you are still considered a close contact even if
                          you were wearing a mask while you were around someone
                          with COVID-19. Masks are meant to protect other people
                          in case you are infected, and not to protect you from
                          becoming infected.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            If I am a close contact, will I be tested for
                            COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          If you have been around someone who is sick with
                          COVID-19, CDC recommends that you get tested for
                          COVID-19. Get tested for COVID-19 as soon as you know
                          that you have been around a person diagnosed with
                          COVID-19. The health department may be able to provide
                          resources for testing in your area. While you are
                          waiting for your COVID-19 test result, stay home away
                          from others (self-quarantine) and monitor your health
                          for symptoms of COVID-19 to protect your friends,
                          family, and others from possibly getting COVID-19.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            What will happen during contact tracing if I am
                            diagnosed with COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          If you are diagnosed with COVID-19, someone from the
                          health department may call you to check on your
                          health, discuss who you have been around, and ask
                          where you spent time while you may have been able to
                          spread COVID-19 to others. You will also be asked to
                          continue to stay at home and self-isolate, away from
                          others.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            I was around someone who has COVID-19, and my
                            COVID-19 test came back negative. Do I still need to
                            quarantine for 14 days after I was last exposed?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          <strong>Yes.</strong> You should still self-quarantine
                          for 14 days since your last exposure. It can take up
                          to 14 days after exposure to the virus for a person to
                          develop COVID-19 symptoms. A negative result before
                          end of the 14-day quarantine period does not rule out
                          possible infection. By self-quarantining for 14 days,
                          you lower the chance of possibly exposing others to
                          COVID-19.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="travel"
              role="tabpanel"
              aria-labelledby="travel-tab"
            >
              <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Should I avoid traveling internationally?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Travel increases your chance of getting and spreading
                          COVID-19. COVID-19 risk in most countries is high, and
                          travelers should avoid nonessential travel to
                          high-risk countries. Travelers at increased risk for
                          severe illness should consider postponing all travel,
                          including essential travel, to high-risk countries.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            What can I expect when departing other countries?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Some countries are conducting exit screening for all
                          passengers leaving their country. Before being
                          permitted to board a departing flight, you may have
                          your temperature taken and be asked questions about
                          your travel history and health.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            When can I return to work after international
                            travel?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Most travelers can go back to work but should take
                          precautions. Some travelers may have higher risk of
                          exposure and should stay home for 14 days. See CDC’s
                          After Travel webpage to learn what precautions you
                          should take
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-8 col-12">
                  <ul class="accordion lab-ul">
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            Can flying on an airplane increase my risk of
                            getting COVID-19?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Yes. Air travel requires spending time in security
                          lines and airport terminals, which can bring you in
                          close contact with other people and frequently touched
                          surfaces. Most viruses and other germs do not spread
                          easily on flights because of how air circulates and is
                          filtered on airplanes. However, social distancing is
                          difficult on crowded flights, and you may have to sit
                          near others (within 6 feet), sometimes for hours. This
                          may increase your risk for exposure to the virus that
                          causes COVID-19.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            What happens if there is a sick passenger on an
                            international or domestic flight?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Under current federal regulations, pilots must report
                          all illnesses and deaths to CDC before arriving to a
                          U.S. destination. According to CDC disease protocols,
                          if a sick traveler is considered a risk to the
                          public’s health, CDC works with local and state health
                          departments and international public health agencies
                          to contact exposed passengers and crew.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item " v-on:click="all()">
                      <div class="accordion-list">
                        <div class="left">
                          <div class="icon">
                            <i class="mdi mdi-plus-circle"></i>
                          </div>
                        </div>
                        <div class="right">
                          <h6>
                            When will the borders be re-opened to visitors?
                          </h6>
                        </div>
                      </div>
                      <div class="accordion-answer">
                        <p>
                          Beginning June 15, the Jamaican borders will be opened
                          to visitors. Controlled entry will be facilitated by
                          registration and approval.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq section ending here -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "FAQ",
  components: {},
  methods: {
    all(e) {
      // accordion start here
      $(".accordion-item .active").slideDown();
      $(".accordion-list").on("click", function(e) {
        if (
          $(this)
            .next(".accordion-answer")
            .css("display") != "block"
        ) {
          $(".accordion-item .active")
            .slideUp(500)
            .removeClass("active");
          $(".accordion-list").removeClass("in");
          $(this)
            .next(".accordion-answer")
            .addClass("active")
            .slideDown(500);
          $(this).addClass("in");
        } else {
          if (
            $(this)
              .next(".accordion-answer")
              .css("display") != "block"
          ) {
            $(".accordion-item .active")
              .slideUp(500)
              .removeClass("active");
            $(this).removeClass("in");
          }
        }
      });
    }
  }
};
</script>
