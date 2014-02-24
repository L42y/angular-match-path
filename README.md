# [angular](http://angularjs.org)-match-path

AngularJS component for testing if element's href attribute value matches `$location.path()`

## Installation

1. `bower install --save angular-match-path`
2. including `angular-match-path.js` script file provided by this component into your application
3. adding `l42y.match-path` as a module dependency to your application

## Usage

```html
<a ng-href="/{{ 'test' }}"
   ng-class="{'foo': l42y.isPathMatched}"
   l42y-match-path="true">foobar<a>
```

This component [observe](http://docs.angularjs.org/api/ng/type/$compile.directive.Attributes#$observe) element's href attribute, get it's value, test if it matches current `$location.path()` value in every route changes(by listening `$routeChangeSuccess` event). When it's matched, `l42y.isPathMatched` in element's scope become `true`. If element's `l42y-match-path` attribute value is truthy, it test by comparing(`===`) two strings: element's href attribute value and `$location.path()`, if not, it test by if element's href attribute value starts with `$location.path()`.

## License

[WTFPL](http://wtfpl.org/)
