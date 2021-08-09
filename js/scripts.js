let counter = 0;

$(document).ready(function() {

  const height = $(document).height() - $(window).height();

  $("h1").click(function() {
    alert("This is a heading.");
  });
  $("p").click(function(){
    alert("This is a paragraph.");
  });
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
  $("button").click(function(event) {
    event.preventDefault();
    counter++;
    console.log(counter);
    $("button").html(counter);

  })
  $(window).scroll(function() {
    console.log($(window).scrollTop() * 100 / height + "%");
  });
});