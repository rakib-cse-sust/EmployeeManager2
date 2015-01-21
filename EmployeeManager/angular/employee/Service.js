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

    function SaveEmployee(employee, uploadUrl) {
        var request = $http.post('/api/EmployeeSetup', employee);
        return (request.then(handleSuccess, handleError));
    }

    function GetAllCustomers() {
        var request = $http.get('/api/EmployeeSetup');
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