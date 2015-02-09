using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeManager.Models
{
    public class Authentication
    {
        public bool IsAuthenticated { get; set; }
    }

    public class EmployeeLogin : Authentication
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }
    }

    public class UserDetailsSessionData
    {
        public string EmployeeFullName { get; set; }
        public string EmployeeEmail { get; set; }
        public int EmployeeId { get; set; }
    }
}