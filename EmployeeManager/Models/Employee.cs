﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace EmployeeManager.Models
{
    public class Employee
    {
        public string EmployeeFirstName { get; set; }
        public string EmployeeLastName { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeEmail { get; set; }
        public int EmployeeId { get; set; }
        public string EmployeeImageSrc { get; set; }
        public EmployeeImageDetails EmployeeImage { get; set; }
        public bool IsUpdate { get; set; }
    }
    public class EmployeeImageDetails
    {
        public string ImageResult { get; set; }
        public string ImageName { get; set; }
        public int ImageSize { get; set; }
        public string ImageType { get; set; }
    }
}