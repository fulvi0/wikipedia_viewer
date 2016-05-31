$(document).ready(function() {
  var searchBox = '';
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Main+Page&generator=search&gsrsearch=" + searchBox + "&callback=?";

  var extractor = function(result) {
    $.each(result, function(key, value) {
      $("#main_page").append(value + " ");
    });
  };

  $("#looker").click(function() {
    $.getJSON(url, extractor);
  });
});
