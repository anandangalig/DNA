jQuery(document).ready(function($){

  var url = document.location.href;

  if (url.indexOf('/') >= 0) {
    $('#page-title').hide();
    $('#first-time').hide();
  }
});
