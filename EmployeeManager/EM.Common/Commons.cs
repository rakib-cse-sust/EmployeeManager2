using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

namespace EmployeeManager.EM.Common
{
    public class Commons
    {
        public Commons() { }

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

        public string GetImagebase64String(string filePath)
        {
            string base64String = string.Empty;

            try
            {
                if (!File.Exists(filePath))
                {
                    return base64String;
                }

                Image image = Image.FromFile(filePath);

                using (MemoryStream ms = new MemoryStream())
                {
                    image.Save(ms, image.RawFormat);
                    byte[] imageBytes = ms.ToArray();
                    base64String = Convert.ToBase64String(imageBytes);
                }

                base64String = !base64String.Contains("data:image/jpeg;base64,") ? "data:image/jpeg;base64," + base64String : base64String;

                return base64String;

            }
            catch (Exception e)
            {
                return base64String;
            }
        }
    }
}