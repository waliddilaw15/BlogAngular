angular.module('app').factory('articleService', articleService)

function articleService(Restangular){
    var that = this;

    that.loadArticles = function () {
        return Restangular.all('articles').getList().then(
            function (data) {
                return data;
            },
            function (fallback) {
                alert('Not ok')
            }
        );
    };

    that.loadArticle = function (id) {
        return Restangular.one('articles', id).get().then(
            function (data) {
                return data;
            },
            function (fallback) {
                alert('Not ok')
            }
        );
    };

    return that;
}