employeeApp.controller('EmployeeController', function ($scope, $routeParams, $filter, employeeService, $location, $modal) {
    
    init();

    function init() {
        
        $scope.FormStatusType = employeeService.getFormStatusType();

        //employeeService.getAllCustomers().then(function (data) {
        //    $scope.Employee = data;
        //});

        var employee = [
            { "EmployeeId": 1, "EmployeeName": "Khan Jahan", "EmployeeEmail": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "EmployeeId": 2, "EmployeeName": "Frank Miller", "EmployeeEmail": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "EmployeeId": 3, "EmployeeName": "James Lewis", "EmployeeEmail": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "EmployeeId": 4, "EmployeeName": "George Robinson", "EmployeeEmail": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "EmployeeId": 5, "EmployeeName": "Rakib Lewis", "EmployeeEmail": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "EmployeeId": 6, "EmployeeName": "Jahan Robinson", "EmployeeEmail": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

            { "EmployeeId": 7, "EmployeeName": "ASM Robert Williams", "EmployeeEmail": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "EmployeeId": 8, "EmployeeName": "ADL Khan Jahan", "EmployeeEmail": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "EmployeeId": 9, "EmployeeName": "DKJ Frank Miller", "EmployeeEmail": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "EmployeeId": 10, "EmployeeName": "LOI James Lewis", "EmployeeEmail": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "EmployeeId": 11, "EmployeeName": "MHN George Robinson", "EmployeeEmail": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "EmployeeId": 12, "EmployeeName": "WER Rakib Lewis", "EmployeeEmail": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "EmployeeId": 13, "EmployeeName": "MKJ Jahan Robinson", "EmployeeEmail": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

            { "EmployeeId": 14, "EmployeeName": "RTY Robert Williams", "EmployeeEmail": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "EmployeeId": 15, "EmployeeName": "GHJ Khan Jahan", "EmployeeEmail": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "EmployeeId": 16, "EmployeeName": "VBN Frank Miller", "EmployeeEmail": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "EmployeeId": 17, "EmployeeName": "WSD James Lewis", "EmployeeEmail": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "EmployeeId": 18, "EmployeeName": "KOI George Robinson", "EmployeeEmail": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "EmployeeId": 19, "EmployeeName": "QAZ Rakib Lewis", "EmployeeEmail": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "EmployeeId": 20, "EmployeeName": "MOK Jahan Robinson", "EmployeeEmail": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" }
        ];

        $scope.Employee = employee;

        $scope.itemsPerPage = 9;
        $scope.maxPageSize = Math.ceil($scope.Employee.length / $scope.itemsPerPage);
        $scope.bigTotalItems = $scope.Employee.length;
        $scope.bigCurrentPage = 1;
    }

    $scope.setPage = function (pageNo) {
        $scope.bigCurrentPage = pageNo;
    };

    $scope.$watch('bigCurrentPage + itemsPerPage', function () {
        var begin = (($scope.bigCurrentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
        $scope.FilterEmployee = $scope.Employee.slice(begin, end);
    });

    //$scope.$watch('cityName', function (newCityName) {
    //    $scope.currentPage = 1;
    //    $scope.filteredDestinations = $filter('filter')($scope.Employee, $scope.cityName);
    //    $scope.totalItems = $scope.filteredDestinations.length;
    //    $scope.noOfPages = $scope.filteredDestinations.length / $scope.pageSize;
    //});

    $scope.deleteEmployee = function (id) {
        for (var i = 0; i < $scope.Employee.length; i++) {
            var employee = $scope.Employee[i];
            if (employee.EmployeeId === id) {
                $scope.Employee.splice(i, 1);
                break;
            }
        }
    }

    $scope.updateEmployee = function (employee) {
        $scope.openEmployeeSetupPopup(employee, $scope.FormStatusType.Update);
    }
    
    $scope.openEmployeeSetupPopup = function (employee, fromStatus) {
        var setting = {
            locationFrom: 'Employee Setup',
            Employee: employee,
            FromStatus: fromStatus
        };

        var modalInstance = $modal.open({
            templateUrl: 'angular/employee/partials/employeeSetup.html',
            controller: EmployeeSetupModalController,
            windowClass: 'modal-center modal fade in',
            resolve: {
                settings: function () {
                    return setting;
                }
            }
        });

        modalInstance.result.then(function (data) {            
            employee.imagePath = data.EmployeeImage.ImageResult;
        }, function () {
        });
    };
});

employeeApp.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

employeeApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

function EmployeeSetupModalController($scope, $http, $modalInstance, settings, employeeService) {
    InIt();
    function InIt() {
        $scope.Settings = settings;
        if ($scope.Settings.FromStatus == 2) {
            $scope.name = $scope.Settings.Employee.EmployeeName;
            $scope.email = $scope.Settings.Employee.EmployeeEmail;
            $scope.id = $scope.Settings.Employee.EmployeeId;
        }
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.save = function () {
        var file = $scope.myFile;

        var imageDetails = {
            ImageResult : file.result,
            ImageName : file.name,
            ImageSize :file.size,
            ImageType :file.type
        };

        var employeeObj = {
            EmployeeName: $scope.name,
            EmployeeEmail: $scope.email,
            EmployeeId: $scope.email,
            EmployeeImage: imageDetails
        };        
        //console.log('file is ' + JSON.stringify(file));
        var uploadUrl = "/angular/images";
        employeeService.saveEmployee(employeeObj, uploadUrl).then(function (data) {
            $modalInstance.close(data);
        });
    };
}

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