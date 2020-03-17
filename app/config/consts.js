angular.module('primeiraApp').constant('consts', {
  appName: 'MEAN - Primeira Aplicação',
  version: '1.0',
  owner: 'EDGE',
  year: '2020',
  site: '#',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])