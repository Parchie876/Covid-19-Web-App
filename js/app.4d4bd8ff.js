(function(t) {
  function e(e) {
    for (
      var a, o, c = e[0], r = e[1], l = e[2], v = 0, u = [];
      v < c.length;
      v++
    )
      (o = c[v]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && u.push(i[o][0]),
        (i[o] = 0);
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    d && d(e);
    while (u.length) u.shift()();
    return n.push.apply(n, l || []), s();
  }
  function s() {
    for (var t, e = 0; e < n.length; e++) {
      for (var s = n[e], a = !0, c = 1; c < s.length; c++) {
        var r = s[c];
        0 !== i[r] && (a = !1);
      }
      a && (n.splice(e--, 1), (t = o((o.s = s[0]))));
    }
    return t;
  }
  var a = {},
    i = { app: 0 },
    n = [];
  function o(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = t),
    (o.c = a),
    (o.d = function(t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (o.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          o.d(
            s,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return s;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var l = 0; l < c.length; l++) e(c[l]);
  var d = r;
  n.push([0, "chunk-vendors"]), s();
})({
  0: function(t, e, s) {
    t.exports = s("56d7");
  },
  "0129": function(t, e, s) {
    t.exports = s.p + "../img/P07.798b232a.jpg";
  },
  "02d7": function(t, e, s) {
    t.exports = s.p + "../img/10.e23ea3a8.jpg";
  },
  "07b6": function(t, e, s) {
    t.exports = s.p + "../img/08.001b6253.jpg";
  },
  "0a38": function(t, e, s) {
    t.exports = s.p + "../img/P02.bb66f985.jpg";
  },
  "0b2e": function(t, e, s) {
    "use strict";
    s.r(e);
    var a = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("section", { staticClass: "page-header" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "page-title" }, [
                s("h2", [t._v("Covid-19 FAQ")]),
                s("ul", { staticClass: "breadcrumb lab-ul" }, [
                  s(
                    "li",
                    [s("router-link", { attrs: { to: "/" } }, [t._v("Home")])],
                    1
                  ),
                  s("li", [t._v("FAQ")]),
                ]),
              ]),
            ]),
          ]),
          s("section", { staticClass: "faq-section bg-f9 padding-tb" }, [
            s("div", { staticClass: "container" }, [
              t._m(0),
              s(
                "div",
                {
                  staticClass: "section-wrapper wow fadeInUp",
                  attrs: { "data-wow-delay": "0.4s" },
                },
                [
                  t._m(1),
                  s(
                    "div",
                    {
                      staticClass: "tab-content faq-content",
                      attrs: { id: "myTabContent" },
                    },
                    [
                      s(
                        "div",
                        {
                          staticClass: "tab-pane fade show active",
                          attrs: {
                            id: "general",
                            role: "tabpanel",
                            "aria-labelledby": "general-tab",
                          },
                        },
                        [
                          s(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(2), t._m(3)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(4), t._m(5)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(6), t._m(7)]
                                    ),
                                  ]),
                                ]
                              ),
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [
                                        t._m(8),
                                        s(
                                          "div",
                                          {
                                            staticClass: "accordion-answer",
                                            on: {
                                              click: function(e) {
                                                return t.all();
                                              },
                                            },
                                          },
                                          [
                                            s("p", [
                                              t._v(
                                                " No. The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different. SARS was more deadly but much less infectious than COVID-19. There have been no outbreaks of SARS anywhere in the world since 2003. "
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(9), t._m(10)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(11), t._m(12)]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "Spread",
                            role: "tabpanel",
                            "aria-labelledby": "Spread-tab",
                          },
                        },
                        [
                          s(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(13), t._m(14)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(15), t._m(16)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(17), t._m(18)]
                                    ),
                                  ]),
                                ]
                              ),
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(19), t._m(20)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(21), t._m(22)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(23), t._m(24)]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "medical",
                            role: "tabpanel",
                            "aria-labelledby": "medical-tab",
                          },
                        },
                        [
                          s(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(25), t._m(26)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(27), t._m(28)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(29), t._m(30)]
                                    ),
                                  ]),
                                ]
                              ),
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(31), t._m(32)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(33), t._m(34)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(35), t._m(36)]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "contact-tracing",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tracing-tab",
                          },
                        },
                        [
                          s(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(37), t._m(38)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(39), t._m(40)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(41), t._m(42)]
                                    ),
                                  ]),
                                ]
                              ),
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(43), t._m(44)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(45), t._m(46)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(47), t._m(48)]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "travel",
                            role: "tabpanel",
                            "aria-labelledby": "travel-tab",
                          },
                        },
                        [
                          s(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(49), t._m(50)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(51), t._m(52)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(53), t._m(54)]
                                    ),
                                  ]),
                                ]
                              ),
                              s(
                                "div",
                                { staticClass: "col-lg-6 col-sm-8 col-12" },
                                [
                                  s("ul", { staticClass: "accordion lab-ul" }, [
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(55), t._m(56)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(57), t._m(58)]
                                    ),
                                    s(
                                      "li",
                                      {
                                        staticClass: "accordion-item ",
                                        on: {
                                          click: function(e) {
                                            return t.all();
                                          },
                                        },
                                      },
                                      [t._m(59), t._m(60)]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]);
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "section-header wow fadeInUp",
              attrs: { "data-wow-delay": "0.3s" },
            },
            [
              a("div", { staticClass: "faq-shape" }, [
                a("img", { attrs: { src: s("d9b4"), alt: "action-shape" } }),
              ]),
              a("span", [t._v("FAQ Of The Coronavirus-")]),
              a("h2", [t._v("Frequently Asked Questions")]),
            ]
          );
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "ul",
            {
              staticClass: "tab-lists lab-ul nav justify-content-center",
              attrs: { id: "myTab", role: "tablist" },
            },
            [
              s("li", { staticClass: "nav-item tab-list" }, [
                s(
                  "a",
                  {
                    staticClass: "active",
                    attrs: {
                      id: "general-tab",
                      "data-toggle": "tab",
                      href: "#general",
                      role: "tab",
                      "aria-controls": "general",
                      "aria-selected": "true",
                    },
                  },
                  [t._v("General")]
                ),
              ]),
              s("li", { staticClass: "nav-item tab-list" }, [
                s(
                  "a",
                  {
                    attrs: {
                      id: "Spread-tab",
                      "data-toggle": "tab",
                      href: "#Spread",
                      role: "tab",
                      "aria-controls": "Spread",
                      "aria-selected": "false",
                    },
                  },
                  [t._v("Spreads")]
                ),
              ]),
              s("li", { staticClass: "nav-item tab-list" }, [
                s(
                  "a",
                  {
                    attrs: {
                      id: "medical-tab",
                      "data-toggle": "tab",
                      href: "#medical",
                      role: "tab",
                      "aria-controls": "medical",
                      "aria-selected": "false",
                    },
                  },
                  [t._v("Medical")]
                ),
              ]),
              s("li", { staticClass: "nav-item tab-list" }, [
                s(
                  "a",
                  {
                    attrs: {
                      id: "contact-tracing-tab",
                      "data-toggle": "tab",
                      href: "#contact-tracing",
                      role: "tab",
                      "aria-controls": "contact-tracing",
                      "aria-selected": "false",
                    },
                  },
                  [t._v("Contact Tracing")]
                ),
              ]),
              s("li", { staticClass: "nav-item tab-list" }, [
                s(
                  "a",
                  {
                    attrs: {
                      id: "travel-tab",
                      "data-toggle": "tab",
                      href: "#travel",
                      role: "tab",
                      "aria-controls": "travel",
                      "aria-selected": "false",
                    },
                  },
                  [t._v("Travel")]
                ),
              ]),
            ]
          );
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("What is Covid-19?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " The coronavirus disease (COVID-19) is an infectious disease caused by a new strain of coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Why is the diease being called coronavirus disease 2019,COVID-19? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("Should I worry about COVID-19?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Illness due to COVID-19 infection is generally mild, especially for children and young adults. However, it can cause serious illness: about 1 in every 5 people who catch it need hospital care. It is therefore quite normal for people to worry about how the COVID-19 outbreak will affect them and their loved ones. We can channel our concerns into actions to protect ourselves, our loved ones and our communities. First and foremost among these actions is regular and thorough hand-washing and good respiratory hygiene. Secondly, keep informed and follow the advice of the local health authorities including any restrictions put in place on travel, movement and gatherings. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("Is COVID-19 the same as SARS?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(" How long is the incubation period for COVID-19? "),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Is it safe to receive a package from any area where COVID-19 has been reported? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Yes. The likelihood of an infected person contaminating commercial goods is low and the risk of catching the virus that causes COVID-19 from a package that has been moved, travelled, and exposed to different conditions and temperature is also low. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v(" How does the virus spread? ")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " The virus that causes COVID-19 is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs, sneezes, or talks. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet). COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Can the virus that cause COVID-19 be spread through food? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Coronaviruses are generally thought to be spread from person to person through respiratory droplets. Currently, there is no evidence to support transmission of COVID-19 associated with food. Before preparing or eating food it is important to always wash your hands with soap and water for at least 20 seconds for general food safety. Throughout the day use a tissue to cover your coughing or sneezing, and wash your hands after blowing your nose, coughing or sneezing, or going to the bathroom. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(" Will worm weather stop the outbreak of COVID-19? "),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months. There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("What is community spread?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions. For information on community spread in your area, please visit your health department’s website "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Can mosquitoes or ticks spread the virus that cause COVID-19? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " At this time, CDC has no data to suggest that this new coronavirus or other similar coronaviruses are spread by mosquitoes or ticks. The main way that COVID-19 spreads is from person to person. See How Coronavirus Spreads for more information. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("Can the coronavirus spread via feces?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " There is some evidence that COVID-19 infection may lead to intestinal infection and be present in faeces. However, to date only one study has cultured the COVID-19 virus from a single stool specimen. There have been no reports of faecal−oral transmission of the COVID-19 virus to date "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("Who is at risk for severe COVID-19?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " COVID-19 is a new disease and CDC is learning more about it every day. Among adults, the risk for severe illness from COVID-19 increases with age, with older adults at highest risk. Severe illness means that the person with COVID-19 may require hospitalization, intensive care, or a ventilator to help them breathe, or they may even die. People of any age with certain underlying medical conditions are also at increased risk for severe illness from SARS-CoV-2 infection. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("How are Covid19 patients treated?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Not all patients with COVID-19 will require medical supportive care. Clinical management for hospitalized patients with COVID-19 is focused on supportive care for complications, including supplemental oxygen and advanced organ support for respiratory failure, septic shock, and multi-organ failure. Empiric testing and treatment for other viral or bacterial etiologies may be warranted. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Do patients with confirmed or suspected COVID-19 need to be admitted to the hospital? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Not all patients with COVID-19 require hospital admission. Patients whose clinical presentation warrants in-patient clinical management for supportive medical care should be admitted to the hospital under appropriate Transmission-Based Precautions. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " When can patients with confirmed COVID-19 be discharged from the hospital? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Patients can be discharged from the healthcare facility whenever clinically indicated. Meeting criteria for discontinuation of Transmission-Based Precautions is not a prerequisite for discharge from a healthcare facility. Isolation should be maintained at home if the patient returns home before the time period recommended for discontinuation of hospital Transmission-Based Precautions. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("Can you catch the coronavirus twice?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Research suggests coronavirus reinfection is unlikely But despite the anecdotal reports from doctors about patients becoming reinfected with the coronavirus, researchers say there's no evidence supporting the notion that people can become reinfected with the virus within a short time period. \"I haven't heard of a case where it's been truly unambiguously demonstrated,\" said Marc Lipsitch, an epidemiologist at the Harvard T.H. Chan School of Public Health. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("Are people with disabilities at higher risk?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Most people with disabilities are not inherently at higher risk for becoming infected with or having severe illness from COVID-19. Some people with physical limitations or other disabilities might be at a higher risk of infection because of their underlying medical condition. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v("What is contact tracing?")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Contact tracing has been used for decades by state and local health departments to slow or stop the spread of infectious diseases. Contact tracing slows the spread of COVID-19 by Letting people know they may have been exposed to COVID-19 and should monitor their health for signs and symptoms of COVID-19 Helping people who may have been exposed to COVID-19 get tested Asking people to self-isolate if they have COVID-19 or self-quarantine if they are a close contact of someone with COVID-19 "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Who is considered a close contact to someone with COVID-19? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " For COVID-19, a close contact is anyone who was within 6 feet of an infected person for at least 15 minutes. An infected person can spread COVID-19 starting 48 hours (or 2 days) before the person had any symptoms or tested positive for COVID-19. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Am I considered a close contact if I was wearing a mask? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Yes, you are still considered a close contact even if you were wearing a mask while you were around someone with COVID-19. Masks are meant to protect other people in case you are infected, and not to protect you from becoming infected. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " If I am a close contact, will I be tested for COVID-19? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " If you have been around someone who is sick with COVID-19, CDC recommends that you get tested for COVID-19. Get tested for COVID-19 as soon as you know that you have been around a person diagnosed with COVID-19. The health department may be able to provide resources for testing in your area. While you are waiting for your COVID-19 test result, stay home away from others (self-quarantine) and monitor your health for symptoms of COVID-19 to protect your friends, family, and others from possibly getting COVID-19. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " What will happen during contact tracing if I am diagnosed with COVID-19? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " If you are diagnosed with COVID-19, someone from the health department may call you to check on your health, discuss who you have been around, and ask where you spent time while you may have been able to spread COVID-19 to others. You will also be asked to continue to stay at home and self-isolate, away from others. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " I was around someone who has COVID-19, and my COVID-19 test came back negative. Do I still need to quarantine for 14 days after I was last exposed? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              s("strong", [t._v("Yes.")]),
              t._v(
                " You should still self-quarantine for 14 days since your last exposure. It can take up to 14 days after exposure to the virus for a person to develop COVID-19 symptoms. A negative result before end of the 14-day quarantine period does not rule out possible infection. By self-quarantining for 14 days, you lower the chance of possibly exposing others to COVID-19. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [t._v(" Should I avoid traveling internationally? ")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Travel increases your chance of getting and spreading COVID-19. COVID-19 risk in most countries is high, and travelers should avoid nonessential travel to high-risk countries. Travelers at increased risk for severe illness should consider postponing all travel, including essential travel, to high-risk countries. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(" What can I expect when departing other countries? "),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Some countries are conducting exit screening for all passengers leaving their country. Before being permitted to board a departing flight, you may have your temperature taken and be asked questions about your travel history and health. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(" When can I return to work after international travel? "),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Most travelers can go back to work but should take precautions. Some travelers may have higher risk of exposure and should stay home for 14 days. See CDC’s After Travel webpage to learn what precautions you should take "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " Can flying on an airplane increase my risk of getting COVID-19? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Yes. Air travel requires spending time in security lines and airport terminals, which can bring you in close contact with other people and frequently touched surfaces. Most viruses and other germs do not spread easily on flights because of how air circulates and is filtered on airplanes. However, social distancing is difficult on crowded flights, and you may have to sit near others (within 6 feet), sometimes for hours. This may increase your risk for exposure to the virus that causes COVID-19. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(
                  " What happens if there is a sick passenger on an international or domestic flight? "
                ),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Under current federal regulations, pilots must report all illnesses and deaths to CDC before arriving to a U.S. destination. According to CDC disease protocols, if a sick traveler is considered a risk to the public’s health, CDC works with local and state health departments and international public health agencies to contact exposed passengers and crew. "
              ),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-list" }, [
            s("div", { staticClass: "left" }, [
              s("div", { staticClass: "icon" }, [
                s("i", { staticClass: "mdi mdi-plus-circle" }),
              ]),
            ]),
            s("div", { staticClass: "right" }, [
              s("h6", [
                t._v(" When will the borders be re-opened to visitors? "),
              ]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "accordion-answer" }, [
            s("p", [
              t._v(
                " Beginning June 15, the Jamaican borders will be opened to visitors. Controlled entry will be facilitated by registration and approval. "
              ),
            ]),
          ]);
        },
      ],
      n = s("1157"),
      o = s.n(n),
      c = {
        name: "FAQ",
        components: {},
        methods: {
          all: function(t) {
            o()(".accordion-item .active").slideDown(),
              o()(".accordion-list").on("click", function(t) {
                "block" !=
                o()(this)
                  .next(".accordion-answer")
                  .css("display")
                  ? (o()(".accordion-item .active")
                      .slideUp(500)
                      .removeClass("active"),
                    o()(".accordion-list").removeClass("in"),
                    o()(this)
                      .next(".accordion-answer")
                      .addClass("active")
                      .slideDown(500),
                    o()(this).addClass("in"))
                  : "block" !=
                      o()(this)
                        .next(".accordion-answer")
                        .css("display") &&
                    (o()(".accordion-item .active")
                      .slideUp(500)
                      .removeClass("active"),
                    o()(this).removeClass("in"));
              });
          },
        },
      },
      r = c,
      l = s("2877"),
      d = Object(l["a"])(r, a, i, !1, null, null, null);
    e["default"] = d.exports;
  },
  "0fa9": function(t, e, s) {
    t.exports = s.p + "../img/01.aab389f1.png";
  },
  "1d38": function(t, e, s) {
    t.exports = s.p + "../img/05.228bdbbb.jpg";
  },
  "1e8b": function(t, e, s) {
    t.exports = s.p + "../img/05.faf4615b.jpg";
  },
  "250f": function(t, e, s) {
    "use strict";
    s.r(e);
    var a = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("section", { staticClass: "page-header" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "page-title" }, [
                s("h2", [t._v("Covid-19 How to Wash Your Hand")]),
                s("ul", { staticClass: "breadcrumb lab-ul" }, [
                  s(
                    "li",
                    [s("router-link", { attrs: { to: "/" } }, [t._v("Home")])],
                    1
                  ),
                  s("li", [t._v("How to Wash Your Hand")]),
                ]),
              ]),
            ]),
          ]),
          t._m(0),
        ]);
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "section",
            { staticClass: "safe-actions style-2 padding-tb bg-action" },
            [
              a("div", { staticClass: "container" }, [
                a(
                  "div",
                  {
                    staticClass: "section-header wow fadeInUp",
                    staticStyle: {
                      visibility: "visible",
                      "animation-delay": "0.3s",
                      "animation-name": "fadeInUp",
                    },
                    attrs: { "data-wow-delay": "0.3s" },
                  },
                  [
                    a("h2", [t._v("How to Wash Your Hands")]),
                    a("p", [
                      t._v(
                        " Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services. "
                      ),
                    ]),
                  ]
                ),
                a(
                  "div",
                  {
                    staticClass:
                      "row justify-content-center align-items-center",
                    staticStyle: { "counter-reset": "topx" },
                  },
                  [
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("5970"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Wet Hands")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("6663"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Apply Soap")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("b526"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Rub Hands Palm to palm")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("b6b1"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Lather The Back of Both Hands")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("1d38"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Scrub Between Your Fingers")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("712c"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [
                              t._v(
                                "Rub The Back of Fingers on The Opposing Palm"
                              ),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("2bce"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Clean Thumbs")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("07b6"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Wash Fingernails And Fingertips")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("7182"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Rinse Hands")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("02d7"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Dry with a Single Use Towel")]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("94eb"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [
                              t._v("Use The Towel to Rurn off The Foucet"),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass:
                          "col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "safe-item" }, [
                          a("div", { staticClass: "safe-thumb" }, [
                            a("img", {
                              attrs: { src: s("5277"), alt: "safe" },
                            }),
                          ]),
                          a("div", { staticClass: "safe-content" }, [
                            a("h6", [t._v("Your Hands Are Clean")]),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          );
        },
      ],
      n = { name: "WashHands", components: {} },
      o = n,
      c = s("2877"),
      r = Object(c["a"])(o, a, i, !1, null, null, null);
    e["default"] = r.exports;
  },
  "2bce": function(t, e, s) {
    t.exports = s.p + "../img/07.8d11c9cd.jpg";
  },
  "2f63": function(t, e, s) {
    "use strict";
    s.r(e);
    var a = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("section", { staticClass: "page-header" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "page-title" }, [
                s("h2", [t._v("Covid-19 Prevention")]),
                s("ul", { staticClass: "breadcrumb lab-ul" }, [
                  s(
                    "li",
                    [s("router-link", { attrs: { to: "/" } }, [t._v("Home")])],
                    1
                  ),
                  s("li", [t._v("Prevention")]),
                ]),
              ]),
            ]),
          ]),
          t._m(0),
          t._m(1),
        ]);
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "section",
            { staticClass: "service-section bg-f9 home-2 padding-tb" },
            [
              a("div", { staticClass: "container" }, [
                a(
                  "div",
                  {
                    staticClass: "section-header wow fadeInUp",
                    staticStyle: {
                      visibility: "visible",
                      "animation-delay": "0.3s",
                      "animation-name": "fadeInUp",
                    },
                    attrs: { "data-wow-delay": "0.3s" },
                  },
                  [
                    a("span", [t._v("How To Protect Yourself And Others")]),
                    a("h2", [t._v("Stay Safe From The Coronavirus.")]),
                  ]
                ),
                a("div", { staticClass: "section-wrapper" }, [
                  a("div", { staticClass: "row justify-content-center" }, [
                    a(
                      "div",
                      {
                        staticClass: "col-lg-4 col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-item text-center" }, [
                          a("div", { staticClass: "service-inner" }, [
                            a("div", { staticClass: "service-thumb" }, [
                              a("img", {
                                attrs: { src: s("4ca1"), alt: "service" },
                              }),
                            ]),
                            a("div", { staticClass: "service-content" }, [
                              a("h5", [t._v("Avoid Close Contact")]),
                              a("p", [
                                t._v(
                                  " Put 6 feet of distance between yourself and people who don’t live in your household. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-lg-4 col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-item text-center" }, [
                          a("div", { staticClass: "service-inner" }, [
                            a("div", { staticClass: "service-thumb" }, [
                              a("img", {
                                attrs: { src: s("5c5f"), alt: "service" },
                              }),
                            ]),
                            a("div", { staticClass: "service-content" }, [
                              a("h5", [t._v("Clean Your Hands Often")]),
                              a("p", [
                                t._v(
                                  " Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-lg-4 col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-item text-center" }, [
                          a("div", { staticClass: "service-inner" }, [
                            a("div", { staticClass: "service-thumb" }, [
                              a("img", {
                                attrs: { src: s("ed5d"), alt: "service" },
                              }),
                            ]),
                            a("div", { staticClass: "service-content" }, [
                              a("h5", [t._v("Stay At Home")]),
                              a("p", [
                                t._v(
                                  " Staying at home will help prevent the spread of the virus to family, friends, the wider community, and particularly those who are clinically extremely vulnerable. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-lg-4 col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-item text-center" }, [
                          a("div", { staticClass: "service-inner" }, [
                            a("div", { staticClass: "service-thumb" }, [
                              a("img", {
                                attrs: { src: s("9c8c"), alt: "service" },
                              }),
                            ]),
                            a("div", { staticClass: "service-content" }, [
                              a("h5", [t._v("Cover Coughs And Sneezes")]),
                              a("p", [
                                t._v(
                                  " Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit.Immediately wash your hands with soap and water for at least 20 seconds. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-lg-4 col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-item text-center" }, [
                          a("div", { staticClass: "service-inner" }, [
                            a("div", { staticClass: "service-thumb" }, [
                              a("img", {
                                attrs: { src: s("32d8"), alt: "service" },
                              }),
                            ]),
                            a("div", { staticClass: "service-content" }, [
                              a("h5", [
                                t._v("Wear a Facemask if You Are Sick"),
                              ]),
                              a("p", [
                                t._v(
                                  " You could spread COVID-19 to others even if you do not feel sick. The mask is meant to protect other people in case you are infected. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-lg-4 col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-item text-center" }, [
                          a("div", { staticClass: "service-inner" }, [
                            a("div", { staticClass: "service-thumb" }, [
                              a("img", {
                                attrs: { src: s("5085"), alt: "service" },
                              }),
                            ]),
                            a("div", { staticClass: "service-content" }, [
                              a("h5", [t._v("Clean And Disinfect")]),
                              a("p", [
                                t._v(
                                  " Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          );
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "section",
            {
              staticClass: "service-section home-3 style-2 padding-tb",
              staticStyle: {
                "background-image":
                  "url(../assets/images/banner/bg-image/symptoms-bg.jpg)",
              },
              attrs: { id: "prevention" },
            },
            [
              a("div", { staticClass: "container" }, [
                a(
                  "div",
                  {
                    staticClass: "section-header wow fadeInUp",
                    staticStyle: {
                      visibility: "visible",
                      "animation-delay": "0.3s",
                      "animation-name": "fadeInUp",
                    },
                    attrs: { "data-wow-delay": "0.3s" },
                  },
                  [
                    a("h2", [t._v("Prevention Coronavirus Covid-19")]),
                    a("p", [
                      t._v(
                        " There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. The virus is thought to spread mainly from person-to-person "
                      ),
                    ]),
                  ]
                ),
                a("div", { staticClass: "section-wrapper" }, [
                  a("div", { staticClass: "row no-gutters" }, [
                    a(
                      "div",
                      {
                        staticClass: "col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "service-left" }, [
                          a("h3", [t._v("What you should do")]),
                          a(
                            "div",
                            {
                              staticClass:
                                "row no-gutters justify-content-center",
                            },
                            [
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("9846"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v("Wash your hands sanitizer"),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("0a38"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v("Ware a face mask outside"),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " Everyone should wear a mask in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain. "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("c950"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v(
                                              "Cover your cough tissue paper"
                                            ),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit. Throw used tissues in the trash. "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("c500"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v("Check your body regulerly"),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " Take your temperature if symptoms develop. Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-md-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.4s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.4s" },
                      },
                      [
                        a("div", { staticClass: "service-right" }, [
                          a("h3", [t._v("What you should avoid")]),
                          a(
                            "div",
                            {
                              staticClass:
                                "row no-gutters justify-content-center",
                            },
                            [
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("cae2"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v(
                                              "Avoid contact with sick people"
                                            ),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " Stay at least 6 feet (about 2 arms’ length) from other people. Keeping distance from others is especially important for people who are at higher risk of getting very sick. "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("8be3"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v("Avoid contact animals"),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " If you are sick with COVID-19 (either suspected or confirmed by a test), you should restrict contact with your pets and other animals, just like you would with people. "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("0129"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v("Avoid crowded places"),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " Avoid crowded places, confined and enclosed spaces with poor ventilation, and try to practice physical distancing from people in public "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              a("div", { staticClass: "col-12" }, [
                                a(
                                  "div",
                                  { staticClass: "service-item style-2" },
                                  [
                                    a("div", { staticClass: "service-inner" }, [
                                      a(
                                        "div",
                                        { staticClass: "service-thumb" },
                                        [
                                          a("img", {
                                            attrs: {
                                              src: s("66da"),
                                              alt: "service",
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "service-content" },
                                        [
                                          a("h4", [
                                            t._v("Contaminated objects"),
                                          ]),
                                          a("p", [
                                            t._v(
                                              " Touching contaminated objects and then infecting ourselves with the germs is not typically how the virus spreads. But it can happen. "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          );
        },
      ],
      n = { name: "Prevention", components: {} },
      o = n,
      c = s("2877"),
      r = Object(c["a"])(o, a, i, !1, null, null, null);
    e["default"] = r.exports;
  },
  "32d8": function(t, e, s) {
    t.exports = s.p + "../img/005.826d3f50.png";
  },
  "38c8": function(t, e, s) {},
  "3ea8": function(t, e, s) {
    t.exports = s.p + "../img/06.38006853.jpg";
  },
  4104: function(t, e, s) {
    t.exports = s.p + "../img/01.74470228.png";
  },
  4566: function(t, e, s) {
    t.exports = s.p + "../img/03.808ef3c7.jpg";
  },
  "4ca1": function(t, e, s) {
    t.exports = s.p + "../img/001.aabeb6a3.png";
  },
  "4cd6": function(t, e, s) {
    t.exports = s.p + "../img/05.3bf98072.jpg";
  },
  5085: function(t, e, s) {
    t.exports = s.p + "../img/006.e246839e.png";
  },
  5277: function(t, e, s) {
    t.exports = s.p + "../img/12.fbd31d85.jpg";
  },
  5550: function(t, e, s) {
    t.exports = s.p + "../img/01.ef0ce437.png";
  },
  "56d7": function(t, e, s) {
    "use strict";
    s.r(e);
    s("e260"), s("e6cf"), s("cca6"), s("a79d"), s("0cdd");
    var a = s("2b0e"),
      i = s("5f5b");
    s("ab8b"), s("4989"), s("2dd8");
    a["default"].use(i["a"]);
    var n = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "app" } },
          [
            s("NavigationMenu"),
            s("router-view"),
            s("FooterView"),
            s("ScrollToTop"),
          ],
          1
        );
      },
      o = [],
      c = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      r = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", [
            s(
              "a",
              {
                staticClass: "scrollToTop",
                staticStyle: {
                  bottom: "-30%",
                  opacity: "0",
                  transition: "all 0.5s ease 0s",
                },
                attrs: { href: "#" },
              },
              [
                s("i", { staticClass: "mdi mdi-arrow-up-bold" }),
                s("span", { staticClass: "pluse_1" }),
                s("span", { staticClass: "pluse_2" }),
              ]
            ),
          ]);
        },
      ],
      l = { name: "ScrollToTop", components: {} },
      d = l,
      v = s("2877"),
      u = Object(v["a"])(d, c, r, !1, null, "39ee216d", null),
      m = u.exports,
      h = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a("div", { staticClass: "mobile-menu", attrs: { id: "home" } }, [
            a("nav", { staticClass: "mobile-header" }, [
              a(
                "div",
                { staticClass: "header-logo" },
                [
                  a("router-link", { attrs: { to: "/" } }, [
                    a("img", { attrs: { src: s("0fa9"), alt: "logo" } }),
                  ]),
                ],
                1
              ),
              t._m(0),
            ]),
            a("nav", { staticClass: "mobile-menu" }, [
              a("div", { staticClass: "mobile-menu-area" }, [
                a("div", { staticClass: "mobile-menu-area-inner" }, [
                  a("ul", { staticClass: "lab-ul" }, [
                    a(
                      "li",
                      [
                        a("router-link", { attrs: { to: "/" } }, [
                          t._v("Home"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "li",
                      [
                        a("router-link", { attrs: { to: "/symptoms" } }, [
                          t._v("Symptoms"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "li",
                      [
                        a("router-link", { attrs: { to: "/prevention" } }, [
                          t._v("Prevention"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "li",
                      [
                        a("router-link", { attrs: { to: "/faq" } }, [
                          t._v("FAQ"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "li",
                      [
                        a("router-link", { attrs: { to: "/about" } }, [
                          t._v("About"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "li",
                      [
                        a("router-link", { attrs: { to: "/wash-hands" } }, [
                          t._v("How to Wash Your Hand"),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          a(
            "header",
            {
              staticClass: "header-section transparent-header",
              attrs: { id: "home" },
            },
            [
              a("div", { staticClass: "header-area" }, [
                a("div", { staticClass: "container" }, [
                  a("div", { staticClass: "primary-menu" }, [
                    a(
                      "div",
                      { staticClass: "logo" },
                      [
                        a("router-link", { attrs: { to: "/" } }, [
                          a("img", { attrs: { src: s("594e"), alt: "logo" } }),
                        ]),
                      ],
                      1
                    ),
                    a("div", { staticClass: "main-area" }, [
                      a("div", { staticClass: "main-menu" }, [
                        a("ul", { staticClass: "lab-ul" }, [
                          a(
                            "li",
                            [
                              a("router-link", { attrs: { to: "/" } }, [
                                t._v("Home"),
                              ]),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a("router-link", { attrs: { to: "/symptoms" } }, [
                                t._v("Symptoms"),
                              ]),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/prevention" } },
                                [t._v("Prevention")]
                              ),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a("router-link", { attrs: { to: "/faq" } }, [
                                t._v("FAQ"),
                              ]),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a("router-link", { attrs: { to: "/about" } }, [
                                t._v("About"),
                              ]),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      a(
                        "div",
                        { staticClass: "header-btn" },
                        [
                          a(
                            "router-link",
                            {
                              staticClass: "lab-btn style-2",
                              attrs: { to: "/wash-hands" },
                            },
                            [a("span", [t._v("How to Wash Your Hands")])]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]);
      },
      f = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "header-bar" }, [
            s("span"),
            s("span"),
            s("span"),
          ]);
        },
      ],
      p = { name: "NavigationMenu", components: {} },
      C = p,
      b = Object(v["a"])(C, h, f, !1, null, null, null),
      g = b.exports,
      y = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      w = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", [
            s("footer", [
              s("div", { staticClass: "footer-top padding-tb" }, [
                s("div", { staticClass: "container" }, [
                  s("div", { staticClass: "row" }, [
                    s("div", { staticClass: "col-lg-6 col-md-6 col-12" }, [
                      s("div", { staticClass: "footer-item first-set" }, [
                        s("div", { staticClass: "footer-inner" }, [
                          s("div", { staticClass: "footer-content" }, [
                            s("div", { staticClass: "title" }, [
                              s("h6", [t._v("Covid-19-Flu")]),
                            ]),
                            s("div", { staticClass: "content" }, [
                              s("p", [t._v(" Dillon Parchment ")]),
                              s("h6", [
                                t._v("Software Engineer/Application Developer"),
                              ]),
                              s("p", [t._v("Kingston, Jamaica")]),
                              s("ul", { staticClass: "lab-ul" }, [
                                s("li", [
                                  s("p", [
                                    s("span", [t._v("Email:")]),
                                    s("a", { attrs: { href: "#" } }, [
                                      t._v("parchie876ix@gmail.com"),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    s("div", { staticClass: "col-lg-6 col-md-6 col-12" }, [
                      s("div", { staticClass: "footer-item" }, [
                        s("div", { staticClass: "footer-inner" }, [
                          s("div", { staticClass: "footer-content" }, [
                            s("div", { staticClass: "title" }, [
                              s("h6", [t._v("Social Contact")]),
                            ]),
                            s("div", { staticClass: "content" }, [
                              s("ul", { staticClass: "lab-ul" }, [
                                s("li", [
                                  s(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "https://twitter.com/parchie876ix",
                                      },
                                    },
                                    [
                                      s("i", {
                                        staticClass: "mdi mdi-twitter",
                                      }),
                                      t._v("Twitter"),
                                    ]
                                  ),
                                ]),
                                s("li", [
                                  s(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "https://www.instagram.com/parchie876/",
                                      },
                                    },
                                    [
                                      s("i", {
                                        staticClass: "mdi mdi-instagram",
                                      }),
                                      t._v("Instagram"),
                                    ]
                                  ),
                                ]),
                                s("li", [
                                  s(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "https://jm.linkedin.com/in/dillonparchment",
                                      },
                                    },
                                    [
                                      s("i", {
                                        staticClass: "mdi mdi-linkedin",
                                      }),
                                      t._v("Linkedin"),
                                    ]
                                  ),
                                ]),
                                s("li", [
                                  s(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://github.com/Parchie876",
                                      },
                                    },
                                    [
                                      s("i", { staticClass: "mdi mdi-github" }),
                                      t._v("GitHub"),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              s("div", { staticClass: "footer-bottom" }, [
                s("div", { staticClass: "container" }, [
                  s("div", { staticClass: "section-wrapper" }, [
                    s("p", [
                      t._v(" © 2020 All Rights Reserved. Designed by "),
                      s(
                        "a",
                        { attrs: { href: "https://github.com/Parchie876" } },
                        [t._v("Dillon Parchment")]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      _ = { name: "Footer", components: {} },
      I = _,
      k = Object(v["a"])(I, y, w, !1, null, null, null),
      x = k.exports,
      D = {
        name: "App",
        components: { ScrollToTop: m, NavigationMenu: g, FooterView: x },
      },
      O = D,
      S = Object(v["a"])(O, n, o, !1, null, null, null),
      V = S.exports,
      E = (s("d3b7"), s("8c4f")),
      $ = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "home" }, [
          s("section", { staticClass: "banner-section home-3" }, [
            s("div", { staticClass: "banner-area" }, [
              s("div", { staticClass: "container" }, [
                s(
                  "div",
                  {
                    staticClass:
                      "row align-items-center justify-content-center",
                  },
                  [
                    s("div", { staticClass: "col-md-6 col-12" }, [
                      s("div", { staticClass: "content-part" }, [
                        s(
                          "div",
                          { staticClass: "banner-content" },
                          [
                            s("h2", [t._v("COVID-19 Tracker")]),
                            s("h4", [t._v("Tatal Confirmed Corona Cases")]),
                            s("h2", { staticClass: "count-people" }, [
                              t._v("19232680"),
                            ]),
                            t._m(0),
                            s(
                              "router-link",
                              {
                                staticClass: "lab-btn style-2",
                                attrs: { to: "/outbreak" },
                              },
                              [s("span", [t._v("Outbreak")])]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    t._m(1),
                  ]
                ),
              ]),
            ]),
          ]),
        ]);
      },
      T = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("ul", { staticClass: "lab-ul" }, [
            s("li", [
              t._v(" Active cases "),
              s("span", { staticClass: "count-people" }, [t._v("799571")]),
            ]),
            s("li", [
              t._v(" Recovered cases "),
              s("span", { staticClass: "count-people" }, [t._v("12344200")]),
            ]),
            s("li", [
              t._v("Deaths "),
              s("span", { staticClass: "count-people" }, [t._v("716436")]),
            ]),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "col-md-6 col-12" }, [
            a("div", { staticClass: "banner-round" }, [
              a("img", { attrs: { src: s("addd"), alt: "banner" } }),
            ]),
          ]);
        },
      ],
      U = { name: "Home", components: {} },
      j = U,
      A = (s("cccb"), Object(v["a"])(j, $, T, !1, null, null, null)),
      H = A.exports,
      P = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("section", { staticClass: "page-header" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "page-title" }, [
                s("h2", [t._v("Covid-19 404")]),
                s("ul", { staticClass: "breadcrumb lab-ul" }, [
                  s(
                    "li",
                    [s("router-link", { attrs: { to: "/" } }, [t._v("Home")])],
                    1
                  ),
                  s("li", [t._v("404")]),
                ]),
              ]),
            ]),
          ]),
          s("div", { staticClass: "fore-zero-page" }, [
            s("div", { staticClass: "container" }, [
              t._m(0),
              s(
                "div",
                { staticClass: "text-content text-center" },
                [
                  s("h3", [t._v("Oops! This Page Not Found")]),
                  s("p", [
                    t._v(
                      "We are Really Sorry But the Page you Requested is Missing :("
                    ),
                  ]),
                  s(
                    "router-link",
                    { staticClass: "lab-btn", attrs: { to: "/" } },
                    [s("span", [t._v("Go Back to Home")])]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]);
      },
      W = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "images" }, [
            a("img", { attrs: { src: s("ee93"), alt: "404" } }),
          ]);
        },
      ],
      F = { name: "404", components: {} },
      q = F,
      M = Object(v["a"])(q, P, W, !1, null, "55e1075a", null),
      z = M.exports;
    s("c86f"), s("2f63"), s("250f"), s("0b2e"), s("f820");
    a["default"].use(E["a"]);
    var Y = [
        { path: "/", name: "Home", component: H },
        {
          path: "/about",
          name: "About",
          component: function() {
            return Promise.resolve().then(s.bind(null, "f820"));
          },
        },
        {
          path: "/symptoms",
          name: "Symptoms",
          component: function() {
            return Promise.resolve().then(s.bind(null, "c86f"));
          },
        },
        {
          path: "/prevention",
          name: "Prevention",
          component: function() {
            return Promise.resolve().then(s.bind(null, "2f63"));
          },
        },
        {
          path: "/wash-hands",
          name: "WashHands",
          component: function() {
            return Promise.resolve().then(s.bind(null, "250f"));
          },
        },
        {
          path: "/faq",
          name: "FAQ",
          component: function() {
            return Promise.resolve().then(s.bind(null, "0b2e"));
          },
        },
        { path: "*", component: z },
      ],
      B = new E["a"]({ mode: "history", base: "", routes: Y }),
      R = B,
      N = s("2f62");
    a["default"].use(N["a"]);
    var Q = new N["a"].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      }),
      J =
        (s("81ca"),
        s("77ed"),
        s("19df"),
        s("39fb"),
        s("7db0"),
        s("b680"),
        s("ac1f"),
        s("1276"),
        s("d415")),
      L = s.n(J),
      G = s("1157"),
      K = s.n(G),
      X = s("bc1b"),
      Z = s.n(X);
    (function(t) {
      t(document).ready(function() {
        t("a[data-rel^=lightcase]").lightcase(),
          t("ul li ul")
            .parent("li")
            .addClass("menu-item-has-children"),
          t("ul")
            .parent()
            .on("hover", function() {
              var e = t(this).find("ul"),
                s = t(e).offset();
              if (s.left + e.width() > t(window).width()) {
                var a = -t(e).width();
                e.css({ left: a });
              }
            }),
          t(document).on("click", ".header-bar", function() {
            t(".header-bar").toggleClass("close"),
              t(".mobile-menu").toggleClass("open");
          }),
          t(".menu-item-has-children>a").on("click", function(t) {
            event.preventDefault();
          }),
          t(".mobile-menu-area ul li a, .shop-menu li a").on("click", function(
            e
          ) {
            var s = t(this).parent("li");
            s.hasClass("open")
              ? (s.removeClass("open"),
                s.find("li").removeClass("open"),
                s.find("ul").slideUp(1e3, "swing"))
              : (s.addClass("open"),
                s.children("ul").slideDown(1e3, "swing"),
                s
                  .siblings("li")
                  .children("ul")
                  .slideUp(1e3, "swing"),
                s.siblings("li").removeClass("open"),
                s
                  .siblings("li")
                  .find("li")
                  .removeClass("open"),
                s
                  .siblings("li")
                  .find("ul")
                  .slideUp(1e3, "swing"));
          });
        var e = t(".header-area");
        t(window).on("scroll", function() {
          t(this).scrollTop() > 100
            ? e.addClass("animated fadeInDown menu-fixed")
            : e.removeClass("animated fadeInDown menu-fixed");
        }),
          t(function() {
            t(window).scroll(function() {
              t(this).scrollTop() > 300
                ? t(".scrollToTop").css({
                    bottom: "2%",
                    opacity: "1",
                    transition: "all .5s ease",
                  })
                : t(".scrollToTop").css({
                    bottom: "-30%",
                    opacity: "0",
                    transition: "all .5s ease",
                  });
            }),
              t(".scrollToTop").on("click", function() {
                return t("html, body").animate({ scrollTop: 0 }, 500), !1;
              });
          });
        new L.a(".sponsor-slider", {
          slidesPerView: 6,
          spaceBetween: 10,
          autoplay: { delay: 5e3, disableOnInteraction: !1 },
          breakpoints: {
            992: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            420: { slidesPerView: 1 },
          },
          loop: !0,
        }),
          new L.a(".post-thumb-slider", {
            slidesPerView: 1,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            navigation: {
              nextEl: ".post-thumb-slider-next",
              prevEl: ".post-thumb-slider-prev",
            },
            loop: !0,
          });
        t("#countdown").countdown({
          date: "10/22/2020 17:00:00",
          offset: 2,
          day: "Day",
          days: "Days",
        }),
          t(".accordion-item").slideDown(),
          t(".accordion-list").on("click", function(e) {
            "block" !=
            t(this)
              .next(".accordion-answer")
              .css("display")
              ? (t(".accordion-item .active")
                  .slideUp(500)
                  .removeClass("active"),
                t(".accordion-list").removeClass("in"),
                t(this)
                  .next(".accordion-answer")
                  .addClass("active")
                  .slideDown(500),
                t(this).addClass("in"))
              : (t(".accordion-item .active")
                  .slideUp(500)
                  .removeClass("active"),
                t(this).removeClass("in"));
          }),
          t(".count-number, .count-people, .cv-count, .bfr-total").each(
            function() {
              var e = t(this)
                .text()
                .split(".")[1]
                ? t(this)
                    .text()
                    .split(".")[1].length
                : 0;
              t(this)
                .prop("Counter", 0)
                .animate(
                  { Counter: t(this).text() },
                  {
                    duration: 5e3,
                    step: function(s) {
                      t(this).text(parseFloat(s).toFixed(e));
                    },
                  }
                );
            }
          ),
          t(function() {
            t(".product-view-mode").on("click", "a", function(e) {
              e.preventDefault();
              var s = t(".shop-product-wrap"),
                a = t(this).data("target");
              t(".product-view-mode a").removeClass("active"),
                t(this).addClass("active"),
                s.removeClass("grid list").addClass(a);
            });
          }),
          t(function() {
            t(".view-modal").on("click", function() {
              t(".modal").addClass("show");
            }),
              t(".close").on("click", function() {
                t(".modal").removeClass("show");
              });
          }),
          t(function() {
            var t = new L.a(".pro-single-thumbs", {
              spaceBetween: 10,
              slidesPerView: 3,
              loop: !0,
              freeMode: !0,
              loopedSlides: 5,
              watchSlidesVisibility: !0,
              watchSlidesProgress: !0,
              navigation: {
                nextEl: ".pro-single-next",
                prevEl: ".pro-single-prev",
              },
            });
            new L.a(".pro-single-top", {
              spaceBetween: 10,
              loop: !0,
              loopedSlides: 5,
              thumbs: { swiper: t },
            });
          }),
          t("ul.review-nav").on("click", "li", function(e) {
            e.preventDefault();
            var s = t(".review-content"),
              a = t(this).data("target");
            t("ul.review-nav li").removeClass("active"),
              t(this).addClass("active"),
              s.removeClass("review-content-show description-show").addClass(a);
          }),
          t(".main-menu ul li a").on("click", function(e) {
            if ("" !== this.hash) {
              e.preventDefault();
              var s = this.hash;
              t("html, body").animate(
                { scrollTop: t(s).offset().top },
                800,
                function() {
                  window.location.hash = s;
                }
              );
            }
          }),
          t(".pay-price").on("click", function() {
            t(this)
              .addClass("active")
              .siblings()
              .removeClass("active");
          }),
          new Z.a().init();
      });
    })(K.a);
    s("e25d"), s("38c8");
    !(function(t) {
      t.fn.countdown = function(e, s) {
        function a() {
          var t = new Date(i.date),
            e = o(),
            a = t - e;
          if (0 > a)
            return clearInterval(c), void (s && "function" == typeof s && s());
          var r = 1e3,
            l = 60 * r,
            d = 60 * l,
            v = 24 * d,
            u = Math.floor(a / v),
            m = Math.floor((a % v) / d),
            h = Math.floor((a % d) / l),
            f = Math.floor((a % l) / r),
            p = 1 === u ? i.day : i.days,
            C = 1 === m ? i.hour : i.hours,
            b = 1 === h ? i.minute : i.minutes,
            g = 1 === f ? i.second : i.seconds;
          (u = String(u).length >= 2 ? u : "0" + u),
            (m = String(m).length >= 2 ? m : "0" + m),
            (h = String(h).length >= 2 ? h : "0" + h),
            (f = String(f).length >= 2 ? f : "0" + f),
            n.find(".days").text(u),
            n.find(".hours").text(m),
            n.find(".minutes").text(h),
            n.find(".seconds").text(f),
            n.find(".days_text").text(p),
            n.find(".hours_text").text(C),
            n.find(".minutes_text").text(b),
            n.find(".seconds_text").text(g);
        }
        var i = t.extend(
          {
            date: null,
            offset: null,
            day: "Day",
            days: "Days",
            hour: "Hour",
            hours: "Hours",
            minute: "Minute",
            minutes: "Minutes",
            second: "Second",
            seconds: "Seconds",
          },
          e
        );
        i.date || t.error("Date is not defined."),
          Date.parse(i.date) ||
            t.error(
              "Incorrect date format, it should look like this, 12/24/2012 12:00:00."
            );
        var n = this,
          o = function() {
            var t = new Date(),
              e = t.getTime() + 6e4 * t.getTimezoneOffset(),
              s = new Date(e + 36e5 * i.offset);
            return s;
          },
          c = setInterval(a, 1e3);
      };
    })(K.a);
    var tt = s("f309");
    a["default"].use(tt["a"]);
    var et = new tt["a"]({ icons: { iconfont: "mdi" } });
    (a["default"].config.productionTip = !1),
      new a["default"]({
        router: R,
        store: Q,
        vuetify: et,
        render: function(t) {
          return t(V);
        },
      }).$mount("#app");
  },
  "582b": function(t, e, s) {
    t.exports = s.p + "../img/03.869efbc0.jpg";
  },
  "594e": function(t, e, s) {
    t.exports = s.p + "../img/03.6f1562d5.png";
  },
  5970: function(t, e, s) {
    t.exports = s.p + "../img/01.6d6a3d67.jpg";
  },
  "5c5f": function(t, e, s) {
    t.exports = s.p + "../img/002.315776c4.png";
  },
  "5ced": function(t, e, s) {},
  6663: function(t, e, s) {
    t.exports = s.p + "../img/02.b87babd8.jpg";
  },
  "66da": function(t, e, s) {
    t.exports = s.p + "../img/P08.56628938.jpg";
  },
  "6ae6": function(t, e, s) {
    t.exports = s.p + "../img/04.a36e41b3.jpg";
  },
  "70d6": function(t, e, s) {
    t.exports = s.p + "../img/02.a5f18e1e.jpg";
  },
  "712c": function(t, e, s) {
    t.exports = s.p + "../img/06.64c9b562.jpg";
  },
  7182: function(t, e, s) {
    t.exports = s.p + "../img/09.0fd9d205.jpg";
  },
  "72b4": function(t, e, s) {
    t.exports = s.p + "../img/01.f134b1ef.jpg";
  },
  "86e1": function(t, e, s) {
    t.exports = s.p + "../img/02.419e4d51.png";
  },
  "8be3": function(t, e, s) {
    t.exports = s.p + "../img/P06.3cfe0b48.jpg";
  },
  "94d9": function(t, e, s) {
    t.exports = s.p + "../img/04.d847cd7c.jpg";
  },
  "94eb": function(t, e, s) {
    t.exports = s.p + "../img/11.becf9624.jpg";
  },
  9846: function(t, e, s) {
    t.exports = s.p + "../img/P01.794c070d.jpg";
  },
  "9c8c": function(t, e, s) {
    t.exports = s.p + "../img/004.7dafd204.png";
  },
  "9ccd": function(t, e, s) {
    t.exports = s.p + "../img/06.ad2bb200.jpg";
  },
  addd: function(t, e, s) {
    t.exports = s.p + "../img/01.2f753cb9.png";
  },
  b526: function(t, e, s) {
    t.exports = s.p + "../img/03.ffa408d2.jpg";
  },
  b6b1: function(t, e, s) {
    t.exports = s.p + "../img/04.8ff63c07.jpg";
  },
  c500: function(t, e, s) {
    t.exports = s.p + "../img/P04.bb642ca5.jpg";
  },
  c58e: function(t, e, s) {
    t.exports = s.p + "../img/02.aa72a755.jpg";
  },
  c7c8: function(t, e, s) {
    t.exports = s.p + "../img/03.3a8d7440.png";
  },
  c86f: function(t, e, s) {
    "use strict";
    s.r(e);
    var a = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("section", { staticClass: "page-header" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "page-title" }, [
                s("h2", [t._v("Covid-19 Symtomes")]),
                s("ul", { staticClass: "breadcrumb lab-ul" }, [
                  s(
                    "li",
                    [s("router-link", { attrs: { to: "/" } }, [t._v("Home")])],
                    1
                  ),
                  s("li", [t._v("Symtomes")]),
                ]),
              ]),
            ]),
          ]),
          t._m(0),
        ]);
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "section",
            {
              staticClass: "service-section home-3 padding-tb",
              attrs: { id: "symptoms" },
            },
            [
              a("div", { staticClass: "container" }, [
                a(
                  "div",
                  {
                    staticClass: "section-header wow fadeInUp",
                    staticStyle: {
                      visibility: "visible",
                      "animation-delay": "0.3s",
                      "animation-name": "fadeInUp",
                    },
                    attrs: { "data-wow-delay": "0.3s" },
                  },
                  [
                    a("h2", [t._v("Corona Virus Symptoms")]),
                    a("p", [
                      t._v(
                        " Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear two to 14 days after exposure. This time after exposure and before having symptoms is called the incubation period. Common signs and symptoms can include: "
                      ),
                    ]),
                  ]
                ),
                a("div", { staticClass: "section-wrapper" }, [
                  a(
                    "div",
                    { staticClass: "row no-gutters justify-content-center" },
                    [
                      a(
                        "div",
                        {
                          staticClass: "col-md-6 col-12 wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-delay": "0.3s",
                            "animation-name": "fadeInUp",
                          },
                          attrs: { "data-wow-delay": "0.3s" },
                        },
                        [
                          a("div", { staticClass: "service-item style-2" }, [
                            a("div", { staticClass: "service-inner" }, [
                              a("div", { staticClass: "service-thumb" }, [
                                a("img", {
                                  attrs: { src: s("72b4"), alt: "service" },
                                }),
                              ]),
                              a("div", { staticClass: "service-content" }, [
                                a("h4", [t._v("Coughing And Sneezing")]),
                                a("p", [
                                  t._v(
                                    " Covering coughs and sneezes and keeping hands clean can help prevent the spread of serious respiratory illnesses like influenza, respiratory syncytial virus (RSV), whooping cough, and COVID-19. "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "div",
                        {
                          staticClass: "col-md-6 col-12 wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-delay": "0.4s",
                            "animation-name": "fadeInUp",
                          },
                          attrs: { "data-wow-delay": "0.4s" },
                        },
                        [
                          a("div", { staticClass: "service-item style-2" }, [
                            a("div", { staticClass: "service-inner" }, [
                              a("div", { staticClass: "service-thumb" }, [
                                a("img", {
                                  attrs: { src: s("70d6"), alt: "service" },
                                }),
                              ]),
                              a("div", { staticClass: "service-content" }, [
                                a("h4", [t._v("Hot Fever")]),
                                a("p", [
                                  t._v(
                                    " A fever occurs when the body’s temperature rises above 100.4°F (38°C) for a sustained period "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "div",
                        {
                          staticClass: "col-md-6 col-12 wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-delay": "0.5s",
                            "animation-name": "fadeInUp",
                          },
                          attrs: { "data-wow-delay": "0.5s" },
                        },
                        [
                          a("div", { staticClass: "service-item style-2" }, [
                            a("div", { staticClass: "service-inner" }, [
                              a("div", { staticClass: "service-thumb" }, [
                                a("img", {
                                  attrs: { src: s("582b"), alt: "service" },
                                }),
                              ]),
                              a("div", { staticClass: "service-content" }, [
                                a("h4", [t._v("Strong Headacke")]),
                                a("p", [
                                  t._v(
                                    " A headache can affect any part of the head, and pain may be present in one or several locations. "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "div",
                        {
                          staticClass: "col-md-6 col-12 wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-delay": "0.6s",
                            "animation-name": "fadeInUp",
                          },
                          attrs: { "data-wow-delay": "0.6s" },
                        },
                        [
                          a("div", { staticClass: "service-item style-2" }, [
                            a("div", { staticClass: "service-inner" }, [
                              a("div", { staticClass: "service-thumb" }, [
                                a("img", {
                                  attrs: { src: s("94d9"), alt: "service" },
                                }),
                              ]),
                              a("div", { staticClass: "service-content" }, [
                                a("h4", [t._v("Shortness Of Breath")]),
                                a("p", [
                                  t._v(
                                    " Another common symptoms of COVID-19 include Shortness of breath, or dyspnea, is an uncomfortable condition that makes it difficult to fully get air into your lungs. "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "div",
                        {
                          staticClass: "col-md-6 col-12 wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-delay": "0.7s",
                            "animation-name": "fadeInUp",
                          },
                          attrs: { "data-wow-delay": "0.7s" },
                        },
                        [
                          a("div", { staticClass: "service-item style-2" }, [
                            a("div", { staticClass: "service-inner" }, [
                              a("div", { staticClass: "service-thumb" }, [
                                a("img", {
                                  attrs: { src: s("1e8b"), alt: "service" },
                                }),
                              ]),
                              a("div", { staticClass: "service-content" }, [
                                a("h4", [t._v("Confusion")]),
                                a("p", [
                                  t._v(
                                    " Confusion is a symptom that makes you feel as if you can't think clearly. You might feel disoriented and have a hard time focusing or making decisions. Confusion is also referred to as disorientation. In its extreme state, it's referred to as delirium. "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "div",
                        {
                          staticClass: "col-md-6 col-12 wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-delay": "0.8s",
                            "animation-name": "fadeInUp",
                          },
                          attrs: { "data-wow-delay": "0.8s" },
                        },
                        [
                          a("div", { staticClass: "service-item style-2" }, [
                            a("div", { staticClass: "service-inner" }, [
                              a("div", { staticClass: "service-thumb" }, [
                                a("img", {
                                  attrs: { src: s("9ccd"), alt: "service" },
                                }),
                              ]),
                              a("div", { staticClass: "service-content" }, [
                                a("h4", [t._v("Sore Throat")]),
                                a("p", [
                                  t._v(
                                    " A sore throat is a painful, dry, or scratchy feeling in the throat. "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          );
        },
      ],
      n = { name: "Symptoms", components: {} },
      o = n,
      c = s("2877"),
      r = Object(c["a"])(o, a, i, !1, null, null, null);
    e["default"] = r.exports;
  },
  c950: function(t, e, s) {
    t.exports = s.p + "../img/P03.d4f8990b.jpg";
  },
  cae2: function(t, e, s) {
    t.exports = s.p + "../img/P05.21abec80.jpg";
  },
  cccb: function(t, e, s) {
    "use strict";
    var a = s("5ced"),
      i = s.n(a);
    i.a;
  },
  cf6e: function(t, e, s) {
    t.exports = s.p + "../img/02.292817c0.png";
  },
  d2ba: function(t, e, s) {
    t.exports = s.p + "../img/01.96deae43.jpg";
  },
  d9b4: function(t, e, s) {
    t.exports = s.p + "../img/01.ac1364e7.png";
  },
  e4fa: function(t, e, s) {
    t.exports = s.p + "../img/01.dd521930.jpg";
  },
  ed5d: function(t, e, s) {
    t.exports = s.p + "../img/003.d358f039.png";
  },
  ee93: function(t, e, s) {
    t.exports = s.p + "../img/404.b39da62e.png";
  },
  f820: function(t, e, s) {
    "use strict";
    s.r(e);
    var a = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("section", { staticClass: "page-header" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "page-title" }, [
                s("h2", [t._v("Covid-19 About")]),
                s("ul", { staticClass: "breadcrumb lab-ul" }, [
                  s(
                    "li",
                    [s("router-link", { attrs: { to: "/" } }, [t._v("Home")])],
                    1
                  ),
                  s("li", [t._v("About")]),
                ]),
              ]),
            ]),
          ]),
          t._m(0),
          s(
            "section",
            { staticClass: "about-section style-3 bg-about padding-tb" },
            [
              s("div", { staticClass: "container" }, [
                s(
                  "div",
                  {
                    staticClass:
                      "row justify-content-center align-items-center flex-row-reverse",
                  },
                  [
                    t._m(1),
                    t._m(2),
                    s(
                      "router-link",
                      {
                        staticClass: "lab-btn style-2 ",
                        attrs: { to: "/prevention" },
                      },
                      [s("span", [t._v("Learn More")])]
                    ),
                  ],
                  1
                ),
              ]),
            ]
          ),
          t._m(3),
        ]);
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "section",
            { staticClass: "corona-count-section bg-corona padding-tb" },
            [
              a("div", { staticClass: "container" }, [
                a("div", { staticClass: "corona-wrap" }, [
                  a("div", { staticClass: "corona-count-top" }, [
                    a(
                      "div",
                      {
                        staticClass:
                          "row justify-content-center align-items-center",
                      },
                      [
                        a("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
                          a("h5", [t._v("Total Corona Statistics :")]),
                        ]),
                        a("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
                          a("div", { staticClass: "corona-item" }, [
                            a("div", { staticClass: "corona-inner" }, [
                              a("div", { staticClass: "corona-thumb" }, [
                                a("img", {
                                  attrs: { src: s("5550"), alt: "corona" },
                                }),
                              ]),
                              a("div", { staticClass: "corona-content" }, [
                                a("h3", { staticClass: "count-number" }, [
                                  t._v("19232680"),
                                ]),
                                a("p", [t._v("Coronavirus Cases")]),
                              ]),
                            ]),
                          ]),
                        ]),
                        a("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
                          a("div", { staticClass: "corona-item" }, [
                            a("div", { staticClass: "corona-inner" }, [
                              a("div", { staticClass: "corona-thumb" }, [
                                a("img", {
                                  attrs: { src: s("cf6e"), alt: "corona" },
                                }),
                              ]),
                              a("div", { staticClass: "corona-content" }, [
                                a("h3", { staticClass: "count-number" }, [
                                  t._v("12344200"),
                                ]),
                                a("p", [t._v("Recovered Cases")]),
                              ]),
                            ]),
                          ]),
                        ]),
                        a("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
                          a("div", { staticClass: "corona-item" }, [
                            a("div", { staticClass: "corona-inner" }, [
                              a("div", { staticClass: "corona-thumb" }, [
                                a("img", {
                                  attrs: { src: s("c7c8"), alt: "corona" },
                                }),
                              ]),
                              a("div", { staticClass: "corona-content" }, [
                                a("h3", { staticClass: "count-number" }, [
                                  t._v("716436"),
                                ]),
                                a("p", [t._v("Deaths")]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  a("div", { staticClass: "corona-count-bottom" }, [
                    a(
                      "div",
                      {
                        staticClass:
                          "row justify-content-center align-items-center flex-row-reverse",
                      },
                      [
                        a("div", { staticClass: "col-lg-6 col-12" }, [
                          a("div", { staticClass: "ccb-thumb" }, [
                            a(
                              "a",
                              {
                                staticClass: "ccb-video",
                                attrs: {
                                  href:
                                    "https://www.youtube.com/embed/i0ZabxXmH4Y",
                                  "data-rel": "lightcase",
                                },
                              },
                              [
                                a("i", { staticClass: "mdi  mdi-play" }),
                                a("span", { staticClass: "pluse_1" }),
                                a("span", { staticClass: "pluse_2" }),
                              ]
                            ),
                            a("img", {
                              attrs: { src: s("d2ba"), alt: "corona" },
                            }),
                          ]),
                        ]),
                        a("div", { staticClass: "col-lg-6 col-12" }, [
                          a("div", { staticClass: "ccb-content" }, [
                            a("h2", [t._v("What Is Coronavirus?")]),
                            a("h6", [
                              t._v(
                                " Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. "
                              ),
                            ]),
                            a("p", [
                              t._v(
                                " Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available. "
                              ),
                            ]),
                            a("ul", { staticClass: "lab-ul" }, [
                              a("li", [
                                a("i", { staticClass: "mdi mdi-check" }),
                                t._v(
                                  "COVID-19 is the disease caused by the new coronavirus that emerged in China in December 2019. "
                                ),
                              ]),
                              a("li", [
                                a("i", { staticClass: "mdi mdi-check" }),
                                t._v(
                                  "COVID-19 symptoms include cough, fever and shortness of breath. COVID-19 can be severe, and some cases have caused death. "
                                ),
                              ]),
                              a("li", [
                                a("i", { staticClass: "mdi mdi-check" }),
                                t._v(
                                  "The new coronavirus can be spread from person to person. It is diagnosed with a laboratory test. "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          );
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "col-lg-6 col-12 wow fadeInUp",
              staticStyle: {
                visibility: "visible",
                "animation-delay": "0.3s",
                "animation-name": "fadeInUp",
              },
              attrs: { "data-wow-delay": "0.3s" },
            },
            [
              a("div", { staticClass: "about-thumb" }, [
                a("img", { attrs: { src: s("86e1"), alt: "about" } }),
              ]),
            ]
          );
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "col-lg-6 col-12 wow fadeInUp",
              staticStyle: {
                visibility: "visible",
                "animation-delay": "0.4s",
                "animation-name": "fadeInUp",
              },
              attrs: { "data-wow-delay": "0.4s" },
            },
            [
              a("div", { staticClass: "about-content" }, [
                a("div", { staticClass: "ab-title" }, [
                  a("span", [t._v("About Covid-19")]),
                  a("h3", [t._v("Prevention of the Coronavirus")]),
                  a("p", [
                    t._v(
                      " There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. The virus is thought to spread mainly from person-to-person "
                    ),
                  ]),
                  a("ul", { staticClass: "lab-ul" }, [
                    a("li", [
                      a("div", { staticClass: "ab-thumb" }, [
                        a("img", {
                          attrs: { src: s("6ae6"), alt: "ab-thumb" },
                        }),
                      ]),
                      a("div", { staticClass: "ab-content" }, [
                        a("h6", [t._v("Wash Your Hands For 20sec")]),
                        a("p", [
                          t._v(
                            " Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing "
                          ),
                        ]),
                      ]),
                    ]),
                    a("li", [
                      a("div", { staticClass: "ab-thumb" }, [
                        a("img", {
                          attrs: { src: s("4cd6"), alt: "ab-thumb" },
                        }),
                      ]),
                      a("div", { staticClass: "ab-content" }, [
                        a("h6", [t._v("Cover Nose and Mouth When Sneezing")]),
                        a("p", [
                          t._v(
                            " Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit. "
                          ),
                        ]),
                      ]),
                    ]),
                    a("li", [
                      a("div", { staticClass: "ab-thumb" }, [
                        a("img", {
                          attrs: { src: s("3ea8"), alt: "ab-thumb" },
                        }),
                      ]),
                      a("div", { staticClass: "ab-content" }, [
                        a("h6", [t._v("Wear A Mask If Available")]),
                        a("p", [
                          t._v(
                            " You could spread COVID-19 to others even if you do not feel sick. The mask is meant to protect other people in case you are infected. "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          );
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "section",
            {
              staticClass: "about-section style-3 bg-about padding-tb",
              attrs: { id: "about" },
            },
            [
              a("div", { staticClass: "container" }, [
                a(
                  "div",
                  {
                    staticClass:
                      "row justify-content-center align-items-center",
                  },
                  [
                    a(
                      "div",
                      {
                        staticClass: "col-lg-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.3s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.3s" },
                      },
                      [
                        a("div", { staticClass: "about-thumb" }, [
                          a("img", { attrs: { src: s("4104"), alt: "about" } }),
                        ]),
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "col-lg-6 col-12 wow fadeInUp",
                        staticStyle: {
                          visibility: "visible",
                          "animation-delay": "0.4s",
                          "animation-name": "fadeInUp",
                        },
                        attrs: { "data-wow-delay": "0.4s" },
                      },
                      [
                        a("div", { staticClass: "about-content" }, [
                          a("div", { staticClass: "ab-title" }, [
                            a("span", [t._v("How the Covid-19 Virus Spread")]),
                            a("h3", [
                              t._v("How Contagious Is The Coronavirus"),
                            ]),
                            a("p", [
                              t._v(
                                " Data from published epidemiology and virologic studies provide evidence that COVID-19 is primarily transmitted from symptomatic people to others who are in close contact through respiratory droplets, by direct contact with infected persons, or by contact with contaminated objects and surfaces "
                              ),
                            ]),
                            a("ul", { staticClass: "lab-ul" }, [
                              a("li", [
                                a("div", { staticClass: "ab-thumb" }, [
                                  a("img", {
                                    attrs: { src: s("e4fa"), alt: "ab-thumb" },
                                  }),
                                ]),
                                a("div", { staticClass: "ab-content" }, [
                                  a("h6", [t._v("Human Contact")]),
                                  a("p", [
                                    t._v(
                                      " Coronaviruses can be transmitted from person to person, usually after close contact with an infected patient, for example, in a household workplace, or health care centre. "
                                    ),
                                  ]),
                                ]),
                              ]),
                              a("li", [
                                a("div", { staticClass: "ab-thumb" }, [
                                  a("img", {
                                    attrs: { src: s("c58e"), alt: "ab-thumb" },
                                  }),
                                ]),
                                a("div", { staticClass: "ab-content" }, [
                                  a("h6", [t._v("Air Transmission")]),
                                  a("p", [
                                    t._v(
                                      " Some medical procedures can produce very small droplets (called aerosolized droplet nuclei or aerosols) that are able to stay suspended in the air for longer periods of time. When such medical procedures are conducted on people infected with COVID-19 in health facilities, these aerosols can contain the COVID-19 virus. "
                                    ),
                                  ]),
                                ]),
                              ]),
                              a("li", [
                                a("div", { staticClass: "ab-thumb" }, [
                                  a("img", {
                                    attrs: { src: s("4566"), alt: "ab-thumb" },
                                  }),
                                ]),
                                a("div", { staticClass: "ab-content" }, [
                                  a("h6", [t._v("Contaminated Objects")]),
                                  a("p", [
                                    t._v(
                                      " When someone who has COVID-19 coughs or exhales they release droplets of infected fluid. Most of these droplets fall on nearby surfaces and objects - such as desks, tables or telephones. People could catch COVID-19 by touching contaminated surfaces or objects – and then touching their eyes, nose or mouth. "
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          );
        },
      ],
      n = { name: "Home", components: {} },
      o = n,
      c = s("2877"),
      r = Object(c["a"])(o, a, i, !1, null, null, null);
    e["default"] = r.exports;
  },
});
//# sourceMappingURL=app.4d4bd8ff.js.map
