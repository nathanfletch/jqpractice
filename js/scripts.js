$(document).ready(function() {
  $("#clickShow").click(function() {
    $("#img-showing").fadeIn();
    $("#img-hidden").fadeOut();
  });
  $("#clickHide").click(function() {
    $("#img-showing").slideUp();
    $("#img-hidden").slideDown();
  });
});