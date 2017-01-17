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
// Sets content box to hidden
  $("#content").fadeOut('fast', function() {

  });
 // Bounce Hover Box
  $(".pro1").hover(function() {
    // $("#content").css('background-image', 'url("Website\assets\bounce.gif")');
    $("#content").fadeIn("fast", function() {
      $("#content").html("Bounce");
    });
  }, function() {
    $("#content").empty();
    $("#content").fadeOut("fast", function() {

    });
  });

  // Snow Hover Box
   $(".pro2").hover(function() {
     $("#content").empty();
     $("#content").fadeIn("fast", function() {
       $("#content").html("Snow");
     });
   }, function() {
     $("#content").empty();
     $("#content").fadeOut("fast", function() {

     });
   });

});
