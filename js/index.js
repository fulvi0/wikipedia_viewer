$(document).ready(function(){
  $("#looker").click(function() {
    var searchBox = $("input").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchBox + "&callback=?";
    $.getJSON(
        url,
        function(result){
          var sheets = result;
          for (var x in sheets){
            var html;
            html += "<div class='col-md-8 well'>" + "<h2>" + sheets[1][0] +
              "</h2>" + "<br>" + sheets[x][0] + "</div>"+ "<br>";

            $("#main_page").html(html);
          }
        });
  })
});

