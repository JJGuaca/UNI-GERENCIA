/* Rainbow v1.2 rainbowco.de | included languages: generic, php */
window.Rainbow = function() {
  function q(a) {
    var b, c = a.getAttribute && a.getAttribute("data-language") || 0;
    if (!c) {
      a = a.attributes;
      for (b = 0; b < a.length; ++b)
        if ("data-language" === a[b].nodeName) return a[b].nodeValue
    }
    return c
  }

  function B(a) {
    var b = q(a) || q(a.parentNode);
    if (!b) {
      var c = /\blang(?:uage)?-(\w+)/;
      (a = a.className.match(c) || a.parentNode.className.match(c)) && (b = a[1])
    }
    return b
  }

  function C(a, b) {
    for (var c in f[d]) {
      c = parseInt(c, 10);
      if (a == c && b == f[d][c] ? 0 : a <= c && b >= f[d][c]) delete f[d][c], delete j[d][c];
      if (a >= c && a < f[d][c] ||
        b > c && b < f[d][c]) return !0
    }
    return !1
  }

  function r(a, b) {
    return '<span class="' + a.replace(/\./g, " ") + (l ? " " + l : "") + '">' + b + "</span>"
  }

  function s(a, b, c, i) {
    if ("undefined" === typeof a || null === a) i();
    else {
      var e = a.exec(c);
      if (e) {
        ++t;
        !b.name && "string" == typeof b.matches[0] && (b.name = b.matches[0], delete b.matches[0]);
        var k = e[0],
          g = e.index,
          u = e[0].length + g,
          h = function() {
            function e() {
              s(a, b, c, i)
            }
            t % 100 > 0 ? e() : setTimeout(e, 0)
          };
        if (C(g, u)) h();
        else {
          var m = v(b.matches),
            l = function(a, c, i) {
              if (a >= c.length) i(k);
              else {
                var d = e[c[a]];
                if (d) {
                  var g =
                    b.matches[c[a]],
                    f = g.language,
                    h = g.name && g.matches ? g.matches : g,
                    j = function(b, d, g) {
                      var f;
                      f = 0;
                      var h;
                      for (h = 1; h < c[a]; ++h) e[h] && (f = f + e[h].length);
                      d = g ? r(g, d) : d;
                      k = k.substr(0, f) + k.substr(f).replace(b, d);
                      l(++a, c, i)
                    };
                  f ? n(d, f, function(a) {
                    j(d, a)
                  }) : typeof g === "string" ? j(d, d, g) : w(d, h.length ? h : [h], function(a) {
                    j(d, a, g.matches ? g.name : 0)
                  })
                } else l(++a, c, i)
              }
            };
          l(0, m, function(a) {
            b.name && (a = r(b.name, a));
            if (!j[d]) {
              j[d] = {};
              f[d] = {}
            }
            j[d][g] = {
              replace: e[0],
              "with": a
            };
            f[d][g] = u;
            h()
          })
        }
      } else i()
    }
  }

  function v(a) {
    var b = [],
      c;
    for (c in a) a.hasOwnProperty(c) &&
      b.push(c);
    return b.sort(function(a, b) {
      return b - a
    })
  }

  function w(a, b, c) {
    function i(b, k) {
      k < b.length ? s(b[k].pattern, b[k], a, function() {
        i(b, ++k)
      }) : D(a, function(a) {
        delete j[d];
        delete f[d];
        --d;
        c(a)
      })
    }++d;
    i(b, 0)
  }

  function D(a, b) {
    function c(a, b, i, f) {
      if (i < b.length) {
        ++x;
        var h = b[i],
          l = j[d][h],
          a = a.substr(0, h) + a.substr(h).replace(l.replace, l["with"]),
          h = function() {
            c(a, b, ++i, f)
          };
        0 < x % 250 ? h() : setTimeout(h, 0)
      } else f(a)
    }
    var i = v(j[d]);
    c(a, i, 0, b)
  }

  function n(a, b, c) {
    var d = m[b] || [],
      e = m[y] || [],
      b = z[b] ? d : d.concat(e);
    w(a.replace(/</g,
      "&lt;").replace(/>/g, "&gt;").replace(/&(?![\w\#]+;)/g, "&amp;"), b, c)
  }

  function o(a, b, c) {
    if (b < a.length) {
      var d = a[b],
        e = B(d);
      return !(-1 < (" " + d.className + " ").indexOf(" rainbow ")) && e ? (e = e.toLowerCase(), d.className += d.className ? " rainbow" : "rainbow", n(d.innerHTML, e, function(k) {
        d.innerHTML = k;
        j = {};
        f = {};
        p && p(d, e);
        setTimeout(function() {
          o(a, ++b, c)
        }, 0)
      })) : o(a, ++b, c)
    }
    c && c()
  }

  function A(a, b) {
    var a = a && "function" == typeof a.getElementsByTagName ? a : document,
      c = a.getElementsByTagName("pre"),
      d = a.getElementsByTagName("code"),
      e, f = [],
      g = [];
    for (e = 0; e < c.length; ++e) c[e].getElementsByTagName("code").length ? c[e].innerHTML = c[e].innerHTML.replace(/^\s+/, "").replace(/\s+$/, "") : f.push(c[e]);
    for (e = 0; e < d.length; ++e) g.push(d[e]);
    o(g.concat(f), 0, b)
  }
  var j = {},
    f = {},
    m = {},
    z = {},
    d = 0,
    y = 0,
    t = 0,
    x = 0,
    l, p;
  return {
    extend: function(a, b, c) {
      1 == arguments.length && (b = a, a = y);
      z[a] = c;
      m[a] = b.concat(m[a] || [])
    },
    b: function(a) {
      p = a
    },
    a: function(a) {
      l = a
    },
    color: function(a, b, c) {
      if ("string" == typeof a) return n(a, b, c);
      if ("function" == typeof a) return A(0, a);
      A(a, b)
    }
  }
}();


document.addEventListener ? document.addEventListener("click", Rainbow.color, !1) : window.attachEvent("onload", Rainbow.color);
// document.addEventListener ? document.addEventListener("dblclick", Rainbow.color, !1) : window.attachEvent("onload", Rainbow.color);


Rainbow.onHighlight = Rainbow.b;
Rainbow.addClass = Rainbow.a;
Rainbow.extend([{
  matches: {
    1: [{
      name: "keyword.operator",
      pattern: /\=|\+/g
    }, {
      name: "keyword.dot",
      pattern: /\./g
    }],
    2: {
      name: "string",
      matches: {
        name: "constant.character.escape",
        pattern: /\\('|"){1}/g
      }
    }
  },
  pattern: /(\(|\s|\[|\=|:|\+|\.|\{)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {
  name: "comment",
  pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm
}, {
  name: "constant.numeric",
  pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
  matches: {
    1: "keyword"
  },
  pattern: /\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi
}, {
  name: "constant.language",
  pattern: /true|false|null/g
}, {
  name: "keyword.operator",
  pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
}, {
  matches: {
    1: "function.call"
  },
  pattern: /(\w+?)(?=\()/g
}, {
  matches: {
    1: "storage.function",
    2: "entity.name.function"
  },
  pattern: /(function)\s(.*?)(?=\()/g
}]);
Rainbow.extend("php", [{
  name: "support",
  pattern: /\becho\b/g
}, {
  matches: {
    1: "variable.dollar-sign",
    2: "variable"
  },
  pattern: /(\$)(\w+)\b/g
}, {
  name: "constant.language",
  pattern: /true|false|null/ig
}, {
  name: "constant",
  pattern: /\b[A-Z0-9_]{2,}\b/g
}, {
  name: "keyword.dot",
  pattern: /\./g
}, {
  name: "keyword",
  pattern: /\b(die|end(for(each)?|switch|if)|case|require(_once)?|include(_once)?)(?=\(|\b)/g
}, {
  matches: {
    1: "keyword",
    2: {
      name: "support.class",
      pattern: /\w+/g
    }
  },
  pattern: /(instanceof)\s([^\$].*?)(\)|;)/g
}, {
  matches: {
    1: "support.function"
  },
  pattern: /\b(array(_key_exists|_merge|_keys|_shift)?|isset|count|empty|unset|printf|is_(array|string|numeric|object)|sprintf|each|date|time|substr|pos|str(len|pos|tolower|_replace|totime)?|ord|trim|in_array|implode|end|preg_match|explode|fmod|define|link|list|get_class|serialize|file|sort|mail|dir|idate|log|intval|header|chr|function_exists|dirname|preg_replace|file_exists)(?=\()/g
}, {
  name: "variable.language.php-tag",
  pattern: /(&lt;\?(php)?|\?&gt;)/g
}, {
  matches: {
    1: "keyword.namespace",
    2: {
      name: "support.namespace",
      pattern: /\w+/g
    }
  },
  pattern: /\b(namespace|use)\s(.*?);/g
}, {
  matches: {
    1: "storage.modifier",
    2: "storage.class",
    3: "entity.name.class",
    4: "storage.modifier.extends",
    5: "entity.other.inherited-class",
    6: "storage.modifier.extends",
    7: "entity.other.inherited-class"
  },
  pattern: /\b(abstract|final)?\s?(class|interface|trait)\s(\w+)(\sextends\s)?([\w\\]*)?(\simplements\s)?([\w\\]*)?\s?\{?(\n|\})/g
}, {
  name: "keyword.static",
  pattern: /self::|static::/g
}, {
  matches: {
    1: "storage.function",
    2: "support.magic"
  },
  pattern: /(function)\s(__.*?)(?=\()/g
}, {
  matches: {
    1: "keyword.new",
    2: {
      name: "support.class",
      pattern: /\w+/g
    }
  },
  pattern: /\b(new)\s([^\$].*?)(?=\)|\(|;)/g
}, {
  matches: {
    1: {
      name: "support.class",
      pattern: /\w+/g
    },
    2: "keyword.static"
  },
  pattern: /([\w\\]*?)(::)(?=\b|\$)/g
}, {
  matches: {
    2: {
      name: "support.class",
      pattern: /\w+/g
    }
  },
  pattern: /(\(|,\s?)([\w\\]*?)(?=\s\$)/g
}]);

