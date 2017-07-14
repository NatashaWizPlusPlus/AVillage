$(document).ready(function () {
  $(".button-collapse").sideNav();
  $('.modal').modal();
  $('#modal').modal('open');
  $('#modal').modal('close');
  $('select').material_select();

  $('#addItem').click(function () {
    $.put({
      data: {
        title: $('#title').val(),
        description: $('#description').val(),
        quantity: $('#quantity').val(),
        EventId: $('EventId').val()
      },
      url: '../api/additems',
      success: function (result) {
        console.log(result)
      }
    });
  });


  $("#category").change(function () {
    $('#category').text(this.val());
  });



})


