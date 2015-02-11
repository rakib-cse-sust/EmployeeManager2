employeeLoginApp.controller('EmployeeLoginController', function ($scope, $routeParams, $filter, employeeService, $location, $modal, $window) {

    init();

    function init() {
        $scope.IsLoginMode = true;
    }

    $scope.ToggleLoginRegisterView = function (isLogin) {
        $scope.IsLoginMode = isLogin;
    };

    $scope.login = function () {
        $window.location.href = "/Home/Dashboard";
    };

});
