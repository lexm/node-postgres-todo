angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
  $scope.formdata = {};
  $scope.todoData = {};
  $http.get('/api/vi/todos')
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
})
