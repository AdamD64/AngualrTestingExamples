angular.module('myApp.services.apiProxy',[]);
angular.module('myApp.services.model',[]);
angular.module('myApp.filters',[]);
angular.module('myApp.directives',[]);
angular.module('myApp', ['myApp.services.apiProxy', 'myApp.services.model', 'myApp.filters', 'myApp.directives']);