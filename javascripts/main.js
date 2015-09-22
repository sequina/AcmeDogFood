define(["jquery", "bootstrap", "hbs", "firebase", "getTemplates"],
function($, bootstrap, handlebars, firebase, templates) {

    var dogFoodObject = {};
    var dogFoodArray = [];
    var catFoodObject = {};
    var catFoodArray = [];

    var myFirebaseRef = new Firebase("https://acmedogfood.firebaseio.com/");

    console.log(myFirebaseRef);

    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {
        var dog_brands = snapshot.val();
        console.log("dog_brands", dog_brands);
        dogFoodArray=[];
        for(var key in dog_brands) {
            dogFoodArray[dogFoodArray.length] = dog_brands[key];
        }
        console.log("dogFoodArray", dogFoodArray);
        dogFoodObject = { dog_brands: dogFoodArray };
        console.log("dogFoodArray", dogFoodArray);
    });

    myFirebaseRef.child("cat_brands").on("value", function(snapshot) {
        var cat_brands = snapshot.val();
        console.log("cat_brands", cat_brands);
        catFoodArray=[];
        for(var key in cat_brands) {
            catFoodArray[catFoodArray.length] = cat_brands[key];
        }
        console.log("catFoodArray", catFoodArray);
        catFoodObject = { cat_brands: catFoodArray };
        console.log("catFoodArray", catFoodArray);
    });

    // $("#dog-pic").click(function() {
    //  // here goes template call for dog food
    // });

    // $("#cat-pic").click(function() {
    //  // here goes template call for cat food
    // });

});