  $(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('#modal').modal('open');
    $('#modal').modal('close');

  var eventItems = ["Chairs"];

  function initialize() {
    for (var i = 0; i < eventItems.length; i++) {
      var itemButton = $("<button>");
      itemButton.addClass("donate");
      itemButton.addClass("btn");
      itemButton.addClass("waves-effect");
      itemButton.addClass("waves-light");
      itemButton.text(eventItems[i]);
      $("#neededItems").append(itemButton);
    }
  } 

  initialize();

  })