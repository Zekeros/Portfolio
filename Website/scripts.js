$(document).ready(function() {

  $(".proList").click(function() {
    $(".pro1").slideToggle(400, function() {
      $(".pro2").slideToggle(400, function() {
        $(".pro3").slideToggle(400, function() {
          $(".pro4").slideToggle(400, function() {
          });
        });
      });
    });
  });

  $("#mainBar").fadeIn("slow", function() {
    $("#projects").fadeIn("slow", function() {
      $("#footer").fadeIn("slow", function() {

      });
    });
  });


 // Bounce Hover Box
  $(".pro1").hover(function() {
    $(".projectTitle").text("B O U N C E");
  }, function() {
    $(".projectTitle").empty();
  });

  // Snow Hover Box
  $(".pro2").hover(function() {
    $(".projectTitle").text("S N O W");
  }, function() {
    $(".projectTitle").empty();
  });

});
