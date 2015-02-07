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
            ViewBag.Title = "Home Page";

            Session["IsAuthenticated"] = "1";

            return View();
        }

        public ActionResult Login()
        {
            ViewBag.Title = "Home Page";

            Session["IsAuthenticated"] = "0";

            return View();
        }

        public ActionResult LogOut()
        {
            ViewBag.Title = "Home Page";

            Session["IsAuthenticated"] = "0";

            return RedirectToAction("Login");
        }
    }
}
