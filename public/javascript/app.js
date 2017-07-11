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

  $('.timepicker').pickatime({
    default: 'now', // Set default time
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: true, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker  
  });

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

$("#category").change(function() {
    $('#category').text(this.val());
});

  initialize();

})


