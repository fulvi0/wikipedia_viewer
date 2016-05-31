$(document).ready(function(){
  $("#looker").click(function() {
    var searchBox = $("input").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchBox + "&callback=?";
    $.getJSON(
        url,
        function(result){
          var html;

          for(var x = 1; x < result.length; x++){
            html += "<div class='col-md-8 well'>" + "<h2>" + result[x][0] +
              "</h2>" + "<br>" + result[1][0] + "</div>"+ "<br>";
          }
          $("#main_page").html(html);
        });
  })
});

