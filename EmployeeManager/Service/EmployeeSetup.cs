using EmployeeManager.EM.Common;
using EmployeeManager.Models;
using System.Collections.Generic;

namespace EmployeeManager.Service
{
    public class EmployeeSetup
    {
        private Common _common;
        public EmployeeSetup()
        {
        }

        public List<Employee> GetEmployeeDetails(int employeeId)
        {
            List<Employee> _list = new List<Employee>();
            _common = new Common();

            var filePath = System.Web.Hosting.HostingEnvironment.MapPath(Configurations.EmployeeImagePath + "Jahan.jpg");
            var src = _common.GetImagebase64String(filePath);

            _list.Add(new Employee { EmployeeId = 1, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Khan Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 2, EmployeeEmail = "Frank@gmail.com", EmployeeName = "Frank Miller", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 3, EmployeeEmail = "James@gmail.com", EmployeeName = "James Lewis", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 4, EmployeeEmail = "George@gmail.com", EmployeeName = "George Robinson", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 5, EmployeeEmail = "ASM@gmail.com", EmployeeName = "ASM Robert Williams", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 6, EmployeeEmail = "11Khan@gmail.com", EmployeeName = "DSF Khan Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 7, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Robert Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 8, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Khan Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 9, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Khan Robinson", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 10, EmployeeEmail = "Khan@gmail.com", EmployeeName = "Lewis Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 11, EmployeeEmail = "Khan@gmail.com", EmployeeName = "SDFSDF Khan Frank", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 12, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FSDF Khan Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 13, EmployeeEmail = "Khan@gmail.com", EmployeeName = "RTYR Khan Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 14, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FD Khan TRET Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 15, EmployeeEmail = "Khan@gmail.com", EmployeeName = "AAD Khan HJGHJ Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 16, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FSDF Khan GDFGDF Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 17, EmployeeEmail = "Khan@gmail.com", EmployeeName = "FSDF DFG Jahan", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 18, EmployeeEmail = "Khan@gmail.com", EmployeeName = "WRR Khan SDFSF", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 19, EmployeeEmail = "Khan@gmail.com", EmployeeName = "BNMBM Khan TYU", EmployeeImageSrc = src });
            _list.Add(new Employee { EmployeeId = 20, EmployeeEmail = "Khan@gmail.com", EmployeeName = "WW VBNVBN", EmployeeImageSrc = src });

            return _list;

        }
        public void SaveEmployeeSetupInfo(Employee employee)
        {
            var tmpImageResult = employee.EmployeeImage.ImageResult;
            var filePath = System.Web.Hosting.HostingEnvironment.MapPath(Configurations.EmployeeImagePath + employee.EmployeeImage.ImageName);
            _common.SaveByteArrayAsImage(filePath, tmpImageResult.Replace("data:image/jpeg;base64,", ""));
        }
    }
}