requirejs.config({
    shim : {
        "bootstrap" : { "deps" :["jquery"] },
        "firebase" : { exports: "Firebase" }
    },
    baseUrl: "./javascripts",
    paths:{
        "jquery": "../lib/bower_components/jquery/dist/jquery.min",
        "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
        "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
        "firebase": "../lib/bower_components/firebase/firebase",
        "lodash": "../lib/bower_components/lodash/lodash.min"
    }
});

require(["main", "bootstrap"], function() {} );