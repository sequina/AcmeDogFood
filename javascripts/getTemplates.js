define(["hbs", "hbs!../templates/doogfood", "hbs!../templates/catfood"],
function(handlebars, dogTmpl, catTmpl) {

  return {
    dogTmpl: function(fbObject) {
      // console.log("songTmpl is here!");
      return dogTmpl(fbObject);
    },
    catTmpl: function(fbObject) {
      // console.log("artistTmpl is here!");
      return catTmpl(fbObject);
    }
  };

});
