angular.module('app').controller('ArticleController', articleController)

function articleController($scope, articleService) {
    articleService.loadArticles().then(function(data){
        $scope.articles = data;
    });
}