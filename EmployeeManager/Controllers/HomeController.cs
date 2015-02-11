using EmployeeManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmployeeManager.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Landing Page";

            var sessionState = Session["IsAuthenticated"];

            if (string.IsNullOrEmpty(sessionState.ToString())) return RedirectToAction("Login");

            if (sessionState.ToString() != "1")
            {
                return RedirectToAction("Login");
            }
            else
            {
                return View();
            }
            
        }

        public ActionResult Dashboard()
        {
            ViewBag.Title = "Home Page";

            Session["IsAuthenticated"] = "1";

            return View();
        }

        public ActionResult Authentication(EmployeeLogin loginCriteria)
        {
            var isLoginSuccess = true;

            if (isLoginSuccess)
            {
                var userProfileData = new UserDetailsSessionData
                {
                    EmployeeId = 1,
                    EmployeeEmail = "",
                    EmployeeFullName = ""
                };

                Session["UserProfile"] = userProfileData;
            }
            else 
            {

            }

            // var profileData = this.Session["UserProfile"] as UserDetailsSessionData;

            return Json(new { success = true,message=""});
        }
        
        public ActionResult Login()
        {
            ViewBag.Title = "Login Page";

            Session["IsAuthenticated"] = "0";

            return View();
        }

        public ActionResult LogOut()
        {
            ViewBag.Title = "Logout Page";

            Session["IsAuthenticated"] = "0";

            return RedirectToAction("Login");
        }
    }
}
