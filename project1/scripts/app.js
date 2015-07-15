$(document).ready(function() {

  console.log("All resources are loaded");

  // hide the status divs.  Could also do this via CSS

  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();

  // When user clicks the submit button contact submit event handler
  $('#form_send').on('click', function() {

    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit....');
    app.sendEmail(formdata);

  });


});

// Namespacing

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  // retJson.userTelephone = $('#user_telephone').val();
  // retJson.eventDate = $('#event_date').val();
  // retJson.eventType = $('#event_type').val();
  // retJson.eventSize = $('#event_size').val();
  retJson.request = $('#user_request').val();

  console.log(retJson);

  return retJson;
}
app.sendEmail = function(emailData) {

  //display loading info...
  $('.loading').slideDown(); // or .show()

  // hide old message.... because this is a NEW request
  $('.success').hide();
  $('.error').hide();

  // ajax argument
  var ajaxData = {
    url: 'http://imperialholonet.herokuapp.com/api/mail',
    type: 'post',
    data: emailData,
    success: function(data) {
      console.log(data);
      $('.loading').slideUp(); // or .hide()
      $('.success').show();  // or .slideDown()
    },
    error: function(err) {
      console.log(err);
      $('.loading').slideUp() // or .hide()
      $('.error').show();
    }

  };

  $.ajax(ajaxData);

}
