var angularComptaApp = angular.module('ComptApp', []);

angularComptaApp.controller('PostCtrl', function ($scope) {
    $scope.credits = [{
        'name': 'Créditeur 1',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 2',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 3',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 4',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 5',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 6',
        'info': 'Description & date'
    }]
});