function employeeService($http, $rootScope, $q) {
    return {
        getAllCustomers: GetAllCustomers,
        getFormStatusType: GetFormStatusType,
        saveEmployee: SaveEmployee,
        employeeAuthentication: EmployeeAuthentication
    };

    function GetFormStatusType() {
        return {
            Add: 1,
            Update: 2
        }
    }    

    function SaveEmployee(employee) {
        var request = $http.post('/api/EmployeeSetupApi', employee);
        return (request.then(handleSuccess, handleError));
    }

    function GetAllCustomers() {
        var request = $http.get('/api/EmployeeSetupApi');
        return (request.then(handleSuccess, handleError));
    }

    function EmployeeAuthentication(employee) {
        var request = $http.post('/api/EmployeeSetup', employee);
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