jQuery(document).ready(function($) {
    $("#edit-dnafunctionaltests").attr('checked', 'checked');
    $("#edit-dnaunittests").attr('checked', 'checked');
    $("#edit-tests").hide();
    $("#edit-clean").hide();
    $("#runtest").click(function(){
      $("#edit-op").click();
    });
});
