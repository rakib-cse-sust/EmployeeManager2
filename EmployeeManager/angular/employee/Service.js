function employeeService($http, $rootScope, $q) {
    return {
        getAllCustomers: GetAllCustomers,
        getFormStatusType: GetFormStatusType,
        saveEmployee: SaveEmployee
    };

    function GetFormStatusType() {
        return {
            Add: 1,
            Update: 2
        }
    }

    var urlBase = '/api/EmployeeSetup';

    function SaveEmployee(employee, uploadUrl) {
        //var request = $http.post('/Controllers/EmployeeSetup', employee);
        var request = $http.get(urlBase, 5);
        return (request.then(handleSuccess, handleError));
    }

    function GetAllCustomers() {
        var request = $http.get('/Global/Advert/Controllers/EmployeeSetup/' + activityId + '?briefStatusType=' + briefStatusType);
        return (request.then(handleSuccess, handleError));
    }

    function handleError(response) {
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject("An unknown error occurred."));
        }
        return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
        return (response.data);
    }

};