//function EmployeeSetupModalController($scope, $http, $modalInstance, settings, employeeService) {
//    InIt();
//    function InIt() {
//        $scope.Settings = settings;      
//    }

//    $scope.cancel = function () {
//        $modalInstance.dismiss('cancel');
//    };

//    $scope.ok = function () {
//        $modalInstance.close($scope.Settings);
//    };
//}



//var employee = [
//    { "EmployeeId": 1, "EmployeeName": "Khan Jahan", "EmployeeEmail": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "EmployeeId": 2, "EmployeeName": "Frank Miller", "EmployeeEmail": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "EmployeeId": 3, "EmployeeName": "James Lewis", "EmployeeEmail": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "EmployeeId": 4, "EmployeeName": "George Robinson", "EmployeeEmail": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "EmployeeId": 5, "EmployeeName": "Rakib Lewis", "EmployeeEmail": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "EmployeeId": 6, "EmployeeName": "Jahan Robinson", "EmployeeEmail": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

//    { "EmployeeId": 7, "EmployeeName": "ASM Robert Williams", "EmployeeEmail": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "EmployeeId": 8, "EmployeeName": "ADL Khan Jahan", "EmployeeEmail": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "EmployeeId": 9, "EmployeeName": "DKJ Frank Miller", "EmployeeEmail": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "EmployeeId": 10, "EmployeeName": "LOI James Lewis", "EmployeeEmail": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "EmployeeId": 11, "EmployeeName": "MHN George Robinson", "EmployeeEmail": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "EmployeeId": 12, "EmployeeName": "WER Rakib Lewis", "EmployeeEmail": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "EmployeeId": 13, "EmployeeName": "MKJ Jahan Robinson", "EmployeeEmail": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

//    { "EmployeeId": 14, "EmployeeName": "RTY Robert Williams", "EmployeeEmail": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "EmployeeId": 15, "EmployeeName": "GHJ Khan Jahan", "EmployeeEmail": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "EmployeeId": 16, "EmployeeName": "VBN Frank Miller", "EmployeeEmail": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "EmployeeId": 17, "EmployeeName": "WSD James Lewis", "EmployeeEmail": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "EmployeeId": 18, "EmployeeName": "KOI George Robinson", "EmployeeEmail": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "EmployeeId": 19, "EmployeeName": "QAZ Rakib Lewis", "EmployeeEmail": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "EmployeeId": 20, "EmployeeName": "MOK Jahan Robinson", "EmployeeEmail": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" }
//];

//$scope.Employee = employee;      


//$scope.itemsPerPage = 9;
//$scope.maxPageSize = Math.ceil($scope.Employee.length / $scope.itemsPerPage);
//$scope.bigTotalItems = $scope.Employee.length;
//$scope.bigCurrentPage = 1;

//$scope.Employee = {};
//employeeService.getAllCustomers().then(function (data) {
//    $scope.Employee = data;

//    $scope.itemsPerPage = 9;
//    $scope.maxPageSize = Math.ceil($scope.Employee.length / $scope.itemsPerPage);
//    $scope.bigTotalItems = $scope.Employee.length;
//    $scope.bigCurrentPage = 1;

//});



//var employee = [
//    { "id": 1, "name": "Khan Jahan", "email": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "id": 2, "name": "Frank Miller", "email": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "id": 3, "name": "James Lewis", "email": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "id": 4, "name": "George Robinson", "email": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "id": 5, "name": "Rakib Lewis", "email": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "id": 6, "name": "Jahan Robinson", "email": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

//    { "id": 7, "name": "ASM Robert Williams", "email": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "id": 8, "name": "ADL Khan Jahan", "email": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "id": 9, "name": "DKJ Frank Miller", "email": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "id": 10, "name": "LOI James Lewis", "email": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "id": 11, "name": "MHN George Robinson", "email": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "id": 12, "name": "WER Rakib Lewis", "email": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "id": 13, "name": "MKJ Jahan Robinson", "email": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

//    { "id": 14, "name": "RTY Robert Williams", "email": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "id": 15, "name": "GHJ Khan Jahan", "email": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "id": 16, "name": "VBN Frank Miller", "email": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "id": 17, "name": "WSD James Lewis", "email": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
//    { "id": 18, "name": "KOI George Robinson", "email": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
//    { "id": 19, "name": "QAZ Rakib Lewis", "email": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
//    { "id": 20, "name": "MOK Jahan Robinson", "email": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" }
//];