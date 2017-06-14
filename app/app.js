var app = angular.module("UsersApp", []);
app.controller("UsersCtrl", function($scope, $http) {
    $scope.hide_unselected=false;
    $scope.confirm_Active=true;
  $http.get('https://jsonplaceholder.typicode.com/users').
    then(function(data, status, headers, config) {
           $scope.users = data.data;
    });

    $scope.showSelected=function (){
        $scope.hide_unselected=true;
    };
    $scope.totalUsersSelected= function (user){
          $scope.confirm_Active=false;
       if(user.checked === undefined)
        {
            user.checked = false;
        }
        user.checked = !user.checked;
        var total=0;
        for( var i = 0; i < $scope.users.length; i++)
        {
            if($scope.users[i].checked)
            {
                total++;
            }
        }
        $scope.total_items = total;
    }
});