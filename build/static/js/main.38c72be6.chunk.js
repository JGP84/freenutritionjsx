(this.webpackJsonpfrontendp = this.webpackJsonpfrontendp || []).push([
  [0],
  {
    196: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(4),
        a = n.n(r),
        i = n(30),
        c = n.n(i),
        o = (n(88), n(13)),
        s = n(7),
        u = n(20),
        l = n(12),
        d = n(24),
        f = n.n(d),
        h = (n(89), n(3)),
        p = Object(r.createContext)(null),
        b = function () {
          var e = Object(r.useContext)(p),
            t = e.inputProt,
            n = e.setInputProt,
            a = e.inputLip,
            i = e.setInputLip,
            c = e.inputCarb,
            o = e.setInputCarb,
            s = e.arrFoods;
          function u() {
            for (var e = 0; e < l().length; e++)
              s[e].foodWeight = s[e].weight_int * d()[e];
          }
          function l() {
            var e = [];
            if (s.length < 1) return [];
            for (var t = 0; t < s.length; t++) {
              var n = s[t].n_int_card;
              e.push(n);
            }
            return e;
          }
          function d() {
            for (
              var e = JSON.parse(JSON.stringify(l())), t = 0;
              t < l().length;
              t++
            )
              e[f()[t]] = b() / f().length;
            for (var n = 0; n < l().length; n++) e[j()[n]] = g() / j().length;
            for (var r = 0; r < l().length; r++)
              e[m()[r]] =
                (a -
                  (function () {
                    var e = [],
                      t = JSON.parse(JSON.stringify(l())),
                      n = [],
                      r = "starchyFoods",
                      a = s
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(r);
                    for (; -1 !== a; )
                      n.push(a),
                        (a = s
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(r, a + 1));
                    for (var i = 0; i < n.length; i++) t[n[i]] = b() / n.length;
                    var c = [],
                      o = "proteinFoods",
                      u = s
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(o);
                    for (; -1 !== u; )
                      c.push(u),
                        (u = s
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(o, u + 1));
                    for (var d = 0; d < n.length; d++) t[c[d]] = g() / c.length;
                    var f = 0;
                    f = l().length < 1 ? 1 : l().length;
                    for (var h = 0; h < f; h++) {
                      var p = t[h] * x()[h];
                      e.push(p);
                    }
                    return e.reduce(function (e, t) {
                      return e + t;
                    });
                  })()) /
                5 /
                m().length;
            return e;
          }
          function f() {
            for (
              var e = [],
                t = "starchyFoods",
                n = s
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t);
              -1 !== n;

            )
              e.push(n),
                (n = s
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t, n + 1));
            return e;
          }
          function b() {
            return (
              (c -
                (function () {
                  var e = [],
                    t = 0;
                  t = l().length < 1 ? 1 : l().length;
                  for (var n = 0; n < t; n++) {
                    var r = l()[n] * v()[n];
                    e.push(r);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              14
            );
          }
          function j() {
            for (
              var e = [],
                t = "proteinFoods",
                n = s
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t);
              -1 !== n;

            )
              e.push(n),
                (n = s
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t, n + 1));
            return e;
          }
          function m() {
            for (
              var e = [],
                t = "fats",
                n = s
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t);
              -1 !== n;

            )
              e.push(n),
                (n = s
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t, n + 1));
            return e;
          }
          function g() {
            return (
              (t -
                (function () {
                  for (
                    var e = [],
                      t = JSON.parse(JSON.stringify(l())),
                      n = [],
                      r = "starchyFoods",
                      a = s
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(r);
                    -1 !== a;

                  )
                    n.push(a),
                      (a = s
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(r, a + 1));
                  for (var i = 0; i < n.length; i++) t[n[i]] = b() / n.length;
                  var c = 0;
                  c = l().length < 1 ? 1 : l().length;
                  for (var o = 0; o < c; o++) {
                    var u = t[o] * O()[o];
                    e.push(u);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              7
            );
          }
          function O() {
            var e = [];
            if (s.length < 1) return [];
            for (var t = 0; t < s.length; t++) {
              var n = s[t].prot;
              e.push(n);
            }
            return e;
          }
          function x() {
            var e = [];
            if (s.length < 1) return [];
            for (var t = 0; t < s.length; t++) {
              var n = s[t].lip;
              e.push(n);
            }
            return e;
          }
          function v() {
            var e = [];
            if (s.length < 1) return [];
            for (var t = 0; t < s.length; t++) {
              var n = s[t].hc;
              e.push(n);
            }
            return e;
          }
          return Object(h.jsxs)("form", {
            className: "col p-3",
            children: [
              Object(h.jsx)("hr", {}),
              Object(h.jsxs)("div", {
                className: "form-row d-flex flex-row ",
                children: [
                  Object(h.jsxs)("div", {
                    className: "col-md-4 mb-3",
                    children: [
                      Object(h.jsxs)("label", {
                        children: [
                          " ",
                          Object(h.jsx)("h4", { children: "Proteins (g)" }),
                        ],
                      }),
                      Object(h.jsx)("input", {
                        name: "inputProt",
                        id: "inputMacros",
                        onChange: function (e) {
                          var t = e.target.value;
                          n(t), u();
                        },
                        type: "number",
                        className: "form-control w-75",
                        placeholder: "Protein in g",
                      }),
                    ],
                  }),
                  Object(h.jsxs)("div", {
                    className: "col-md-4 mb-3",
                    children: [
                      Object(h.jsxs)("label", {
                        children: [
                          " ",
                          Object(h.jsx)("h4", { children: "Fats (g)" }),
                        ],
                      }),
                      Object(h.jsx)("input", {
                        name: "inputLip",
                        id: "inputMacros",
                        onChange: function (e) {
                          var t = e.target.value;
                          i(t), u();
                        },
                        type: "number",
                        className: "form-control w-75",
                        placeholder: "Lipids in g",
                      }),
                    ],
                  }),
                  Object(h.jsxs)("div", {
                    className: "col-md-4 mb-3",
                    children: [
                      Object(h.jsxs)("label", {
                        children: [
                          " ",
                          Object(h.jsx)("h4", {
                            children: "Carbohydrates (g)",
                          }),
                        ],
                      }),
                      Object(h.jsx)("input", {
                        name: "inputCarb",
                        id: "inputMacros",
                        onChange: function (e) {
                          var t = e.target.value;
                          o(t), u();
                        },
                        type: "number",
                        className: "form-control w-75",
                        placeholder: "Carbohydrates in g",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        j = n(16),
        m = n(8),
        g = n(43),
        O =
          (n(98),
          function () {
            var e = Object(r.useContext)(p),
              t = e.arrFoods,
              n = (e.setArrFoods, e.inputProt),
              a = e.inputLip,
              i = e.inputCarb,
              c = e.columns,
              u = e.setColumns,
              l = e.foodDatabase,
              d = e.showSnack,
              b = Object(r.useState)(""),
              O = Object(s.a)(b, 2),
              x = O[0],
              v = O[1];
            function y() {
              var e = l.findIndex(function (e) {
                return e.name === x;
              });
              t.unshift({
                food_id: l[e].food_id,
                name: x,
                type: l[e].type,
                weight_int: l[e].weight_int,
                prot: l[e].prot,
                lip: l[e].lip,
                hc: l[e].hc,
                img_link: l[e].img_link,
                n_int_card: l[e].n_int_card,
                foodWeight: 0,
                idUnique: f()(),
              }),
                (function () {
                  for (var e = 0; e < _().length; e++)
                    t[e].foodWeight = t[e].weight_int * N()[e];
                })();
              var n = {
                  idUnique: t[0].idUnique,
                  name: t[0].name,
                  foodWeight: t[0].foodWeight,
                  type: t[0].type,
                  img_link: t[0].img_link,
                },
                r = Object.entries(c).find(function (e) {
                  return "Breakfast" === e[1].name;
                })[0],
                a = c[r];
              u(
                Object(m.a)(
                  Object(m.a)({}, c),
                  {},
                  Object(o.a)(
                    {},
                    r,
                    Object(m.a)(
                      Object(m.a)({}, a),
                      {},
                      { items: [].concat(Object(j.a)(a.items), [n]) }
                    )
                  )
                )
              ),
                console.log("arrFoods add", t),
                console.log("columns", c),
                v("");
            }
            function _() {
              var e = [];
              if (t.length < 1) return [];
              for (var n = 0; n < t.length; n++) {
                var r = t[n].n_int_card;
                e.push(r);
              }
              return e;
            }
            function N() {
              for (
                var e = JSON.parse(JSON.stringify(_())), n = 0;
                n < _().length;
                n++
              )
                e[k()[n]] = F() / k().length;
              for (var r = 0; r < _().length; r++) e[w()[r]] = S() / w().length;
              for (var i = 0; i < _().length; i++)
                e[C()[i]] =
                  (a -
                    (function () {
                      var e = [],
                        n = JSON.parse(JSON.stringify(_())),
                        r = [],
                        a = "starchyFoods",
                        i = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(a);
                      for (; -1 !== i; )
                        r.push(i),
                          (i = t
                            .map(function (e) {
                              return e.type;
                            })
                            .indexOf(a, i + 1));
                      for (var c = 0; c < r.length; c++)
                        n[r[c]] = F() / r.length;
                      var o = [],
                        s = "proteinFoods",
                        u = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(s);
                      for (; -1 !== u; )
                        o.push(u),
                          (u = t
                            .map(function (e) {
                              return e.type;
                            })
                            .indexOf(s, u + 1));
                      for (var l = 0; l < r.length; l++)
                        n[o[l]] = S() / o.length;
                      var d = 0;
                      d = _().length < 1 ? 1 : _().length;
                      for (var f = 0; f < d; f++) {
                        var h = n[f] * I()[f];
                        e.push(h);
                      }
                      return e.reduce(function (e, t) {
                        return e + t;
                      });
                    })()) /
                  5 /
                  C().length;
              return e;
            }
            function k() {
              for (
                var e = [],
                  n = "starchyFoods",
                  r = t
                    .map(function (e) {
                      return e.type;
                    })
                    .indexOf(n);
                -1 !== r;

              )
                e.push(r),
                  (r = t
                    .map(function (e) {
                      return e.type;
                    })
                    .indexOf(n, r + 1));
              return e;
            }
            function F() {
              return (
                (i -
                  (function () {
                    var e = [],
                      t = 0;
                    t = _().length < 1 ? 1 : _().length;
                    for (var n = 0; n < t; n++) {
                      var r = _()[n] * D()[n];
                      e.push(r);
                    }
                    return e.reduce(function (e, t) {
                      return e + t;
                    });
                  })()) /
                14
              );
            }
            function w() {
              for (
                var e = [],
                  n = "proteinFoods",
                  r = t
                    .map(function (e) {
                      return e.type;
                    })
                    .indexOf(n);
                -1 !== r;

              )
                e.push(r),
                  (r = t
                    .map(function (e) {
                      return e.type;
                    })
                    .indexOf(n, r + 1));
              return e;
            }
            function C() {
              for (
                var e = [],
                  n = "fats",
                  r = t
                    .map(function (e) {
                      return e.type;
                    })
                    .indexOf(n);
                -1 !== r;

              )
                e.push(r),
                  (r = t
                    .map(function (e) {
                      return e.type;
                    })
                    .indexOf(n, r + 1));
              return e;
            }
            function S() {
              return (
                (n -
                  (function () {
                    for (
                      var e = [],
                        n = JSON.parse(JSON.stringify(_())),
                        r = [],
                        a = "starchyFoods",
                        i = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(a);
                      -1 !== i;

                    )
                      r.push(i),
                        (i = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(a, i + 1));
                    for (var c = 0; c < r.length; c++) n[r[c]] = F() / r.length;
                    var o = 0;
                    o = _().length < 1 ? 1 : _().length;
                    for (var s = 0; s < o; s++) {
                      var u = n[s] * P()[s];
                      e.push(u);
                    }
                    return e.reduce(function (e, t) {
                      return e + t;
                    });
                  })()) /
                7
              );
            }
            function P() {
              var e = [];
              if (t.length < 1) return [];
              for (var n = 0; n < t.length; n++) {
                var r = t[n].prot;
                e.push(r);
              }
              return e;
            }
            function I() {
              var e = [];
              if (t.length < 1) return [];
              for (var n = 0; n < t.length; n++) {
                var r = t[n].lip;
                e.push(r);
              }
              return e;
            }
            function D() {
              var e = [];
              if (t.length < 1) return [];
              for (var n = 0; n < t.length; n++) {
                var r = t[n].hc;
                e.push(r);
              }
              return e;
            }
            function M() {
              if (_().length < 1) return 0;
              for (var e = [], n = 0; n < _().length; n++) {
                var r = t[n].prot * N()[n];
                e.push(r);
              }
              return e.reduce(function (e, t) {
                return e + t;
              });
            }
            function q() {
              if (_().length < 1) return 0;
              for (var e = [], n = 0; n < _().length; n++) {
                var r = t[n].lip * N()[n];
                e.push(r);
              }
              return e.reduce(function (e, t) {
                return e + t;
              });
            }
            function J() {
              if (_().length < 1) return 0;
              for (var e = [], n = 0; n < _().length; n++) {
                var r = t[n].hc * N()[n];
                e.push(r);
              }
              return e.reduce(function (e, t) {
                return e + t;
              });
            }
            function W() {
              return 4 * M() + 9 * q() + 4 * J();
            }
            var E = new Date(),
              L =
                E.getDate() +
                " / " +
                (E.getMonth() + 1) +
                " / " +
                E.getFullYear();
            new g.default();
            return Object(h.jsx)(h.Fragment, {
              children: Object(h.jsx)("div", {
                className: "col p-3",
                children: Object(h.jsxs)("div", {
                  className: "col ",
                  children: [
                    Object(h.jsx)("label", {
                      children: Object(h.jsx)("h2", {
                        children: " Search your food:",
                      }),
                    }),
                    Object(h.jsxs)("div", {
                      className: "input-group mt-2",
                      children: [
                        Object(h.jsx)("input", {
                          id: "inputSearchFood",
                          type: "text",
                          value: x,
                          list: "texto_uno",
                          className: "form-control w-75",
                          placeholder: "Search your food",
                          onChange: function (e) {
                            var t = e.target.value;
                            v(t);
                          },
                          onKeyPress: function (e) {
                            "Enter" === e.key && y();
                          },
                        }),
                        Object(h.jsx)("datalist", {
                          id: "texto_uno",
                          children: l.map(function (e) {
                            return Object(h.jsx)(
                              "option",
                              { children: e.name },
                              e.food_id
                            );
                          }),
                        }),
                        Object(h.jsx)("div", {
                          className: "input-group-append",
                          children: Object(h.jsx)("button", {
                            className: "btn btn-primary btn-lg",
                            type: "button",
                            onClick: y,
                            children: "Add food",
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsxs)("div", {
                      className: "col mt-2",
                      children: [
                        Object(h.jsx)("button", {
                          className: " btn btn-success",
                          type: "button",
                          onClick: function () {
                            var e = (function () {
                                var e = [],
                                  n = Object.entries(c).find(function (e) {
                                    return "Breakfast" === e[1].name;
                                  })[0],
                                  r = c[n];
                                return (
                                  (e = Object(j.a)(r.items)).map(function (e) {
                                    var n = t.findIndex(function (t) {
                                      return t.idUnique === e.idUnique;
                                    });
                                    e.foodWeight =
                                      Math.round(t[n].foodWeight) + "g";
                                  }),
                                  console.log("arrBreakfast NOW", e),
                                  e
                                );
                              })(),
                              n = (function () {
                                var e = [],
                                  n = Object.entries(c).find(function (e) {
                                    return "Lunch" === e[1].name;
                                  })[0],
                                  r = c[n];
                                return (
                                  (e = Object(j.a)(r.items)).map(function (e) {
                                    var n = t.findIndex(function (t) {
                                      return t.idUnique === e.idUnique;
                                    });
                                    e.foodWeight =
                                      Math.round(t[n].foodWeight) + "g";
                                  }),
                                  console.log("arrLunch NOW", e),
                                  e
                                );
                              })(),
                              r = (function () {
                                var e = [],
                                  n = Object.entries(c).find(function (e) {
                                    return "Dinner" === e[1].name;
                                  })[0],
                                  r = c[n];
                                return (
                                  (e = Object(j.a)(r.items)).map(function (e) {
                                    var n = t.findIndex(function (t) {
                                      return t.idUnique === e.idUnique;
                                    });
                                    e.foodWeight =
                                      Math.round(t[n].foodWeight) + "g";
                                  }),
                                  console.log("arrDinner NOW", e),
                                  e
                                );
                              })(),
                              a = (function () {
                                var e = [];
                                if (d) {
                                  var n = Object.entries(c).find(function (e) {
                                    return "Snack" === e[1].name;
                                  })[0];
                                  if (void 0 !== n) {
                                    var r = c[n];
                                    return (
                                      (e = Object(j.a)(r.items)).map(function (
                                        e
                                      ) {
                                        var n = t.findIndex(function (t) {
                                          return t.idUnique === e.idUnique;
                                        });
                                        e.foodWeight =
                                          Math.round(t[n].foodWeight) + "g";
                                      }),
                                      console.log("arrSnack NOW", e),
                                      e
                                    );
                                  }
                                }
                              })(),
                              i = [
                                {
                                  proteins:
                                    Math.round(M()) +
                                    "g / " +
                                    Math.round(
                                      0 == M() ? 0 : (100 * M() * 4) / W()
                                    ) +
                                    "%",
                                  fats:
                                    Math.round(q()) +
                                    "g / " +
                                    Math.round(
                                      0 == q() ? 0 : (100 * q() * 9) / W()
                                    ) +
                                    "%",
                                  carbohydrates:
                                    Math.round(J()) +
                                    "g / " +
                                    Math.round(
                                      0 == J() ? 0 : (100 * J() * 4) / W()
                                    ) +
                                    "%",
                                  calories: Math.round(W()) + " kcal",
                                  date: L,
                                },
                              ],
                              o = new g.default("p", "pt");
                            o.text(
                              "F r e e   N u t r i t i o n   P l a n n e r  .  O R G",
                              40,
                              40
                            ),
                              o.autoTable(
                                [
                                  { title: "BREAKFAST" },
                                  { title: "Foods", dataKey: "name" },
                                  { title: "Grams", dataKey: "foodWeight" },
                                ],
                                e,
                                { margin: { top: 60 } }
                              ),
                              o.autoTable(
                                [
                                  { title: "LUNCH         " },
                                  { title: "Foods", dataKey: "name" },
                                  { title: "Grams", dataKey: "foodWeight" },
                                ],
                                n,
                                { margin: { top: 120 } }
                              ),
                              o.autoTable(
                                [
                                  { title: "DINNER        " },
                                  { title: "Foods", dataKey: "name" },
                                  { title: "Grams", dataKey: "foodWeight" },
                                ],
                                r,
                                { margin: { top: 120 } }
                              ),
                              d &&
                                o.autoTable(
                                  [
                                    { title: "SNACK         " },
                                    { title: "Foods", dataKey: "name" },
                                    { title: "Grams", dataKey: "foodWeight" },
                                  ],
                                  a,
                                  { margin: { top: 120 } }
                                ),
                              o.autoTable(
                                [
                                  { title: "RESULTS        " },
                                  { title: "Proteins", dataKey: "proteins" },
                                  { title: "Fats", dataKey: "fats" },
                                  {
                                    title: "Carbohydrates",
                                    dataKey: "carbohydrates",
                                  },
                                  { title: "Calories", dataKey: "calories" },
                                  { title: "Date", dataKey: "date" },
                                ],
                                i,
                                { margin: { top: 120 } }
                              ),
                              o.output("dataurlnewwindow");
                          },
                          children: "PDF Plan",
                        }),
                        Object(h.jsx)("button", {
                          className: " btn btn-danger m-2 ",
                          type: "button",
                          onClick: function () {
                            window.location.replace("");
                          },
                          children: "All Delete",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
        x = n(82),
        v =
          (n(100),
          x.a
            .initializeApp({
              apiKey: "AIzaSyDD6v81aLenZQpT51HDuE-tQkjHUMGgPlg",
              authDomain: "pern-todo-react.firebaseapp.com",
              projectId: "pern-todo-react",
              storageBucket: "pern-todo-react.appspot.com",
              messagingSenderId: "383867542748",
              appId: "1:383867542748:web:a7e1aa188e438971912819",
            })
            .auth()),
        y = function () {
          var e = Object(l.f)(),
            t = Object(r.useState)(null),
            n = Object(s.a)(t, 2),
            a = n[0],
            i = n[1];
          Object(r.useEffect)(function () {
            v.onAuthStateChanged(function (e) {
              e && i(e.email);
            });
          }, []);
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)("nav", {
              className:
                "navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-around p-3",
              children: [
                Object(h.jsx)("h1", {
                  children:
                    "F r e e   N u t r i t i o n  P l a n n e r  .  O R G",
                }),
                Object(h.jsxs)("ul", {
                  className: "navbar-nav mr-auto ",
                  children: [
                    Object(h.jsx)("li", {
                      className: "nav-item",
                      children: Object(h.jsx)(u.b, {
                        className: "nav-link",
                        to: "/",
                        children: "Home",
                      }),
                    }),
                    Object(h.jsx)("li", {
                      className: "nav-item",
                      children: a
                        ? Object(h.jsx)("span", {})
                        : Object(h.jsx)(u.b, {
                            className: "nav-link",
                            to: "/login",
                            children: "Login",
                          }),
                    }),
                    Object(h.jsx)("li", {
                      className: "nav-item",
                      children:
                        "admin@admin.com" === a
                          ? Object(h.jsx)(u.b, {
                              className: "nav-link",
                              to: "/admin",
                              children: "Admin",
                            })
                          : Object(h.jsx)("span", {}),
                    }),
                  ],
                }),
                a
                  ? Object(h.jsx)("button", {
                      onClick: function () {
                        v.signOut(), i(null), e.push("/");
                      },
                      className: "btn btn-danger",
                      children: "Sign Out",
                    })
                  : Object(h.jsx)("span", {}),
              ],
            }),
          });
        },
        _ = function () {
          var e = Object(r.useState)(2e3),
            t = Object(s.a)(e, 2),
            n = t[0],
            a = t[1],
            i = Object(r.useContext)(p),
            c = i.inputProt,
            o = i.setInputProt,
            u = i.inputLip,
            l = i.setInputLip,
            d = i.inputCarb,
            f = i.setInputCarb,
            b = i.inputProtPerc,
            j = i.setInputProtPerc,
            m = i.inputLipPerc,
            g = i.setInputLipPerc,
            O = i.inputCarbPerc,
            x = i.setInputCarbPerc,
            v = i.arrFoods;
          function y(e) {
            var t = e.target.value;
            a(t), _();
            j(15), o((0.15 * t) / 4), _();
            g(35), l((0.35 * t) / 9), _();
            x(50), f((0.5 * t) / 4), _();
          }
          function _() {
            for (var e = 0; e < N().length; e++)
              v[e].foodWeight = v[e].weight_int * k()[e];
          }
          function N() {
            var e = [];
            if (v.length < 1) return [];
            for (var t = 0; t < v.length; t++) {
              var n = v[t].n_int_card;
              e.push(n);
            }
            return e;
          }
          function k() {
            for (
              var e = JSON.parse(JSON.stringify(N())), t = 0;
              t < N().length;
              t++
            )
              e[F()[t]] = w() / F().length;
            for (var n = 0; n < N().length; n++) e[C()[n]] = P() / C().length;
            for (var r = 0; r < N().length; r++)
              e[S()[r]] =
                (u -
                  (function () {
                    var e = [],
                      t = JSON.parse(JSON.stringify(N())),
                      n = [],
                      r = "starchyFoods",
                      a = v
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(r);
                    for (; -1 !== a; )
                      n.push(a),
                        (a = v
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(r, a + 1));
                    for (var i = 0; i < n.length; i++) t[n[i]] = w() / n.length;
                    var c = [],
                      o = "proteinFoods",
                      s = v
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(o);
                    for (; -1 !== s; )
                      c.push(s),
                        (s = v
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(o, s + 1));
                    for (var u = 0; u < n.length; u++) t[c[u]] = P() / c.length;
                    var l = 0;
                    l = N().length < 1 ? 1 : N().length;
                    for (var d = 0; d < l; d++) {
                      var f = t[d] * D()[d];
                      e.push(f);
                    }
                    return e.reduce(function (e, t) {
                      return e + t;
                    });
                  })()) /
                5 /
                S().length;
            return e;
          }
          function F() {
            for (
              var e = [],
                t = "starchyFoods",
                n = v
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t);
              -1 !== n;

            )
              e.push(n),
                (n = v
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t, n + 1));
            return e;
          }
          function w() {
            return (
              (d -
                (function () {
                  var e = [],
                    t = 0;
                  t = N().length < 1 ? 1 : N().length;
                  for (var n = 0; n < t; n++) {
                    var r = N()[n] * M()[n];
                    e.push(r);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              14
            );
          }
          function C() {
            for (
              var e = [],
                t = "proteinFoods",
                n = v
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t);
              -1 !== n;

            )
              e.push(n),
                (n = v
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t, n + 1));
            return e;
          }
          function S() {
            for (
              var e = [],
                t = "fats",
                n = v
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t);
              -1 !== n;

            )
              e.push(n),
                (n = v
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(t, n + 1));
            return e;
          }
          function P() {
            return (
              (c -
                (function () {
                  for (
                    var e = [],
                      t = JSON.parse(JSON.stringify(N())),
                      n = [],
                      r = "starchyFoods",
                      a = v
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(r);
                    -1 !== a;

                  )
                    n.push(a),
                      (a = v
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(r, a + 1));
                  for (var i = 0; i < n.length; i++) t[n[i]] = w() / n.length;
                  var c = 0;
                  c = N().length < 1 ? 1 : N().length;
                  for (var o = 0; o < c; o++) {
                    var s = t[o] * I()[o];
                    e.push(s);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              7
            );
          }
          function I() {
            var e = [];
            if (v.length < 1) return [];
            for (var t = 0; t < v.length; t++) {
              var n = v[t].prot;
              e.push(n);
            }
            return e;
          }
          function D() {
            var e = [];
            if (v.length < 1) return [];
            for (var t = 0; t < v.length; t++) {
              var n = v[t].lip;
              e.push(n);
            }
            return e;
          }
          function M() {
            var e = [];
            if (v.length < 1) return [];
            for (var t = 0; t < v.length; t++) {
              var n = v[t].hc;
              e.push(n);
            }
            return e;
          }
          return Object(h.jsxs)("form", {
            className: "col p-3",
            children: [
              Object(h.jsxs)("div", {
                children: [
                  Object(h.jsx)("label", {
                    children: Object(h.jsx)("h4", { children: "CALORIES" }),
                  }),
                  Object(h.jsx)("input", {
                    name: "inputKcal",
                    className: "form-control w-75 col-auto kcal",
                    placeholder: "Enter your Kcal",
                    onChange: y,
                    type: "number",
                    step: "100",
                    value: n,
                    onKeyPress: function (e) {
                      "Enter" === e.key && y();
                    },
                  }),
                ],
              }),
              Object(h.jsx)("hr", {}),
              Object(h.jsxs)("div", {
                className: "form-row d-flex flex-row ",
                children: [
                  Object(h.jsxs)("div", {
                    className: "col-md-4 mb-3",
                    children: [
                      Object(h.jsxs)("label", {
                        children: [
                          " ",
                          Object(h.jsx)("h4", { children: "Proteins (%)" }),
                        ],
                      }),
                      Object(h.jsx)("input", {
                        name: "inputProt",
                        id: "inputMacros",
                        onChange: function (e) {
                          var t = e.target.value;
                          j(t), o(((t / 100) * n) / 4), _();
                        },
                        type: "number",
                        className: "form-control w-75",
                        placeholder: "Protein in %",
                        value: b,
                      }),
                    ],
                  }),
                  Object(h.jsxs)("div", {
                    className: "col-md-4 mb-3",
                    children: [
                      Object(h.jsxs)("label", {
                        children: [
                          " ",
                          Object(h.jsx)("h4", { children: "Fats (%)" }),
                        ],
                      }),
                      Object(h.jsx)("input", {
                        name: "inputLip",
                        id: "inputMacros",
                        onChange: function (e) {
                          var t = e.target.value;
                          g(t), l(((t / 100) * n) / 9), _();
                        },
                        type: "number",
                        className: "form-control w-75",
                        placeholder: "Lipids in %",
                        value: m,
                      }),
                    ],
                  }),
                  Object(h.jsxs)("div", {
                    className: "col-md-4 mb-3",
                    children: [
                      Object(h.jsxs)("label", {
                        children: [
                          " ",
                          Object(h.jsx)("h4", {
                            children: "Carbohydrates (%)",
                          }),
                        ],
                      }),
                      Object(h.jsx)("input", {
                        name: "inputCarb",
                        id: "inputMacros",
                        onChange: function (e) {
                          var t = e.target.value;
                          x(t), f(((t / 100) * n) / 4), _();
                        },
                        type: "number",
                        className: "form-control w-75",
                        placeholder: "Carbo. in %",
                        value: O,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        N = function () {
          var e = Object(r.useContext)(p),
            t = (e.isReqGrams, e.setIsReqGrams);
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)("div", {
              className: "d-flex  align-items-center p-3",
              children: [
                Object(h.jsxs)("label", {
                  children: [
                    " ",
                    Object(h.jsx)("h2", { children: "Requirements" }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "ms-5",
                  children: [
                    Object(h.jsxs)("div", {
                      className: "form-check",
                      children: [
                        Object(h.jsx)("input", {
                          className: "form-check-input",
                          type: "radio",
                          name: "flexRadioDefault",
                          id: "flexRadioDefault1",
                          onChange: function () {
                            return t(!0);
                          },
                        }),
                        Object(h.jsx)("label", {
                          className: "form-check-label",
                          htmlFor: "flexRadioDefault1",
                          children: "Percentage (%)",
                        }),
                      ],
                    }),
                    Object(h.jsxs)("div", {
                      className: "form-check",
                      children: [
                        Object(h.jsx)("input", {
                          className: "form-check-input",
                          type: "radio",
                          name: "flexRadioDefault",
                          id: "flexRadioDefault2",
                          onChange: function () {
                            return t(!1);
                          },
                        }),
                        Object(h.jsx)("label", {
                          className: "form-check-label",
                          htmlFor: "flexRadioDefault2",
                          children: "Grams (g)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var k = function () {
          var e = Object(r.useContext)(p).isReqGrams;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(y, {}),
              Object(h.jsx)(N, {}),
              Object(h.jsxs)("div", {
                className: "form-row d-flex ",
                children: [
                  e ? Object(h.jsx)(_, {}) : Object(h.jsx)(b, {}),
                  Object(h.jsx)(O, {}),
                ],
              }),
            ],
          });
        },
        F = n(59),
        w = n(80),
        C = n(44);
      var S = function () {
          var e = Object(r.useContext)(p),
            t = e.arrFoods,
            n = e.setArrFoods,
            a = e.columns,
            i = e.setColumns,
            c = e.inputProt,
            u = e.inputLip,
            l = e.inputCarb,
            d = e.setShowSnack;
          function b() {
            for (var e = 0; e < g().length; e++)
              t[e].foodWeight = t[e].weight_int * O()[e];
          }
          function g() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].n_int_card;
              e.push(r);
            }
            return e;
          }
          function O() {
            for (
              var e = JSON.parse(JSON.stringify(g())), n = 0;
              n < g().length;
              n++
            )
              e[x()[n]] = v() / x().length;
            for (var r = 0; r < g().length; r++) e[y()[r]] = N() / y().length;
            for (var a = 0; a < g().length; a++)
              e[_()[a]] =
                (u -
                  (function () {
                    var e = [],
                      n = JSON.parse(JSON.stringify(g())),
                      r = [],
                      a = "starchyFoods",
                      i = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(a);
                    for (; -1 !== i; )
                      r.push(i),
                        (i = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(a, i + 1));
                    for (var c = 0; c < r.length; c++) n[r[c]] = v() / r.length;
                    var o = [],
                      s = "proteinFoods",
                      u = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(s);
                    for (; -1 !== u; )
                      o.push(u),
                        (u = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(s, u + 1));
                    for (var l = 0; l < r.length; l++) n[o[l]] = N() / o.length;
                    var d = 0;
                    d = g().length < 1 ? 1 : g().length;
                    for (var f = 0; f < d; f++) {
                      var h = n[f] * S()[f];
                      e.push(h);
                    }
                    return e.reduce(function (e, t) {
                      return e + t;
                    });
                  })()) /
                5 /
                _().length;
            return e;
          }
          function x() {
            for (
              var e = [],
                n = "starchyFoods",
                r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n);
              -1 !== r;

            )
              e.push(r),
                (r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n, r + 1));
            return e;
          }
          function v() {
            return (
              (l -
                (function () {
                  var e = [],
                    t = 0;
                  t = g().length < 1 ? 1 : g().length;
                  for (var n = 0; n < t; n++) {
                    var r = g()[n] * P()[n];
                    e.push(r);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              14
            );
          }
          function y() {
            for (
              var e = [],
                n = "proteinFoods",
                r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n);
              -1 !== r;

            )
              e.push(r),
                (r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n, r + 1));
            return e;
          }
          function _() {
            for (
              var e = [],
                n = "fats",
                r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n);
              -1 !== r;

            )
              e.push(r),
                (r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n, r + 1));
            return e;
          }
          function N() {
            return (
              (c -
                (function () {
                  for (
                    var e = [],
                      n = JSON.parse(JSON.stringify(g())),
                      r = [],
                      a = "starchyFoods",
                      i = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(a);
                    -1 !== i;

                  )
                    r.push(i),
                      (i = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(a, i + 1));
                  for (var c = 0; c < r.length; c++) n[r[c]] = v() / r.length;
                  var o = 0;
                  o = g().length < 1 ? 1 : g().length;
                  for (var s = 0; s < o; s++) {
                    var u = n[s] * k()[s];
                    e.push(u);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              7
            );
          }
          function k() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].prot;
              e.push(r);
            }
            return e;
          }
          function S() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].lip;
              e.push(r);
            }
            return e;
          }
          function P() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].hc;
              e.push(r);
            }
            return e;
          }
          e.showSnack;
          var I = Object(r.useState)("initialState"),
            D = Object(s.a)(I, 2),
            M = D[0],
            q = D[1],
            J = Object(r.useState)("initialState"),
            W = Object(s.a)(J, 2),
            E = W[0],
            L = W[1],
            U = Object(r.useState)(""),
            R = Object(s.a)(U, 2),
            K = R[0],
            A = R[1],
            G = Object(r.useState)(""),
            T = Object(s.a)(G, 2),
            B = T[0],
            H = T[1],
            z = function (e) {
              e.preventDefault(), Q(), Y();
            },
            Q = function () {
              var e = t.findIndex(function (e) {
                return e.idUnique === M;
              });
              (t[e].name = K), console.log("arrFoods despues", t);
              var n = [],
                r = Object.entries(a).find(function (e) {
                  return e[1].name === E;
                })[0],
                c = a[r],
                s = (n = Object(j.a)(c.items)).findIndex(function (e) {
                  return e.idUnique === M;
                });
              (n[s].name = K),
                console.log("arrEdited", n),
                i(
                  Object(m.a)(
                    Object(m.a)({}, a),
                    {},
                    Object(o.a)(
                      {},
                      r,
                      Object(m.a)(
                        Object(m.a)({}, c),
                        {},
                        { items: Object(j.a)(n) }
                      )
                    )
                  )
                );
            },
            Y = function () {
              var e = t.findIndex(function (e) {
                  return e.idUnique === M;
                }),
                n = B / t[e].weight_int;
              (t[e].n_int_card = n), console.log("arrFoods despues", t), b();
              var r = [],
                c = Object.entries(a).find(function (e) {
                  return e[1].name === E;
                })[0],
                s = a[c],
                u = (r = Object(j.a)(s.items)).findIndex(function (e) {
                  return e.idUnique === M;
                });
              (r[u].n_int_card = n),
                console.log("arrEdited", r),
                i(
                  Object(m.a)(
                    Object(m.a)({}, a),
                    {},
                    Object(o.a)(
                      {},
                      c,
                      Object(m.a)(
                        Object(m.a)({}, s),
                        {},
                        { items: Object(j.a)(r) }
                      )
                    )
                  )
                );
            };
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("button", {
                className: "btn btn-outline-success m-3",
                onClick: function () {
                  i(
                    Object(m.a)(
                      Object(m.a)({}, a),
                      {},
                      Object(o.a)({}, f()(), { name: "Snack", items: [] })
                    )
                  ),
                    d(!0);
                },
                children: "add Snack",
              }),
              Object(h.jsx)("div", {
                className: "container",
                children: Object(h.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  },
                  children: Object(h.jsx)(C.a, {
                    onDragEnd: function (e) {
                      return (function (e, t, n) {
                        if (e.destination) {
                          var r = e.source,
                            a = e.destination;
                          if (r.droppableId !== a.droppableId) {
                            var i,
                              c = t[r.droppableId],
                              u = t[a.droppableId],
                              l = Object(j.a)(c.items),
                              d = Object(j.a)(u.items),
                              f = l.splice(r.index, 1),
                              h = Object(s.a)(f, 1)[0];
                            d.splice(a.index, 0, h),
                              n(
                                Object(m.a)(
                                  Object(m.a)({}, t),
                                  {},
                                  ((i = {}),
                                  Object(o.a)(
                                    i,
                                    r.droppableId,
                                    Object(m.a)(
                                      Object(m.a)({}, c),
                                      {},
                                      { items: l }
                                    )
                                  ),
                                  Object(o.a)(
                                    i,
                                    a.droppableId,
                                    Object(m.a)(
                                      Object(m.a)({}, u),
                                      {},
                                      { items: d }
                                    )
                                  ),
                                  i)
                                )
                              );
                          } else {
                            var p = t[r.droppableId],
                              b = Object(j.a)(p.items),
                              g = b.splice(r.index, 1),
                              O = Object(s.a)(g, 1)[0];
                            b.splice(a.index, 0, O),
                              n(
                                Object(m.a)(
                                  Object(m.a)({}, t),
                                  {},
                                  Object(o.a)(
                                    {},
                                    r.droppableId,
                                    Object(m.a)(
                                      Object(m.a)({}, p),
                                      {},
                                      { items: b }
                                    )
                                  )
                                )
                              );
                          }
                        }
                      })(e, a, i);
                    },
                    children: Object.entries(a).map(function (e, r) {
                      var c = Object(s.a)(e, 2),
                        u = c[0],
                        l = c[1];
                      return Object(h.jsxs)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            Object(h.jsx)("h2", { children: l.name }),
                            Object(h.jsx)("div", {
                              style: { margin: 8 },
                              children: Object(h.jsx)(
                                C.c,
                                {
                                  droppableId: u,
                                  children: function (e, r) {
                                    return Object(h.jsxs)(
                                      "div",
                                      Object(m.a)(
                                        Object(m.a)({}, e.droppableProps),
                                        {},
                                        {
                                          ref: e.innerRef,
                                          style: {
                                            background: r.isDraggingOver
                                              ? "lightblue"
                                              : "lightgrey",
                                            padding: 4,
                                            width: 250,
                                            minHeight: 500,
                                          },
                                          children: [
                                            l.items.map(function (e, r) {
                                              return Object(h.jsx)(
                                                C.b,
                                                {
                                                  draggableId: e.idUnique,
                                                  index: r,
                                                  children: function (c, s) {
                                                    return Object(h.jsxs)(
                                                      "div",
                                                      Object(m.a)(
                                                        Object(m.a)(
                                                          Object(m.a)(
                                                            {
                                                              className:
                                                                "cardItem",
                                                              ref: c.innerRef,
                                                            },
                                                            c.draggableProps
                                                          ),
                                                          c.dragHandleProps
                                                        ),
                                                        {},
                                                        {
                                                          style: Object(m.a)(
                                                            {
                                                              userSelect:
                                                                "none",
                                                              padding: 16,
                                                              margin:
                                                                "0 0 8px 0",
                                                              minHeight: "50px",
                                                              backgroundColor: s.isDragging
                                                                ? "#263B4A"
                                                                : "#456C86",
                                                              color: "white",
                                                            },
                                                            c.draggableProps
                                                              .style
                                                          ),
                                                          children: [
                                                            10 *
                                                              ((r = t.findIndex(
                                                                function (t) {
                                                                  return (
                                                                    t.idUnique ===
                                                                    e.idUnique
                                                                  );
                                                                }
                                                              )),
                                                              Math.round(
                                                                t[r].foodWeight
                                                              ) / 10),
                                                            "g",
                                                            " ",
                                                            e.name,
                                                            Object(h.jsx)(
                                                              "img",
                                                              {
                                                                src: e.img_link,
                                                                alt: "foodImg",
                                                                width: "30%",
                                                              }
                                                            ),
                                                            Object(h.jsx)(F.b, {
                                                              type: "button",
                                                              style: {
                                                                fontSize: 25,
                                                              },
                                                              onClick: function () {
                                                                return (function (
                                                                  e,
                                                                  r
                                                                ) {
                                                                  var c = a[r],
                                                                    s = t.filter(
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          t.idUnique !==
                                                                          e
                                                                        );
                                                                      }
                                                                    );
                                                                  n(s),
                                                                    console.log(
                                                                      "itemIdUnique delete",
                                                                      e
                                                                    );
                                                                  var u = t.findIndex(
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        t.idUnique ==
                                                                        e
                                                                      );
                                                                    }
                                                                  );
                                                                  t.splice(
                                                                    u,
                                                                    1
                                                                  ),
                                                                    b(),
                                                                    i(
                                                                      Object(
                                                                        m.a
                                                                      )(
                                                                        Object(
                                                                          m.a
                                                                        )(
                                                                          {},
                                                                          a
                                                                        ),
                                                                        {},
                                                                        Object(
                                                                          o.a
                                                                        )(
                                                                          {},
                                                                          r,
                                                                          Object(
                                                                            m.a
                                                                          )(
                                                                            Object(
                                                                              m.a
                                                                            )(
                                                                              {},
                                                                              c
                                                                            ),
                                                                            {},
                                                                            {
                                                                              items: Object(
                                                                                j.a
                                                                              )(
                                                                                c.items.filter(
                                                                                  function (
                                                                                    t
                                                                                  ) {
                                                                                    return (
                                                                                      t.idUnique !==
                                                                                      e
                                                                                    );
                                                                                  }
                                                                                )
                                                                              ),
                                                                            }
                                                                          )
                                                                        )
                                                                      )
                                                                    );
                                                                })(
                                                                  e.idUnique,
                                                                  u
                                                                );
                                                              },
                                                            }),
                                                            Object(h.jsx)(F.a, {
                                                              type: "button",
                                                              style: {
                                                                fontSize: 25,
                                                              },
                                                              onClick: function () {
                                                                return (function (
                                                                  e,
                                                                  n
                                                                ) {
                                                                  var r = t.findIndex(
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        t.name ===
                                                                        e
                                                                      );
                                                                    }
                                                                  );
                                                                  t.unshift({
                                                                    food_id:
                                                                      t[r]
                                                                        .food_id,
                                                                    name:
                                                                      t[r].name,
                                                                    type:
                                                                      t[r].type,
                                                                    weight_int:
                                                                      t[r]
                                                                        .weight_int,
                                                                    prot:
                                                                      t[r].prot,
                                                                    lip:
                                                                      t[r].lip,
                                                                    hc: t[r].hc,
                                                                    img_link:
                                                                      t[r]
                                                                        .img_link,
                                                                    n_int_card:
                                                                      t[r]
                                                                        .n_int_card,
                                                                    foodWeight: 0,
                                                                    idUnique: f()(),
                                                                  }),
                                                                    b();
                                                                  var c = {
                                                                      idUnique:
                                                                        t[0]
                                                                          .idUnique,
                                                                      name:
                                                                        t[0]
                                                                          .name,
                                                                      foodWeight:
                                                                        t[0]
                                                                          .foodWeight,
                                                                      type:
                                                                        t[0]
                                                                          .type,
                                                                      img_link:
                                                                        t[0]
                                                                          .img_link,
                                                                    },
                                                                    s = Object.entries(
                                                                      a
                                                                    ).find(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (
                                                                          e[1]
                                                                            .name ===
                                                                          n
                                                                        );
                                                                      }
                                                                    )[0],
                                                                    u = a[s];
                                                                  i(
                                                                    Object(m.a)(
                                                                      Object(
                                                                        m.a
                                                                      )({}, a),
                                                                      {},
                                                                      Object(
                                                                        o.a
                                                                      )(
                                                                        {},
                                                                        s,
                                                                        Object(
                                                                          m.a
                                                                        )(
                                                                          Object(
                                                                            m.a
                                                                          )(
                                                                            {},
                                                                            u
                                                                          ),
                                                                          {},
                                                                          {
                                                                            items: [].concat(
                                                                              Object(
                                                                                j.a
                                                                              )(
                                                                                u.items
                                                                              ),
                                                                              [
                                                                                c,
                                                                              ]
                                                                            ),
                                                                          }
                                                                        )
                                                                      )
                                                                    )
                                                                  );
                                                                })(
                                                                  e.name,
                                                                  l.name
                                                                );
                                                              },
                                                            }),
                                                            "starchyFoods" ===
                                                              e.type ||
                                                            "fats" === e.type ||
                                                            "proteinFoods" ===
                                                              e.type
                                                              ? ""
                                                              : Object(h.jsx)(
                                                                  w.a,
                                                                  {
                                                                    size:
                                                                      "28px",
                                                                    "data-bs-toggle":
                                                                      "modal",
                                                                    "data-bs-target":
                                                                      "#exampleModal",
                                                                    onClick: function () {
                                                                      return (function (
                                                                        e,
                                                                        t
                                                                      ) {
                                                                        q(e),
                                                                          L(t);
                                                                      })(
                                                                        e.idUnique,
                                                                        l.name
                                                                      );
                                                                    },
                                                                    children:
                                                                      "edit",
                                                                  }
                                                                ),
                                                            Object(h.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "modal fade",
                                                                id:
                                                                  "exampleModal",
                                                                tabIndex: "-1",
                                                                "aria-labelledby":
                                                                  "exampleModalLabel",
                                                                "aria-hidden":
                                                                  "true",
                                                                children: Object(
                                                                  h.jsx
                                                                )("div", {
                                                                  className:
                                                                    "modal-dialog",
                                                                  children: Object(
                                                                    h.jsxs
                                                                  )("div", {
                                                                    className:
                                                                      "modal-content",
                                                                    children: [
                                                                      Object(
                                                                        h.jsxs
                                                                      )("div", {
                                                                        className:
                                                                          "modal-header",
                                                                        children: [
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "h4",
                                                                            {
                                                                              className:
                                                                                "modal-title text-dark ",
                                                                              id:
                                                                                "exampleModal",
                                                                              children:
                                                                                "Edit food",
                                                                            }
                                                                          ),
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "button",
                                                                            {
                                                                              type:
                                                                                "button",
                                                                              className:
                                                                                "btn-close",
                                                                              "data-bs-dismiss":
                                                                                "modal",
                                                                              "aria-label":
                                                                                "Close",
                                                                              onClick: function (
                                                                                e
                                                                              ) {
                                                                                return z(
                                                                                  e
                                                                                );
                                                                              },
                                                                            }
                                                                          ),
                                                                        ],
                                                                      }),
                                                                      Object(
                                                                        h.jsxs
                                                                      )("div", {
                                                                        className:
                                                                          "modal-body",
                                                                        children: [
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "h5",
                                                                            {
                                                                              className:
                                                                                "d-flex justify-content-start text-dark",
                                                                              children:
                                                                                "Name",
                                                                            }
                                                                          ),
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "input",
                                                                            {
                                                                              type:
                                                                                "text",
                                                                              className:
                                                                                "form-control",
                                                                              value: K,
                                                                              onChange: function (
                                                                                e
                                                                              ) {
                                                                                return A(
                                                                                  e
                                                                                    .target
                                                                                    .value
                                                                                );
                                                                              },
                                                                            }
                                                                          ),
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "h5",
                                                                            {
                                                                              className:
                                                                                "d-flex justify-content-start mt-3 text-dark",
                                                                              children:
                                                                                "Weight (g)",
                                                                            }
                                                                          ),
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "input",
                                                                            {
                                                                              type:
                                                                                "number",
                                                                              className:
                                                                                "form-control",
                                                                              value: B,
                                                                              onChange: function (
                                                                                e
                                                                              ) {
                                                                                return H(
                                                                                  e
                                                                                    .target
                                                                                    .value
                                                                                );
                                                                              },
                                                                            }
                                                                          ),
                                                                        ],
                                                                      }),
                                                                      Object(
                                                                        h.jsxs
                                                                      )("div", {
                                                                        className:
                                                                          "modal-footer",
                                                                        children: [
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "button",
                                                                            {
                                                                              type:
                                                                                "button",
                                                                              className:
                                                                                "btn btn-warning",
                                                                              "data-bs-dismiss":
                                                                                "modal",
                                                                              onClick: function (
                                                                                e
                                                                              ) {
                                                                                return z(
                                                                                  e
                                                                                );
                                                                              },
                                                                              children:
                                                                                "Edit",
                                                                            }
                                                                          ),
                                                                          Object(
                                                                            h.jsx
                                                                          )(
                                                                            "button",
                                                                            {
                                                                              type:
                                                                                "button",
                                                                              className:
                                                                                "btn btn-danger",
                                                                              onClick: function (
                                                                                e
                                                                              ) {
                                                                                return z(
                                                                                  e
                                                                                );
                                                                              },
                                                                              children:
                                                                                "Close",
                                                                            }
                                                                          ),
                                                                        ],
                                                                      }),
                                                                    ],
                                                                  }),
                                                                }),
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      )
                                                    );
                                                  },
                                                },
                                                e.idUnique
                                              );
                                            }),
                                            e.placeholder,
                                          ],
                                        }
                                      )
                                    );
                                  },
                                },
                                u
                              ),
                            }),
                          ],
                        },
                        u
                      );
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        P = n(81),
        I = function () {
          var e = Object(r.useContext)(p),
            t = e.arrFoods,
            n = e.inputProt,
            a = e.inputLip,
            i = e.inputCarb,
            c = function () {
              return 0 == _() ? 0 : Math.round((100 * _() * 4) / F());
            },
            o = function () {
              return 0 == N() ? 0 : Math.round((100 * N() * 9) / F());
            },
            s = function () {
              return 0 == k() ? 0 : Math.round((100 * k() * 4) / F());
            },
            u = {
              datasets: [
                {
                  label: "Macronutrients",
                  data: [c(), o(), s()],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 205, 86, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                },
              ],
            };
          function l() {
            for (var e = 0; e < d().length; e++)
              t[e].foodWeight = t[e].weight_int * f()[e];
          }
          function d() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].n_int_card;
              e.push(r);
            }
            return e;
          }
          function f() {
            for (
              var e = JSON.parse(JSON.stringify(d())), n = 0;
              n < d().length;
              n++
            )
              e[b()[n]] = j() / b().length;
            for (var r = 0; r < d().length; r++) e[m()[r]] = O() / m().length;
            for (var i = 0; i < d().length; i++)
              e[g()[i]] =
                (a -
                  (function () {
                    var e = [],
                      n = JSON.parse(JSON.stringify(d())),
                      r = [],
                      a = "starchyFoods",
                      i = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(a);
                    for (; -1 !== i; )
                      r.push(i),
                        (i = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(a, i + 1));
                    for (var c = 0; c < r.length; c++) n[r[c]] = j() / r.length;
                    var o = [],
                      s = "proteinFoods",
                      u = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(s);
                    for (; -1 !== u; )
                      o.push(u),
                        (u = t
                          .map(function (e) {
                            return e.type;
                          })
                          .indexOf(s, u + 1));
                    for (var l = 0; l < r.length; l++) n[o[l]] = O() / o.length;
                    var f = 0;
                    f = d().length < 1 ? 1 : d().length;
                    for (var h = 0; h < f; h++) {
                      var p = n[h] * v()[h];
                      e.push(p);
                    }
                    return e.reduce(function (e, t) {
                      return e + t;
                    });
                  })()) /
                5 /
                g().length;
            return e;
          }
          function b() {
            for (
              var e = [],
                n = "starchyFoods",
                r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n);
              -1 !== r;

            )
              e.push(r),
                (r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n, r + 1));
            return e;
          }
          function j() {
            return (
              (i -
                (function () {
                  var e = [],
                    t = 0;
                  t = d().length < 1 ? 1 : d().length;
                  for (var n = 0; n < t; n++) {
                    var r = d()[n] * y()[n];
                    e.push(r);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              14
            );
          }
          function m() {
            for (
              var e = [],
                n = "proteinFoods",
                r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n);
              -1 !== r;

            )
              e.push(r),
                (r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n, r + 1));
            return e;
          }
          function g() {
            for (
              var e = [],
                n = "fats",
                r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n);
              -1 !== r;

            )
              e.push(r),
                (r = t
                  .map(function (e) {
                    return e.type;
                  })
                  .indexOf(n, r + 1));
            return e;
          }
          function O() {
            return (
              (n -
                (function () {
                  for (
                    var e = [],
                      n = JSON.parse(JSON.stringify(d())),
                      r = [],
                      a = "starchyFoods",
                      i = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(a);
                    -1 !== i;

                  )
                    r.push(i),
                      (i = t
                        .map(function (e) {
                          return e.type;
                        })
                        .indexOf(a, i + 1));
                  for (var c = 0; c < r.length; c++) n[r[c]] = j() / r.length;
                  var o = 0;
                  o = d().length < 1 ? 1 : d().length;
                  for (var s = 0; s < o; s++) {
                    var u = n[s] * x()[s];
                    e.push(u);
                  }
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                })()) /
              7
            );
          }
          function x() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].prot;
              e.push(r);
            }
            return e;
          }
          function v() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].lip;
              e.push(r);
            }
            return e;
          }
          function y() {
            var e = [];
            if (t.length < 1) return [];
            for (var n = 0; n < t.length; n++) {
              var r = t[n].hc;
              e.push(r);
            }
            return e;
          }
          function _() {
            if (d().length < 1) return 0;
            for (var e = [], n = 0; n < d().length; n++) {
              var r = t[n].prot * f()[n];
              e.push(r);
            }
            return e.reduce(function (e, t) {
              return e + t;
            });
          }
          function N() {
            if (d().length < 1) return 0;
            for (var e = [], n = 0; n < d().length; n++) {
              var r = t[n].lip * f()[n];
              e.push(r);
            }
            return e.reduce(function (e, t) {
              return e + t;
            });
          }
          function k() {
            if (d().length < 1) return 0;
            for (var e = [], n = 0; n < d().length; n++) {
              var r = t[n].hc * f()[n];
              e.push(r);
            }
            return e.reduce(function (e, t) {
              return e + t;
            });
          }
          function F() {
            return 4 * _() + 9 * N() + 4 * k();
          }
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)("div", {
              className: "form-row d-flex p-3",
              children: [
                Object(h.jsxs)("form", {
                  children: [
                    Object(h.jsx)("label", {
                      children: Object(h.jsx)("h2", { children: "Results" }),
                    }),
                    Object(h.jsx)("hr", {}),
                    Object(h.jsxs)("div", {
                      className: "form-row d-flex flex-row",
                      children: [
                        Object(h.jsxs)("div", {
                          className: "col-md-4 mb-4",
                          children: [
                            Object(h.jsx)("label", {
                              children: Object(h.jsx)("h4", {
                                children: "Proteins",
                              }),
                            }),
                            Object(h.jsx)("input", {
                              id: "ouputMacros",
                              className: "form-control w-75 text-center",
                              placeholder: "Protein in g",
                              value: Math.round(_()) + "g / " + c() + "%",
                              onChange: l,
                              style: {
                                backgroundColor: "rgba(255, 99, 132, 1)",
                              },
                            }),
                          ],
                        }),
                        Object(h.jsxs)("div", {
                          className: "col-md-4 mb-4",
                          children: [
                            Object(h.jsx)("label", {
                              children: Object(h.jsx)("h4", {
                                children: "Fats",
                              }),
                            }),
                            Object(h.jsx)("input", {
                              id: "ouputMacros",
                              className: "form-control w-75 text-center",
                              placeholder: "Lipids in g",
                              value: Math.round(N()) + "g / " + o() + "%",
                              onChange: l,
                              style: {
                                backgroundColor: "rgba(255, 205, 86, 1)",
                              },
                            }),
                          ],
                        }),
                        Object(h.jsxs)("div", {
                          className: "col-md-4 mb-4",
                          children: [
                            Object(h.jsx)("label", {
                              children: Object(h.jsx)("h4", {
                                children: "Carbohydrates",
                              }),
                            }),
                            Object(h.jsx)("input", {
                              id: "ouputMacros",
                              className: "form-control w-75 text-center",
                              placeholder: "Carbohydrates in g",
                              value: Math.round(k()) + "g / " + s() + "%",
                              onChange: l,
                              style: {
                                backgroundColor: "rgba(255, 159, 64, 1)",
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "form-row d-flex",
                  children: [
                    Object(h.jsx)("div", {
                      className: "container mt-3 ",
                      children: Object(h.jsx)(P.Doughnut, {
                        data: u,
                        options: {
                          title: { display: !1, text: "Macronutrients" },
                        },
                      }),
                    }),
                    Object(h.jsxs)("div", {
                      children: [
                        Object(h.jsx)("label", {
                          children: Object(h.jsx)("h4", {
                            children: "CALORIES",
                          }),
                        }),
                        Object(h.jsx)("input", {
                          className: "form-control w-75 col-auto kcal",
                          placeholder: "Carbohydrates in g",
                          value: Math.round(F()) + "Kcal",
                          onChange: l,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        D = function () {
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)(k, {}),
              Object(h.jsx)(S, {}),
              Object(h.jsx)(I, {}),
            ],
          });
        },
        M = n(21),
        q = n.n(M),
        J = n(29),
        W = function () {
          var e = Object(r.useState)(""),
            t = Object(s.a)(e, 2),
            n = t[0],
            a = t[1],
            i = (function () {
              var e = Object(J.a)(
                q.a.mark(function e(t) {
                  var r, a;
                  return q.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              (r = { name: n }),
                              (e.next = 5),
                              fetch("/admin", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(r),
                              })
                            );
                          case 5:
                            (a = e.sent),
                              (window.location = "/admin"),
                              console.log(a),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0.message);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("h1", {
                className: "text-center mt-5",
                children: " Food Database",
              }),
              Object(h.jsxs)("form", {
                className: "d-flex mt-5",
                onSubmit: i,
                children: [
                  Object(h.jsx)("input", {
                    type: "text",
                    className: "form-control",
                    value: n,
                    onChange: function (e) {
                      return a(e.target.value);
                    },
                  }),
                  Object(h.jsx)("button", {
                    className: "btn btn-success",
                    children: "Add",
                  }),
                ],
              }),
            ],
          });
        },
        E = function (e) {
          var t = e.food,
            n = Object(r.useState)(t.name),
            a = Object(s.a)(n, 2),
            i = a[0],
            c = a[1],
            o = Object(r.useState)(t.type),
            u = Object(s.a)(o, 2),
            l = u[0],
            d = u[1],
            f = Object(r.useState)(t.weight_int),
            p = Object(s.a)(f, 2),
            b = p[0],
            j = p[1],
            m = Object(r.useState)(t.prot),
            g = Object(s.a)(m, 2),
            O = g[0],
            x = g[1],
            v = Object(r.useState)(t.lip),
            y = Object(s.a)(v, 2),
            _ = y[0],
            N = y[1],
            k = Object(r.useState)(t.hc),
            F = Object(s.a)(k, 2),
            w = F[0],
            C = F[1],
            S = Object(r.useState)(t.n_int_card),
            P = Object(s.a)(S, 2),
            I = P[0],
            D = P[1],
            M = Object(r.useState)(t.img_link),
            W = Object(s.a)(M, 2),
            E = W[0],
            L = W[1],
            U = (function () {
              var e = Object(J.a)(
                q.a.mark(function e(n) {
                  var r;
                  return q.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (e.prev = 1),
                              (r = {
                                name: i,
                                type: l,
                                weight_int: b,
                                prot: O,
                                lip: _,
                                hc: w,
                                n_int_card: I,
                                img_link: E,
                              }),
                              (e.next = 5),
                              fetch("/admin/".concat(t.food_id), {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(r),
                              })
                            );
                          case 5:
                            (window.location = "/admin"), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0.message);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("button", {
                type: "button",
                className: "btn btn-warning",
                "data-bs-toggle": "modal",
                "data-bs-target": "#id".concat(t.food_id),
                children: "Edit",
              }),
              Object(h.jsx)("div", {
                className: "modal fade",
                id: "id".concat(t.food_id),
                tabIndex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: Object(h.jsx)("div", {
                  className: "modal-dialog",
                  children: Object(h.jsxs)("div", {
                    className: "modal-content ",
                    children: [
                      Object(h.jsxs)("div", {
                        className: "modal-header ",
                        children: [
                          Object(h.jsx)("h4", {
                            className: "modal-title text-dark",
                            id: "id".concat(t.food_id),
                            children: "Edit food",
                          }),
                          Object(h.jsx)("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                            onClick: function (e) {
                              return U(e);
                            },
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className: "modal-body",
                        children: [
                          Object(h.jsx)("h5", {
                            className: "d-flex justify-content-start text-dark",
                            children: "Name",
                          }),
                          Object(h.jsx)("input", {
                            type: "text",
                            className: "form-control",
                            value: i,
                            onChange: function (e) {
                              return c(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "Type",
                          }),
                          Object(h.jsx)("input", {
                            type: "text",
                            className: "form-control",
                            value: l,
                            onChange: function (e) {
                              return d(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "weight_int",
                          }),
                          Object(h.jsx)("input", {
                            type: "number",
                            className: "form-control",
                            value: b,
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "Prot",
                          }),
                          Object(h.jsx)("input", {
                            type: "number",
                            className: "form-control",
                            value: O,
                            onChange: function (e) {
                              return x(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "Lip",
                          }),
                          Object(h.jsx)("input", {
                            type: "number",
                            className: "form-control",
                            value: _,
                            onChange: function (e) {
                              return N(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "Hc",
                          }),
                          Object(h.jsx)("input", {
                            type: "number",
                            className: "form-control",
                            value: w,
                            onChange: function (e) {
                              return C(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "N_int_card",
                          }),
                          Object(h.jsx)("input", {
                            type: "number",
                            className: "form-control",
                            value: I,
                            onChange: function (e) {
                              return D(e.target.value);
                            },
                          }),
                          Object(h.jsx)("h5", {
                            className:
                              "d-flex justify-content-start mt-3 text-dark",
                            children: "Img_link",
                          }),
                          Object(h.jsx)("input", {
                            type: "text",
                            className: "form-control",
                            value: E,
                            onChange: function (e) {
                              return L(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className: "modal-footer",
                        children: [
                          Object(h.jsx)("button", {
                            type: "button",
                            className: "btn btn-warning",
                            "data-bs-dismiss": "modal",
                            onClick: function (e) {
                              return U(e);
                            },
                            children: "Edit",
                          }),
                          Object(h.jsx)("button", {
                            type: "button",
                            className: "btn btn-danger",
                            onClick: function (e) {
                              return U(e);
                            },
                            children: "Close",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        L = function () {
          var e = Object(r.useState)([]),
            t = Object(s.a)(e, 2),
            n = t[0],
            a = t[1],
            i = (function () {
              var e = Object(J.a)(
                q.a.mark(function e(t) {
                  var r;
                  return q.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("/admin/".concat(t), { method: "DELETE" })
                            );
                          case 3:
                            (r = e.sent),
                              a(
                                n.filter(function (e) {
                                  return e.food_id !== t;
                                })
                              ),
                              console.log(r),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0.message);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            c = (function () {
              var e = Object(J.a)(
                q.a.mark(function e() {
                  var t, n;
                  return q.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), fetch("/admin");
                          case 3:
                            return (t = e.sent), (e.next = 6), t.json();
                          case 6:
                            (n = e.sent), a(n), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0.message);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(function () {
              c();
            }, []),
            Object(h.jsx)(h.Fragment, {
              children: Object(h.jsxs)("table", {
                style: { backgroundColor: "white" },
                className: "table mt-5 text-center",
                children: [
                  Object(h.jsx)("thead", {
                    children: Object(h.jsxs)("tr", {
                      children: [
                        Object(h.jsx)("th", { scope: "col", children: "Name" }),
                        Object(h.jsx)("th", { scope: "col", children: "Type" }),
                        Object(h.jsx)("th", {
                          scope: "col",
                          children: "Weight_Int",
                        }),
                        Object(h.jsx)("th", { scope: "col", children: "Prot" }),
                        Object(h.jsx)("th", { scope: "col", children: "Lip" }),
                        Object(h.jsx)("th", { scope: "col", children: "Hc" }),
                        Object(h.jsx)("th", {
                          scope: "col",
                          children: "N_int_card",
                        }),
                        Object(h.jsx)("th", {
                          scope: "col",
                          children: "Img_link",
                        }),
                        Object(h.jsx)("th", { scope: "col", children: "Edit" }),
                        Object(h.jsx)("th", {
                          scope: "col",
                          children: "Delete",
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)("tbody", {
                    children: n.map(function (e) {
                      return Object(h.jsxs)(
                        "tr",
                        {
                          children: [
                            Object(h.jsx)("td", { children: e.name }),
                            Object(h.jsx)("td", { children: e.type }),
                            Object(h.jsx)("td", { children: e.weight_int }),
                            Object(h.jsx)("td", { children: e.prot }),
                            Object(h.jsx)("td", { children: e.lip }),
                            Object(h.jsx)("td", { children: e.hc }),
                            Object(h.jsx)("td", { children: e.n_int_card }),
                            Object(h.jsx)("td", { children: e.img_link }),
                            Object(h.jsx)("td", {
                              children: Object(h.jsx)(E, { food: e }),
                            }),
                            Object(h.jsx)("td", {
                              children: Object(h.jsx)("button", {
                                className: "btn btn-danger",
                                onClick: function () {
                                  return i(e.food_id);
                                },
                                children: "Delete",
                              }),
                            }),
                          ],
                        },
                        e.food_id
                      );
                    }),
                  }),
                ],
              }),
            })
          );
        },
        U = function () {
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)(y, {}),
              Object(h.jsx)(W, {}),
              Object(h.jsx)(L, {}),
            ],
          });
        },
        R = function () {
          var e = Object(l.f)(),
            t = Object(r.useState)(""),
            n = Object(s.a)(t, 2),
            a = n[0],
            i = n[1],
            c = Object(r.useState)(""),
            o = Object(s.a)(c, 2),
            u = o[0],
            d = o[1],
            f = Object(r.useState)(null),
            p = Object(s.a)(f, 2),
            b = p[0],
            j = p[1];
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(y, {}),
              Object(h.jsxs)("div", {
                className: "container text-center mt-5",
                children: [
                  Object(h.jsx)("h1", {
                    children: "Welcome to Free Nutrition Planner . O R G",
                  }),
                  Object(h.jsx)("h2", {
                    children:
                      "Please create an account or login to access the application ",
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "row mt-5",
                children: [
                  Object(h.jsx)("div", { className: "col", children: " " }),
                  Object(h.jsxs)("div", {
                    className: "col",
                    children: [
                      Object(h.jsxs)("form", {
                        onSubmit: function (t) {
                          t.preventDefault(),
                            v
                              .createUserWithEmailAndPassword(a, u)
                              .then(function (t) {
                                e.push("/");
                              })
                              .catch(function (e) {
                                "auth/invalid-email" === e.code &&
                                  j("bad email format"),
                                  "auth/weak-password" === e.code &&
                                    j("password must be 6 characters or more");
                              });
                        },
                        className: "form-group",
                        children: [
                          Object(h.jsx)("label", { children: "Email address" }),
                          Object(h.jsx)("input", {
                            onChange: function (e) {
                              i(e.target.value);
                            },
                            className: "form-control",
                            placeholder: "Enter email",
                            type: "text",
                          }),
                          Object(h.jsx)("label", { children: "Password" }),
                          Object(h.jsx)("input", {
                            onChange: function (e) {
                              d(e.target.value);
                            },
                            className: "form-control",
                            placeholder: "Enter password",
                            type: "password",
                          }),
                          Object(h.jsx)("input", {
                            className: "btn btn-dark btn-block mt-4",
                            value: "Create Account",
                            type: "submit",
                          }),
                        ],
                      }),
                      null != b
                        ? Object(h.jsx)("div", {
                            className: "alert alert-danger",
                            children: b,
                          })
                        : Object(h.jsx)("span", {}),
                      Object(h.jsx)("button", {
                        onClick: function () {
                          v.signInWithEmailAndPassword(a, u)
                            .then(function (t) {
                              e.push("/");
                            })
                            .catch(function (e) {
                              "auth/wrong-password" === e.code &&
                                j("bad email format");
                            });
                        },
                        className: "btn btn-success btn-block mt-4",
                        children: "Login",
                      }),
                    ],
                  }),
                  Object(h.jsx)("div", { className: "col" }),
                ],
              }),
            ],
          });
        },
        K = [
          {
            food_id: 0,
            name: "letucce",
            type: "veggies",
            weight_int: 150,
            prot: 2.1,
            lip: 0.6,
            hc: 2.6,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/veggies/lettuce.png",
          },
          {
            food_id: 1,
            name: "tomato",
            type: "veggies",
            weight_int: 150,
            prot: 1.4,
            lip: 0.2,
            hc: 5.3,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/veggies/rsz_tomato.png",
          },
          {
            food_id: 2,
            name: "carrot",
            type: "veggies",
            weight_int: 100,
            prot: 0.8,
            lip: 0.3,
            hc: 7,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/veggies/carrot.png",
          },
          {
            food_id: 3,
            name: "broccoli",
            type: "veggies",
            weight_int: 150,
            prot: 4.5,
            lip: 0.6,
            hc: 3.6,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/veggies/broccoli_8.png",
          },
          {
            food_id: 4,
            name: "Oats",
            type: "starchyFoods",
            weight_int: 14,
            prot: 3.32,
            lip: 1.66,
            hc: 14,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/starchyFoods/oats.png",
          },
          {
            food_id: 5,
            name: "rice",
            type: "starchyFoods",
            weight_int: 20,
            prot: 1.66,
            lip: 0.49,
            hc: 14,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/starchyFoods/rice_whole.png",
          },
          {
            food_id: 6,
            name: "potato",
            type: "starchyFoods",
            weight_int: 92,
            prot: 2.03,
            lip: 0.18,
            hc: 14,
            n_int_card: 0,
            img_link:
              "./assets/imagesFoodDatabase/starchyFoods/potato_2147541_640.png",
          },
          {
            food_id: 7,
            name: "lentils",
            type: "starchyFoods",
            weight_int: 39,
            prot: 9.33,
            lip: 0.74,
            hc: 14,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/starchyFoods/lentils.png",
          },
          {
            food_id: 8,
            name: "chickpeas",
            type: "starchyFoods",
            weight_int: 29,
            prot: 5.48,
            lip: 1.8,
            hc: 14,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/starchyFoods/lentils.png",
          },
          {
            food_id: 9,
            name: "tofu",
            type: "proteinFoods",
            weight_int: 89,
            prot: 7,
            lip: 12.41,
            hc: 1.15,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/proteinFoods/tofu.png",
          },
          {
            food_id: 10,
            name: "egg",
            type: "proteinFoods",
            weight_int: 56,
            prot: 7,
            lip: 9.5,
            hc: 0.45,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/proteinFoods/egg.png",
          },
          {
            food_id: 11,
            name: "egg white",
            type: "proteinFoods",
            weight_int: 64,
            prot: 7,
            lip: 0.06,
            hc: 0.32,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/proteinFoods/eggWhite.png",
          },
          {
            food_id: 12,
            name: "yolk",
            type: "proteinFoods",
            weight_int: 44,
            prot: 7,
            lip: 11.71,
            hc: 0.22,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/proteinFoods/eggYolk.png",
          },
          {
            food_id: 13,
            name: "hake",
            type: "proteinFoods",
            weight_int: 39,
            prot: 7,
            lip: 0.47,
            hc: 0.19,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/proteinFoods/hake.png",
          },
          {
            food_id: 14,
            name: "chicken breast",
            type: "proteinFoods",
            weight_int: 30,
            prot: 7,
            lip: 0.79,
            hc: 0,
            n_int_card: 0,
            img_link:
              "./assets/imagesFoodDatabase/proteinFoods/chickenBreast.png",
          },
          {
            food_id: 15,
            name: "almonds",
            type: "nuts",
            weight_int: 8,
            prot: 1.5,
            lip: 4.3,
            hc: 0.5,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/nuts/almond_PNG38.png",
          },
          {
            food_id: 16,
            name: "pipes",
            type: "nuts",
            weight_int: 8,
            prot: 1.84,
            lip: 3.92,
            hc: 0.96,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/nuts/seeds_pumpkin.png",
          },
          {
            food_id: 17,
            name: "oil",
            type: "fats",
            weight_int: 5,
            prot: 0,
            lip: 5,
            hc: 0,
            n_int_card: 0,
            img_link: "./assets/imagesFoodDatabase/fats/oil.png",
          },
          {
            food_id: 18,
            name: "banana",
            type: "fruits",
            weight_int: 80,
            prot: 0.9,
            lip: 0.2,
            hc: 16.9,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/fruits/banana_PNG842.png",
          },
          {
            food_id: 19,
            name: "orange",
            type: "fruits",
            weight_int: 200,
            prot: 2,
            lip: 0.2,
            hc: 16.4,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/fruits/orange.png",
          },
          {
            food_id: 20,
            name: "apple",
            type: "fruits",
            weight_int: 120,
            prot: 0.4,
            lip: 0.4,
            hc: 14,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/fruits/apple_K.png",
          },
          {
            food_id: 21,
            name: "soya drink",
            type: "dairyProducts",
            weight_int: 250,
            prot: 7.8,
            lip: 4.3,
            hc: 1.5,
            n_int_card: 1,
            img_link: "./assets/imagesFoodDatabase/dairyProducts/soy_milk.png",
          },
          {
            food_id: 22,
            name: "textured soya",
            type: "proteinFoods",
            weight_int: 14,
            prot: 7,
            lip: 0.18,
            hc: 2.75,
            n_int_card: 0,
            img_link:
              "./assets/imagesFoodDatabase/proteinFoods/texturedSoya.png",
          },
        ];
      var A = function () {
        var e,
          t = Object(r.useState)(!1),
          n = Object(s.a)(t, 2),
          a = n[0],
          i = n[1],
          c = Object(r.useState)(!0),
          d = Object(s.a)(c, 2),
          b = d[0],
          j = d[1],
          m = Object(r.useState)("stateItemEdit"),
          g = Object(s.a)(m, 2),
          O = g[0],
          x = g[1],
          v = Object(r.useState)([]),
          y = Object(s.a)(v, 2),
          _ = y[0],
          N = y[1],
          k = Object(r.useState)(75),
          F = Object(s.a)(k, 2),
          w = F[0],
          C = F[1],
          S = Object(r.useState)(78),
          P = Object(s.a)(S, 2),
          I = P[0],
          M = P[1],
          q = Object(r.useState)(250),
          J = Object(s.a)(q, 2),
          W = J[0],
          E = J[1],
          L = Object(r.useState)(15),
          A = Object(s.a)(L, 2),
          G = A[0],
          T = A[1],
          B = Object(r.useState)(35),
          H = Object(s.a)(B, 2),
          z = H[0],
          Q = H[1],
          Y = Object(r.useState)(50),
          Z = Object(s.a)(Y, 2),
          V = Z[0],
          X = Z[1],
          $ = Object(r.useState)(
            ((e = {}),
            Object(o.a)(e, f()(), { name: "Breakfast", items: [] }),
            Object(o.a)(e, f()(), { name: "Lunch", items: [] }),
            Object(o.a)(e, f()(), { name: "Dinner", items: [] }),
            e)
          ),
          ee = Object(s.a)($, 2),
          te = ee[0],
          ne = ee[1],
          re = Object(r.useState)([]),
          ae = Object(s.a)(re, 2),
          ie = ae[0],
          ce = ae[1];
        return (
          Object(r.useEffect)(function () {
            ce(K);
          }, []),
          Object(h.jsx)(p.Provider, {
            value: {
              arrFoods: _,
              setArrFoods: N,
              inputProt: w,
              setInputProt: C,
              inputLip: I,
              setInputLip: M,
              inputCarb: W,
              setInputCarb: E,
              inputProtPerc: G,
              setInputProtPerc: T,
              inputLipPerc: z,
              setInputLipPerc: Q,
              inputCarbPerc: V,
              setInputCarbPerc: X,
              columns: te,
              setColumns: ne,
              foodDatabase: ie,
              setFoodDatabase: ce,
              showSnack: a,
              setShowSnack: i,
              isReqGrams: b,
              setIsReqGrams: j,
              itemEdit: O,
              setItemEdit: x,
            },
            children: Object(h.jsx)("div", {
              className: "container",
              children: Object(h.jsx)(u.a, {
                children: Object(h.jsxs)(l.c, {
                  children: [
                    Object(h.jsx)(l.a, { exact: !0, path: "/", component: D }),
                    Object(h.jsx)(l.a, { path: "/admin", component: U }),
                    Object(h.jsx)(l.a, { path: "/login", component: R }),
                  ],
                }),
              }),
            }),
          })
        );
      };
      c.a.render(
        Object(h.jsx)(a.a.StrictMode, { children: Object(h.jsx)(A, {}) }),
        document.getElementById("root")
      );
    },
    88: function (e, t, n) {},
    89: function (e, t, n) {},
  },
  [[196, 1, 3]],
]);
//# sourceMappingURL=main.38c72be6.chunk.js.map
