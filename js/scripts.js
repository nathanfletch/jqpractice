$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-show").slideToggle();
    $(".walrus-hidden").slideToggle();
  });

  $(".toggle-text").click(function() {
    $(".text-showing").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass("yellow-background red-background dark-mode");
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass("green-background red-background dark-mode");
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass("green-background yellow-background dark-mode");
    $("body").addClass("red-background");
  });

  $("button#dark").click(function() {
    
    $("body").removeClass("green-background yellow-background red-background");
    $("body").toggleClass("dark-mode");
  });

  $("button#borders").click(function() {
    $(".expandable").toggleClass("border");
  });

  $("button#random").click(function() {
    // $("#content").prepend("<div><p>sometext</p></div>");

    $("#content").prepend("<div class='expandable'>    <div class='bg-secondary'>      <p class='toggle-text'>Lorem ipsum dolor sit amet.</p>    </div>    <div class='text-showing'>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,      quo. Sit repellendus tempore animi eum quos eveniet? Officia,      perferendis ea.    </div>  </div>");
    $(this).children("div").first().click(function() {
      $(this).children("div").first().slideToggle();
    });
  });
});