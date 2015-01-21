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

employeeApp.controller('EmployeeController', function ($scope, $routeParams, $filter, employeeService, $location, $modal) {
    init();
    function init() {

        var employee = [
            { "id": 1, "name": "Khan Jahan", "email": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "id": 2, "name": "Frank Miller", "email": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "id": 3, "name": "James Lewis", "email": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "id": 4, "name": "George Robinson", "email": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "id": 5, "name": "Rakib Lewis", "email": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "id": 6, "name": "Jahan Robinson", "email": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

            { "id": 7, "name": "ASM Robert Williams", "email": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "id": 8, "name": "ADL Khan Jahan", "email": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "id": 9, "name": "DKJ Frank Miller", "email": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "id": 10, "name": "LOI James Lewis", "email": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "id": 11, "name": "MHN George Robinson", "email": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "id": 12, "name": "WER Rakib Lewis", "email": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "id": 13, "name": "MKJ Jahan Robinson", "email": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" },

            { "id": 14, "name": "RTY Robert Williams", "email": "Robert@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "id": 15, "name": "GHJ Khan Jahan", "email": "Khan@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "id": 16, "name": "VBN Frank Miller", "email": "Frank@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "id": 17, "name": "WSD James Lewis", "email": "James@gmail.com", "imagePath": "/angular/images/George.jpg" },
            { "id": 18, "name": "KOI George Robinson", "email": "George@gmail.com", "imagePath": "/angular/images/Jahan.jpg" },
            { "id": 19, "name": "QAZ Rakib Lewis", "email": "Rakib@gmail.com", "imagePath": "/angular/images/Rakib.jpg" },
            { "id": 20, "name": "MOK Jahan Robinson", "email": "Jahan@gmail.com", "imagePath": "/angular/images/George.jpg" }
        ];

        $scope.Employee = employee;
        $scope.FormStatusType = employeeService.getFormStatusType();
    }


    $scope.setPage = function (pageNo) {
        $scope.bigCurrentPage = pageNo;
    };

    $scope.itemsPerPage = 9;
    $scope.maxPageSize = Math.ceil($scope.Employee.length / $scope.itemsPerPage);
    $scope.bigTotalItems = $scope.Employee.length;
    $scope.bigCurrentPage = 1;

    $scope.$watch('bigCurrentPage + itemsPerPage', function () {
        var begin = (($scope.bigCurrentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
        $scope.FilterEmployee = $scope.Employee.slice(begin, end);       
    });

    $scope.deleteEmployee = function (id) {
        for (var i = 0; i < $scope.Employee.length; i++) {
            var employee = $scope.Employee[i];
            if (employee.id === id) {
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
            employee.email = "sfsfsdfsfsdff";
        }, function () {
        });
    };
});

function EmployeeSetupModalController($scope, $http, $modalInstance, settings, employeeService) {
    InIt();
    function InIt() {
        $scope.Settings = settings;
        if ($scope.Settings.FromStatus == 2) {
            $scope.name = $scope.Settings.Employee.name;
            $scope.email = $scope.Settings.Employee.email;
            $scope.id = $scope.Settings.Employee.id;
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

