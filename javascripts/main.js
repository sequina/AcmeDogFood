define(["jquery", "bootstrap", "hbs", "dogfood"],
function($, bootstrap, handlebars, dogfoodTmpl) {
return {
  $.ajax({url: "./dogfood.json"}).done(
    function(){
      $(".output").html(dogfoodTmpl(./dogfood.json))
    })
}

});
