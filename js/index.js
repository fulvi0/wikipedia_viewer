$(document).ready(function() {
  var url = "https://gist.githubusercontent.com/fulvi0/0ee486d83d7c533c844366a19f77dd3d/raw/e7f0e4d0bd784c5ef50c926faa568077b2a438b2/fr_quotes.json";

  var extractor = function(result) {
    $.each(result, function(key, value) {
      $("#main_page").append(value + " ");
    });
  };

  $("#looker").click(function() {
    $.getJSON(url, extractor);
  });
});