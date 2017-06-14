var app = angular.module("UsersApp", []);

app.controller("UsersCtrl", function($scope, $http) {
    $scope.hide_unselected=false;
    
  $http.get('https://jsonplaceholder.typicode.com/users').
    then(function(data, status, headers, config) {
          
           $scope.users = data.data;
       //console.log( $scope.users);
    });

    $scope.takeSelected=function (){
        $scope.hide_unselected=true;
        var selected = [];
        for( var i = 0; i < $scope.users.length; i++)
        {
            if($scope.users[i].checked)
            {
                selected.push($scope.users[i]);
            }
        }
        console.log(selected);
    };

    $scope.totalUsersSelected= function (user){
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