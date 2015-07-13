$(document).ready(function() {

  console.log("All resources are loaded");

  // contact submit event handler
  $('#form_send').on('click', function() {

    var formdata = app.createFormObject();
    console.log('Clicked form submit....');

  });


});

//Namespacing
var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.userTelephone = $('#user_telephone').val();
  retJson.eventDate = $('#event_date').val();
  retJson.eventType = $('#event_type').val();
  retJson.eventSize = $('#event_size').val();
  retJson.userRequest = $('#user_request').val();

  console.log(retJson);

  return retJson;
}
