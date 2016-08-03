(function() {
  var activityIndicatorOff, activityIndicatorOn, deepJQuery, formatScientificNames, handleSearch, lightboxImages, linkSubmenu, linkoutLabels, overlayOff, overlayOn, p$, tabSelect,
    slice = [].slice;

  window.isBool = function(str) {
    return str === true || str === false;
  };

  window.isEmpty = function(str) {
    return !str || str.length === 0;
  };

  window.isBlank = function(str) {
    return !str || /^\s*$/.test(str);
  };

  window.isNull = function(str) {
    var error;
    try {
      if (isEmpty(str) || isBlank(str) || (str == null)) {
        if (!(str === false || str === 0)) {
          return true;
        }
      }
    } catch (error) {

    }
    return false;
  };

  window.isJson = function(str) {
    var error;
    if (typeof str === 'object') {
      return true;
    }
    try {
      JSON.parse(str);
      return true;
    } catch (error) {

    }
    return false;
  };

  window.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  window.toFloat = function(str) {
    if (!isNumber(str) || isNull(str)) {
      return 0;
    }
    return parseFloat(str);
  };

  window.toInt = function(str) {
    if (!isNumber(str) || isNull(str)) {
      return 0;
    }
    return parseInt(str);
  };

  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
};

  String.prototype.toBool = function() {
    return this.toString() === 'true';
  };

  Boolean.prototype.toBool = function() {
    return this.toString() === 'true';
  };

  Object.size = function(obj) {
    var key, size;
    size = 0;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  };

  window.delay = function(ms, f) {
    return setTimeout(f, ms);
  };

  window.roundNumber = function(number, digits) {
    var multiple;
    if (digits == null) {
      digits = 0;
    }
    multiple = Math.pow(10, digits);
    return Math.round(number * multiple) / multiple;
  };

  jQuery.fn.exists = function() {
    return jQuery(this).length > 0;
  };

  window.byteCount = (function(_this) {
    return function(s) {
      return encodeURI(s).split(/%..|./).length - 1;
    };
  })(this);

  function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

  window.debounce_timer = null;

  window.debounce = function(func, threshold, execAsap) {
    if (threshold == null) {
      threshold = 300;
    }
    if (execAsap == null) {
      execAsap = false;
    }
    return function() {
      var args, delayed, obj;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      obj = this;
      delayed = function() {
        if (!execAsap) {
          return func.apply(obj, args);
        }
      };
      if (window.debounce_timer != null) {
        clearTimeout(window.debounce_timer);
      } else if (execAsap) {
        func.apply(obj, args);
      }
      return window.debounce_timer = setTimeout(delayed, threshold);
    };
  };

  Function.prototype.debounce = function() {
    var args, delayed, e, error, execAsap, func, threshold, timeout;
    threshold = arguments[0], execAsap = arguments[1], timeout = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
    if (threshold == null) {
      threshold = 300;
    }
    if (execAsap == null) {
      execAsap = false;
    }
    if (timeout == null) {
      timeout = window.debounce_timer;
    }
    func = this;
    delayed = function() {
      if (!execAsap) {
        func.apply(func, args);
      }
      return console.log("Debounce applied");
    };
    if (timeout != null) {
      try {
        clearTimeout(timeout);
      } catch (error) {
        e = error;
      }
    } else if (execAsap) {
      func.apply(obj, args);
      console.log("Executed immediately");
    }
    return window.debounce_timer = setTimeout(delayed, threshold);
  };

  window.mapNewWindows = function() {
    return $(".newwindow").each(function() {
      var curHref, openInNewWindow;
      curHref = $(this).attr("href");
      openInNewWindow = function(url) {
        if (url == null) {
          return false;
        }
        window.open(url);
        return false;
      };
      $(this).click(function() {
        return openInNewWindow(curHref);
      });
      return $(this).keypress(function() {
        return openInNewWindow(curHref);
      });
    });
  };

  window.toastStatusMessage = function(message, className, duration, selector) {
    var html;
    if (className == null) {
      className = "error";
    }
    if (duration == null) {
      duration = 3000;
    }
    if (selector == null) {
      selector = "#status-message";
    }
    if (!isNumber(duration)) {
      duration = 3000;
    }
    if (selector.slice(0, 1) === !"#") {
      selector = "#" + selector;
    }
    if (!$(selector).exists()) {
      html = "<paper-toast id=\"" + (selector.slice(1)) + "\" duration=\"" + duration + "\"></paper-toast>";
      $(html).appendTo("body");
    }
    $(selector).attr("text", message);
    $(selector).addClass(className);
    $(selector)[0].show();
    return delay(duration + 500, function() {
      $(selector).empty();
      $(selector).removeClass(className);
      return $(selector).attr("text", "");
    });
  };

  window.animateLoad = function(d, elId) {
    var big, e, error, html, inlineId, offset, offset2, sm_d, small;
    if (d == null) {
      d = 50;
    }
    if (elId == null) {
      elId = "#status-container";
    }
    if (elId.slice(0, 1) !== "#") {
      elId = "#" + elId;
    }
    try {
      if (!$(elId).exists()) {
        inlineId = elId.slice(1);
        html = "<div id='status-container'> <div class='ball stop hide'></div><div class='ball1 stop hide'></div> <br/><p id='status-message'></p> </div>";
        $(html).appendTo("body");
      }
      if ($(elId).exists()) {
        sm_d = roundNumber(d * .5);
        big = $(elId).find('.ball');
        small = $(elId).find('.ball1');
        big.removeClass('stop hide');
        big.css({
          width: d + "px",
          height: d + "px"
        });
        offset = roundNumber(d / 2 + sm_d / 2 + 9);
        offset2 = roundNumber((d + 10) / 2 - (sm_d + 6) / 2);
        small.removeClass('stop hide');
        small.css({
          width: sm_d + "px",
          height: sm_d + "px",
          top: "-" + offset + "px",
          'margin-left': offset2 + "px"
        });
        return true;
      }
      return false;
    } catch (error) {
      e = error;
      return console.error('Could not animate loader', e.message);
    }
  };

  window.stopLoad = function(elId, fadeOut) {
    var big, e, error, small;
    if (elId == null) {
      elId = "#status-container";
    }
    if (fadeOut == null) {
      fadeOut = 500;
    }
    if (elId.slice(0, 1) !== "#") {
      elId = "#" + elId;
    }
    try {
      if ($(elId).exists()) {
        big = $(elId).find('.ball');
        small = $(elId).find('.ball1');
        big.addClass('bballgood ballgood');
        small.addClass('bballgood ball1good');
        return delay(fadeOut, function() {
          big.addClass('stop hide');
          big.removeClass('bballgood ballgood');
          small.addClass('stop hide');
          return small.removeClass('bballgood ball1good');
        });
      }
    } catch (error) {
      e = error;
      return console.error('Could not stop load animation', e.message);
    }
  };

  window.stopLoadError = function(message, elId, fadeOut) {
    var big, e, error, small;
    if (elId == null) {
      elId = "#status-container";
    }
    if (fadeOut == null) {
      fadeOut = 1500;
    }
    if (elId.slice(0, 1) !== "#") {
      elId = "#" + elId;
    }
    try {
      if ($(elId).exists()) {
        big = $(elId).find('.ball');
        small = $(elId).find('.ball1');
        big.addClass('bballerror ballerror');
        small.addClass('bballerror ball1error');
        delay(fadeOut, function() {
          big.addClass('stop hide');
          big.removeClass('bballerror ballerror');
          small.addClass('stop hide');
          return small.removeClass('bballerror ball1error');
        });
        if (message != null) {
          return toastStatusMessage(message);
        }
      }
    } catch (error) {
      e = error;
      return console.error('Could not stop load error animation', e.message);
    }
  };

  window.openLink = function(url) {
    if (url == null) {
      return false;
    }
    window.open(url);
    return false;
  };

  window.openTab = function(url) {
    return openLink(url);
  };

  window.goTo = function(url) {
    if (url == null) {
      return false;
    }
    window.location.href = url;
    return false;
  };

  window.loadJS = function(src, callback, doCallbackOnError) {
    var e, error, errorFunction, onLoadFunction, s;
    if (callback == null) {
      callback = new Object();
    }
    if (doCallbackOnError == null) {
      doCallbackOnError = true;
    }

    /*
     * Load a new javascript file
     *
     * If it's already been loaded, jump straight to the callback
     *
     * @param string src The source URL of the file
     * @param function callback Function to execute after the script has
     *                          been loaded
     * @param bool doCallbackOnError Should the callback be executed if
     *                               loading the script produces an error?
     */
    if ($("script[src='" + src + "']").exists()) {
      if (typeof callback === "function") {
        try {
          callback();
        } catch (error) {
          e = error;
          console.error("Script is already loaded, but there was an error executing the callback function - " + e.message);
        }
      }
      return true;
    }
    s = document.createElement("script");
    s.setAttribute("src", src);
    s.setAttribute("async", "async");
    s.setAttribute("type", "text/javascript");
    s.src = src;
    s.async = true;
    onLoadFunction = function() {
      var error1, error2, state;
      state = s.readyState;
      try {
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
          callback.done = true;
          if (typeof callback === "function") {
            try {
              return callback();
            } catch (error1) {
              e = error1;
              console.error("Postload callback error for " + src + " - " + e.message);
              return console.warn(e.stack);
            }
          }
        }
      } catch (error2) {
        e = error2;
        return console.error("Onload error - " + e.message);
      }
    };
    errorFunction = function() {
      var error1, error2;
      console.warn("There may have been a problem loading " + src);
      try {
        if (!callback.done) {
          callback.done = true;
          if (typeof callback === "function" && doCallbackOnError) {
            try {
              return callback();
            } catch (error1) {
              e = error1;
              return console.error("Post error callback error - " + e.message);
            }
          }
        }
      } catch (error2) {
        e = error2;
        return console.error("There was an error in the error handler! " + e.message);
      }
    };
    s.setAttribute("onload", onLoadFunction);
    s.setAttribute("onreadystate", onLoadFunction);
    s.setAttribute("onerror", errorFunction);
    s.onload = s.onreadystate = onLoadFunction;
    s.onerror = errorFunction;
    document.getElementsByTagName('head')[0].appendChild(s);
    return true;
  };

  deepJQuery = function(selector) {

    /*
     * Do a shadow-piercing selector
     *
     * Cross-browser, works with Chrome, Firefox, Opera, Safari, and IE
     * Falls back to standard jQuery selector when everything fails.
     */
    var e, error, error1;
    try {
      if (!$("html /deep/ " + selector).exists()) {
        throw "Bad /deep/ selector";
      }
      return $("html /deep/ " + selector);
    } catch (error) {
      e = error;
      try {
        if (!$("html >>> " + selector).exists()) {
          throw "Bad >>> selector";
        }
        return $("html >>> " + selector);
      } catch (error1) {
        e = error1;
        return $(selector);
      }
    }
  };

  p$ = function(selector) {
    var error;
    try {
      return $$(selector)[0];
    } catch (error) {
      return $(selector).get(0);
    }
  };

  window.d$ = function(selector) {
    return deepJQuery(selector);
  };

  $(function() {
    var e, error;
    try {
      window.picturefill();
    } catch (error) {
      e = error;
      console.log("Could not execute picturefill.");
    }
    return mapNewWindows();
  });

  tabSelect = function(currentPath) {
    var e, error, i, index, len, ref, ref1, tab, thisCollection;
    if (currentPath == null) {
      currentPath = window.currentPagePath;
    }
    index = 0;
    ref = $("nav paper-tabs paper-tab");
    for (i = 0, len = ref.length; i < len; i++) {
      tab = ref[i];
      console.log("Tab iteration");
      try {
        thisCollection = (ref1 = $(tab).attr("data-label")) != null ? ref1 : "NO_LABEL";
        console.log("Search " + currentPath + " for " + thisCollection, currentPath.search(thisCollection));
        if (currentPath.search(thisCollection) !== -1) {
          console.info("We're in collection " + thisCollection);
          p$("nav paper-tabs").selected = index;
          break;
        }
      } catch (error) {
        e = error;
        console.warn("Couldn't check - " + e.message);
      }
      ++index;
    }
    return false;
  };

  window.tabSelect = tabSelect;

  linkSubmenu = function() {
    return false;
  };

  lightboxImages = function(selector) {
    var options;
    if (selector == null) {
      selector = "#content a";
    }
    options = {
      onStart: function() {
        return overlayOn();
      },
      onEnd: function() {
        overlayOff();
        return activityIndicatorOff();
      },
      onLoadStart: function() {
        return activityIndicatorOn();
      },
      onLoadEnd: function() {
        return activityIndicatorOff();
      },
      allowedTypes: 'png|jpg|jpeg|gif'
    };

    /*
    $(selector).has("img").each ->
      if not $(this).attr("nolightbox")?
        $(this).imageLightbox(options)
     */
    return $(selector).imageLightbox(options);
  };

  activityIndicatorOn = function() {
    return $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
  };

  activityIndicatorOff = function() {
    return $('#imagelightbox-loading').remove();
  };

  overlayOn = function() {
    return $('<div id="imagelightbox-overlay"></div>').appendTo('body');
  };

  overlayOff = function() {
    return $('#imagelightbox-overlay').remove();
  };

  formatScientificNames = function(selector) {
    if (selector == null) {
      selector = ".sciname";
    }
    return $(".sciname").each(function() {
      var nameStyle;
      nameStyle = $(this).css("font-style") === "italic" ? "normal" : "italic";
      return $(this).css("font-style", nameStyle);
    });
  };

  linkoutLabels = function() {
    $("a").each(function() {
      var href;
      return href = $(this).attr("href");
    });
    return false;
  };

  handleSearch = function() {
    var searchConfig;
    searchConfig = {
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: "https://arctosdb.github.io/documentation-wiki/search.json",
      fuzzy: true
    };
    SimpleJekyllSearch(searchConfig);
    return false;
  };

  $(function() {
    var checkToc;
    tabSelect();
    $("#searchsubmit").click(function() {
      return $("#sidebar-search-form").submit();
    });
    $("#s").keyup(function(e) {
      var code;
      code = e.keyCode || e.which;
      if (code === 13) {
        return $("#sidebar-search-form").submit();
      }
    });
    $("#sidebar-search-form").submit(function(e) {
      var searchQuery, url;
      e.preventDefault();
      url = $("#sidebar-search-form").attr("action");
      searchQuery = encodeURIComponent($("#s").val());
      url = url + "?s=" + searchQuery;
      return goTo(url);
    });
    $("#searchsubmit-arctos").click(function() {
      return $("#arctos-search-form").submit();
    });
    $("#search-input").keyup(function(e) {
      var code;
      code = e.keyCode || e.which;
      if (code === 13) {
        return handleSearch();
      }
    });
    $("#arctos-search-form").submit(function(e) {
      var searchQuery, url;
      e.preventDefault();
      url = $("#arctos-search-form").attr("action");
      searchQuery = encodeURIComponent($("#arctos-search").val());
      url = url + "?scientific_name=" + searchQuery;
      return openLink(url);
    });
    lightboxImages();
    if ($("nav#toc").exists()) {
      return (checkToc = function() {
        var $headings, $topContext, error, opts, topLevel;
        try {
          if (Polymer.RenderStatus.hasRendered()) {
            if (!($("nav#toc li").length > 0)) {
              if (typeof Toc !== "undefined" && Toc !== null) {
                Toc.init($("#toc"), $("main"));
                if (!($("nav#toc li").length > 0)) {
                  $("nav#toc ul").remove();
                  console.info("Manually populating the TOC");
                  opts = Toc.helpers.parseOps($("#toc"));
                  opts.$scope = $("body");
                  opts.$nav.attr('data-toggle', 'toc');
                  $topContext = Toc.helpers.createChildNavList(opts.$nav);
                  topLevel = Toc.helpers.getTopLevel(opts.$scope);
                  $headings = Toc.helpers.getHeadings(opts.$scope, topLevel);
                  Toc.helpers.populateNav($topContext, topLevel, $headings);
                }
                return $("body").scrollspy({
                  target: "#toc"
                });
              }
            }
          } else {
            console.warn("Waiting for Polymer.RenderStatus to report ready before building TOC");
            return delay(100, function() {
              return checkToc();
            });
          }
        } catch (error) {
          if (typeof Polymer === "undefined" || Polymer === null) {
            return delay(100, function() {
              return checkToc();
            });
          }
        }
      })();
    }
  });

}).call(this);

//# sourceMappingURL=../coffee/maps/c.js.map
