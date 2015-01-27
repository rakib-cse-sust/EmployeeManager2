employeeApp.controller('EmployeeController', function ($scope, $routeParams, $filter, employeeService, $location, $modal) {
    $scope.Employee = [];
    init();

    function init() {
        
        $scope.FormStatusType = employeeService.getFormStatusType();

        employeeService.getAllCustomers().then(function (data) {

            $scope.Employee = data;

            $scope.itemsPerPage = 9;
            $scope.maxPageSize = Math.ceil($scope.Employee.length / $scope.itemsPerPage);
            $scope.bigTotalItems = $scope.Employee.length;
            $scope.bigCurrentPage = 1;

        });
    }

    $scope.setPage = function (pageNo) {
        $scope.bigCurrentPage = pageNo;
    };

    $scope.$watch('bigCurrentPage + itemsPerPage', function () {
        var begin = (($scope.bigCurrentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
        $scope.FilterEmployee = $scope.Employee.slice(begin, end);
    });

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
        if (employee == undefined) {
            $scope.openEmployeeSetupPopup(employee, $scope.FormStatusType.Add);
        }
        else {
            $scope.openEmployeeSetupPopup(employee, $scope.FormStatusType.Update);
        }
    }
    
    $scope.openEmployeeSetupPopup = function (employee, fromStatus) {

        var setting = {
            locationFrom: 'Employee Setup',
            Employee: employee,
            FromStatus: fromStatus,
            EmployeeCount: $scope.Employee.length
        };

        var modalInstance = $modal.open({
            templateUrl: 'angular/employee/partials/employeeSetup.html',
            controller: EmployeeSetupModalController,
            windowClass: 'modal-center modal fade in',
            backdrop:'static',
            resolve: {
                settings: function () {
                    return setting;
                }
            }
        });

        modalInstance.result.then(function (data) {            
            employee.EmployeeImageSrc = data.EmployeeImage.ImageResult;
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
            $scope.imageSrc = $scope.Settings.Employee.EmployeeImageSrc;
        }
        else {
            $scope.imageSrc = '';
            $scope.id = $scope.Settings.EmployeeCount + 1;
        }
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.save = function () {

        var file = $scope.myFile;

        if (file == undefined) {
            imageDetails = [];
        }
        else {
            var imageDetails = {
                ImageResult: file.result,
                ImageName: file.name,
                ImageSize: file.size,
                ImageType: file.type
            };
        }       

        var employeeObj = {
            EmployeeName: $scope.name,
            EmployeeEmail: $scope.email,
            EmployeeId: $scope.email,
            EmployeeImage: imageDetails,
            IsUpdate: $scope.Settings.FromStatus == 2 ? true:false
        };

        debugger;

        if ($scope.employeeSetupForm.$valid) {
            // Submit as normal
        } else {
            $scope.employeeSetupForm.submitted = true;
        }

        //employeeService.saveEmployee(employeeObj).then(function (data) {
        //    $modalInstance.close(data);
        //});

    };
}

