angular.module('app', ['ngRoute', 'restangular'])
    .config(function (RestangularProvider, $routeProvider) {
        RestangularProvider.setBaseUrl('http://api.blog.local/app_dev.php');

        $routeProvider
            .when("/", {
                template : "<h2>Welcome to my blog</h2>"
            })
            .when("/articles", {
                controller: articleController,
                templateUrl : "app/views/articles.html"
            })
            .otherwise({
                template : "<h1>404</h1><h3>Page Not Found</h3>"
            });
    });