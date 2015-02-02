using EmployeeManager.Models;
using EmployeeManager.EM.Service;
using System.Collections.Generic;
using System.Web.Http;

namespace EmployeeManager.Controllers
{
    public class ApiEmployeeSetupController : ApiController
    {
        private EmployeeSetup _employeeSetup;
        public ApiEmployeeSetupController()
        {
            _employeeSetup = new EmployeeSetup();
        }
        // GET api/<controller>
        public List<Employee> Get()
        {            
            return _employeeSetup.GetEmployeeDetails(0);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public Employee Post([FromBody]Employee employee)
        {
            _employeeSetup.SaveEmployeeSetupInfo(employee);
            return employee;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
                
    }
}