    define(["hbs",
                "hbs!../templates/dogfood",
                "hbs!../templates/catfood"],
    function(handlebars, dogTmpl, catTmpl) {

      return {
        dogTmpl: function(fbObject) {
          // console.log("dogTmpl is here!");
          return dogTmpl(fbObject);
        },
        catTmpl: function(fbObject) {
          // console.log("catTmpl is here!");
          return catTmpl(fbObject);
        }
      };

    });
