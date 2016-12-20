$document.ready(function() {

$(".bounce").hover(
  function() {
    $("#content").attr("src", "/assets/bounce.gif");
  }, function() {
    $("#content").attr("src", "/assets/original.png");
  }
);


});
