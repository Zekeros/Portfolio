$document.ready(function() {

$(".bounce").hover(
  function() {
    $("#content").attr("src", "/assets/bounce.gif");
  }, function() {
    $("#content").attr("src", "/assets/original.png");
  }
);

$("#bounce").hover(
  function() {
    $("#mainBar").css("color", "rgb(0,128,0)")
  }, function() {
    $("#mainBar").css("color", "rgb(128,0,0)")
  }
  });
)

$("body").html("jQuery is working");

});
