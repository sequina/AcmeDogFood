define(["jquery", "bootstrap", "hbs", "firebase", "getTemplates"],
function($, bootstrap, handlebars, firebase, templates) {

    var dogfood = [];
    var catfood = [];

    var myFirebaseRef = new Firebase("https://acmedogfood.firebaseio.com/");

    // console.log(myFirebaseRef);

    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {
        dogfood = snapshot.val();
        });

    myFirebaseRef.child("cat_brands").on("value", function(snapshot) {
        catfood = snapshot.val();
    });

    $("#dog").click(function() {
        $(".output").html(templates.dogTmpl({dog_brands:dogfood}));
    });

    $("#cat").click(function() {
        $(".output").html(templates.catTmpl({cat_brands:catfood}));
    });

});
