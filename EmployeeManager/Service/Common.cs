using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using EmployeeManager.Models;

namespace EmployeeManager.Service
{
    public class Common
    {
        public Common() { }

        public void SaveByteArrayAsImage(string fullOutputPath, string base64String)
        {
            try
            {
                byte[] bytes = Convert.FromBase64String(base64String);
                Image image;
                using (MemoryStream ms = new MemoryStream(bytes))
                {
                    image = Image.FromStream(ms);
                }
                using (Bitmap tempImage = new Bitmap(image))
                {
                    if (File.Exists(fullOutputPath))
                    {
                        File.Delete(fullOutputPath);
                    }
                    tempImage.Save(fullOutputPath, tempImage.RawFormat);
                }
            }
            catch (Exception e)
            {
                
            }
        }

        public EmployeeImageDetails GetImageFileDetails(string filePath)
        {
            EmployeeImageDetails _image = new EmployeeImageDetails();

            try
            {

                string base64String = string.Empty;

                if (File.Exists(filePath))
                {
                    _image.ImageResult = string.Empty;
                }

                Image image = Image.FromFile(filePath);

                using (MemoryStream ms = new MemoryStream())
                {
                    image.Save(ms, image.RawFormat);
                    byte[] imageBytes = ms.ToArray();
                    _image.ImageResult = Convert.ToBase64String(imageBytes);
                }

                return _image;
                
            }
            catch (Exception e)
            {
                return _image;
            }
        }
    }
}