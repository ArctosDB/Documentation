# File for wordpress-specific coffeescript wrappers

tabSelect = (currentPath = window.currentPagePath) ->
  index = 0
  for tab in $("nav paper-tabs paper-tab")
    console.log "Tab iteration"
    try
      thisCollection = $(tab).attr("data-label") ? "NO_LABEL"
      console.log "Search #{currentPath} for #{thisCollection}", currentPath.search(thisCollection)
      if currentPath.search(thisCollection) isnt -1
        console.info "We're in collection #{thisCollection}"
        p$("nav paper-tabs").selected = index
        break
    catch e
      console.warn "Couldn't check - #{e.message}"
    ++index
  false

window.tabSelect = tabSelect

linkSubmenu = ->
  # Placeholder, as yet unused, function.
  false

lightboxImages = (selector = "#content a") ->
  options =
      onStart: ->
        overlayOn()
      onEnd: ->
        overlayOff()
        activityIndicatorOff()
      onLoadStart: ->
        activityIndicatorOn()
      onLoadEnd: ->
        activityIndicatorOff()
      allowedTypes: 'png|jpg|jpeg|gif'
  ###
  $(selector).has("img").each ->
    if not $(this).attr("nolightbox")?
      $(this).imageLightbox(options)
  ###
  # Until these narrower selectors work, let's use this
  $(selector).imageLightbox(options)

activityIndicatorOn = ->
  $('<div id="imagelightbox-loading"><div></div></div>' ).appendTo('body')
activityIndicatorOff = ->
  $('#imagelightbox-loading').remove()
overlayOn = ->
  $('<div id="imagelightbox-overlay"></div>').appendTo('body')
overlayOff = ->
  $('#imagelightbox-overlay').remove()

formatScientificNames = (selector = ".sciname") ->
    $(".sciname").each ->
      # Is it italic?
      nameStyle = if $(this).css("font-style") is "italic" then "normal" else "italic"
      $(this).css("font-style",nameStyle)

linkoutLabels = ->
  # Add a linkout icon to all anchors that point to a different domain
  $("a").each ->
    href = $(this).attr("href")

  false


unless _arctos?
  _arctos = new Object()

handleSearch = (prepOnly = false) ->
  ###
  # Do a Jekyll site search
  #
  # Based on
  # https://github.com/christian-fei/Simple-Jekyll-Search#configuration
  #
  # Caches a search result so we don't constantly have to do a server ping
  ###
  startTime = Date.now()
  search = $("#search-input").val()
  if isNull search
    $("#results-container").html ""
  # Set up the search helper function
  doSearch = ->
    if isNull search
      $("#results-container").html ""
      elapsed = Date.now() - startTime
      console.log "Blank search container"
      return false
    searchConfig =
      searchInput: document.getElementById('search-input')
      resultsContainer: document.getElementById('results-container')
      json: _arctos.searchObject
      searchResultTemplate: "<li><a href='{url}'>{title}</a></li>"
      fuzzy: false
      noResultsText: "<strong><em>Sorry, no results found matching '#{search}'</em></strong>"
    SimpleJekyllSearch searchConfig
    elapsed = Date.now() - startTime
    console.log "Search completed in #{elapsed}ms"
  # Get the search object
  if isNull _arctos.searchObject
    $.getJSON "https://arctosdb.github.io/documentation-wiki/search.json"
    .done (jsonResult) ->
      console.info "Search pinged back result", jsonResult
      _arctos.searchObject = new Array()
      uniqueUrls = new Array()
      for result in jsonResult
        if result.url in uniqueUrls
          console.info "Removing duplicate url '#{result.url}'"
          continue
        uniqueUrls.push result.url
        _arctos.searchObject.push result
      # In an hour, invalidate these results
      hourToMs = 3600 * 1000
      delay hourToMs, ->
        console.info "Invalidating stale search result object"
        delete _arctos.searchObject
      elapsed = Date.now() - startTime
      if prepOnly
        console.log "Search results prepped in #{elapsed}ms"
        window.so = _arctos.searchObject
      console.info "It took #{elapsed}ms to fetch the search items"
      doSearch()
    .error (result, error) ->
      console.error "Couldn't do search: #{error}"
      console.warn result
      $("#results-container").html "<p>There was an error getting your search results. Please try again later.</p>"
  else
    # We already have the search object, do the search
    if prepOnly
      console.warn "Not doing prep -- we already have a search object"
    console.log "Searching for '#{search}' in the saved search object"
    doSearch()
  false

$ ->
  # Local searching
  tabSelect()
  $("#searchsubmit").click ->
    $("#sidebar-search-form").submit()
  $("#s").keyup (e) ->
    code = e.keyCode || e.which
    if code is 13 then $("#sidebar-search-form").submit()
  $("#sidebar-search-form").submit (e) ->
    e.preventDefault()
    url = $("#sidebar-search-form").attr("action")
    searchQuery = encodeURIComponent($("#s").val())
    url = "#{url}?s=#{searchQuery}"
    goTo(url)
  # Arctos Searching
  $("#searchsubmit-arctos").click ->
    $("#arctos-search-form").submit()
  $("#search-input").keyup (e) ->
    code = e.keyCode || e.which
    # if code is 13 then handleSearch() else handleSearch.debounce()
    handleSearch()
  $("#arctos-search-form").submit (e) ->
    e.preventDefault()
    url = $("#arctos-search-form").attr("action")
    searchQuery = encodeURIComponent($("#arctos-search").val())
    url = "#{url}?scientific_name=#{searchQuery}"
    openLink(url)
  #FixedSticky.tests.sticky = false
  #$(".fixedsticky").fixedsticky()
  handleSearch(true)
  lightboxImages()
  if $("nav#toc").exists()
    do checkToc = ->
      try
        if Polymer.RenderStatus.hasRendered()
          unless $("nav#toc li").length > 0
            if Toc?
              Toc.init $("#toc"), $("main")
              unless $("nav#toc li").length > 0
                $("nav#toc ul").remove()
                console.info "Manually populating the TOC"
                # Manually make the TOC for firefox and other dumb browsers
                opts = Toc.helpers.parseOps($("#toc"))
                opts.$scope = $("body")
                opts.$nav.attr('data-toggle', 'toc')
                $topContext = Toc.helpers.createChildNavList(opts.$nav)
                topLevel = Toc.helpers.getTopLevel(opts.$scope)
                $headings = Toc.helpers.getHeadings(opts.$scope, topLevel)
                Toc.helpers.populateNav($topContext, topLevel, $headings)
              $("body").scrollspy {target: "#toc"}
        else
          console.warn "Waiting for Polymer.RenderStatus to report ready before building TOC"
          delay 100, ->
            checkToc()
      catch
        if not Polymer?
          # Polymer polyfills haven't finished yet
          delay 100, ->
            checkToc()
