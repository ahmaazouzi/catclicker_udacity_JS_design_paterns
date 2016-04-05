var app1 = angular.module('app1', []);

lista = [{name: 'bon', source: 'bon.jpg', count:0}, {name: 'hon',
source: 'hon.jpg', count:0},{name: 'jojo', source: 'jojo.jpg', count:0},
{name: 'jon', source: 'jon.jpg', count:0},{name: 'koko', source: 'koko.jpg',
count:0},{name: 'lon', source: 'lon.jpg', count:0},{name: 'mon', 
source: 'mon.jpg', count:0},{name: 'toto', source: 'toto.jpg', count:0},];

app1.controller('iterata', function($scope){
	$scope.list= lista;
	$scope.updateValue = function(mama){
		$scope.conta = mama.count++;
	}
});


