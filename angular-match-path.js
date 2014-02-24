angular.module('l42y.match-path', ['ngRoute']).provider('l42yMatchPath', function (
  $locationProvider
) {
  return {
    $get: function () {
      return {
        hashPrefix: $locationProvider.hashPrefix()
      };
    }
  };
}).directive('l42yMatchPath', function (
  $location,
  l42yMatchPath
) {
  function matchPath(currentPath, href, strict) {
    var path = href.replace('/#' + l42yMatchPath.hashPrefix, '');
    return !!strict ?
      (currentPath === path) : (currentPath.substring(0, path.length) === path);
  }

  function testPathMatching (scope, attrs) {
    attrs.$observe('href', function (href) {
      scope.isPathMatched =
        matchPath(
          $location.path(),
          href,
          attrs.l42yMatchPath
        );
    });
  }

  return {
    scope: true,
    restrict: 'A',
    controller: function ($scope, $element, $attrs) {
      var self = this;
      $scope.$on('$routeChangeSuccess', function () {
        testPathMatching (self, $attrs);
      });
    },
    controllerAs: 'l42y'
  };
});
