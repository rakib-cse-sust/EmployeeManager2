using EmployeeManager.Models;
using EmployeeManager.Service;
using System.Collections.Generic;
using System.Web.Http;

namespace EmployeeManager.Controllers
{
    public class EmployeeSetupController : ApiController
    {
        private Common _common;
        public EmployeeSetupController()
        {
            _common = new Common();
        }
        // GET api/<controller>
        public List<Employee> Get()
        {
            List<Employee> _list = new List<Employee>();

            _list.Add(new Employee { EmployeeId = 1,EmployeeEmail= "Khan@gmail.com", EmployeeName= "Khan Jahan" });
            _list.Add(new Employee { EmployeeId = 2, EmployeeEmail = "Frank@gmail.com", EmployeeName = "Frank Miller" });
            _list.Add(new Employee { EmployeeId = 3, EmployeeEmail = "James@gmail.com", EmployeeName = "James Lewis" });
            _list.Add(new Employee { EmployeeId = 4, EmployeeEmail = "George@gmail.com", EmployeeName = "George Robinson" });
            _list.Add(new Employee { EmployeeId = 5, EmployeeEmail = "ASM@gmail.com", EmployeeName = "ASM Robert Williams" });
            _list.Add(new Employee { EmployeeId = 6, EmployeeEmail = "11Khan@gmail.com", EmployeeName = "DSF Khan Jahan" });
            _list.Add(new Employee { EmployeeId = 7, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Robert Jahan" });
            _list.Add(new Employee { EmployeeId = 8, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Khan Jahan" });
            _list.Add(new Employee { EmployeeId = 9, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Khan Robinson" });
            _list.Add(new Employee { EmployeeId = 10, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Lewis Jahan" });
            _list.Add(new Employee { EmployeeId = 11, EmployeeEmail = "Khan@gmail.com", EmployeeName = "SDFSDF Khan Frank" });
            _list.Add(new Employee { EmployeeId = 12, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FSDF Khan Jahan" });
            _list.Add(new Employee { EmployeeId = 13, EmployeeEmail = "Khan@gmail.com", EmployeeName = "RTYR Khan Jahan" });
            _list.Add(new Employee { EmployeeId = 14, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FD Khan TRET Jahan" });
            _list.Add(new Employee { EmployeeId = 15, EmployeeEmail = "Khan@gmail.com", EmployeeName = "AAD Khan HJGHJ Jahan" });
            _list.Add(new Employee { EmployeeId = 16, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FSDF Khan GDFGDF Jahan" });
            _list.Add(new Employee { EmployeeId = 17, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FSDF DFG Jahan" });
            _list.Add(new Employee { EmployeeId = 18, EmployeeEmail = "Khan@gmail.com", EmployeeName = "WRR Khan SDFSF" });
            _list.Add(new Employee { EmployeeId = 19, EmployeeEmail = "Khan@gmail.com", EmployeeName = "BNMBM Khan TYU" });
            _list.Add(new Employee { EmployeeId = 20, EmployeeEmail = "Khan@gmail.com", EmployeeName = "WW VBNVBN" });

            return _list;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public Employee Post([FromBody]Employee employee)
        {
            var tmpImageResult = employee.EmployeeImage.ImageResult;
            var filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/angular/images/" + employee.EmployeeImage.ImageName);
            _common.SaveByteArrayAsImage(filePath, tmpImageResult.Replace("data:image/jpeg;base64,", ""));
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