angular.module("myapp",["ngRoute","ngAnimate","serves","controles"])
.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"index.html",
        controller:"index"
    }).when("/list/:id",{
        templateUrl:"list.html",
        controller:"index"
    }).when("/show/",{
        templateUrl:"show.html"
    }).when("/show/:id",{
        templateUrl:"show.html",
        controller:"index"
    })
})
