$(document).ready(function () {
  let index = 1;
  let isShowing = true;

  $("#walrus-text").click(function () {
    $(".walrus-show").slideToggle();
    if (isShowing) {
      $('#walrus-text').text('Hide image');
    } else {
      $('#walrus-text').text('Show image');
    }
    isShowing = !isShowing;
  });

  // $(".content").on('click', '.expandable', function() {
  //   $(".text-showing").slideToggle();
  // });

  $("#toggle-text").click(function () {
    $("#text-showing").slideToggle();
  });

  $("button#green").click(function () {
    $("body").removeClass("yellow-background red-background dark-mode");
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function () {
    $("body").removeClass("green-background red-background dark-mode");
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function () {
    $("body").removeClass("green-background yellow-background dark-mode");
    $("body").addClass("red-background");
  });

  $("button#dark").click(function () {
    $("body").removeClass("green-background yellow-background red-background");
    $("body").toggleClass("dark-mode");
  });

  $("button#borders").click(function () {
    $(".expandable").toggleClass("bordered");
  });

  $("button#random").click(function () {
    //use a counter variable and use template literals to get unique ids, then use the same id to attach an event listener
    
    const htmlElementsToAdd =
      `<div class='expandable'>
        <p class='bg-secondary' id='toggle-text${index}'>
          Lorem ipsum dolor sit amet.
        </p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quo. Sit repellendus tempore animi eum quos eveniet? Officia, perferendis ea.
        </div>
      </div>`;
    $("#content").append(htmlElementsToAdd);
    
    $(`#toggle-text${index}`).click(function () {
      $(this).next().slideToggle();
    });
    

    index++;
  });
});
