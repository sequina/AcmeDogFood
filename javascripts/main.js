define(["jquery", "bootstrap", "hbs", "firebase", "getTemplates"],
function($, bootstrap, handlebars, firebase, templates) {

    var dog_brands = [];
    var cat_brands = [];

    var myFirebaseRef = new Firebase("https://acmedogfood.firebaseio.com/");

    // console.log(myFirebaseRef);

    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {
        dog_brands = snapshot.val();
    });

    myFirebaseRef.child("cat_brands").on("value", function(snapshot) {
        cat_brands = snapshot.val();
    });

    $("#dog").click(function() {
        $("#output").html(templates.dogTmpl({dog_brands:dog_brands}));
    });

    $("#cat").click(function() {
        $("#output").html(templates.catTmpl({cat_brands:cat_brands}));
    });

});