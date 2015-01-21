using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

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
    }
}