using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace EmployeeManager.EM.Common
{
    public static class Configurations
    {
        public static string EmployeeImagePath = ConfigurationManager.AppSettings["employeeImagePath"];
    }
}