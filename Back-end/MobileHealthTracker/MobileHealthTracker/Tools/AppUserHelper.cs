using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MobileHealthTracker.Models;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace MobileHealthTracker.Tools
{
    public class AppUserHelper
    {
        private AppUser _user;

        public AppUserHelper(AppUser user)
        {
            this._user = user;
        }

        public bool IsUsersDataValid()
        {
            if (_user is null) { throw new NullReferenceException(); }
            if (string.IsNullOrEmpty(_user.Email) || string.IsNullOrEmpty(_user.Password)) { return false; }

            var regex = new Regex(@"[0-9a-zA-Z_\-.,]{8,16}");
            if (!regex.IsMatch(_user.Password)) { return false; }

            return true;
        }

        public void SendSignUpMessage()
        {
            if (_user is null) { throw new NullReferenceException("User not found!"); }

            var configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .Build();

            var serverAddress = configuration["SMTPServer:Address"];
            if(serverAddress is null) { throw new NullReferenceException("Not correct server's address!"); }

            //To Do: name of app from BD
            var from = new MailAddress(serverAddress, "Mobile Health Tracker");

            var to = new MailAddress(_user.Email);

            var message = new MailMessage(from, to)
            {
                //To Do: Subject and Body from BD
                Subject = "Регистрация в системе",
                Body = "<h2>Спасибо за регистрацию в системе!</h2><br/>" +
                     $"Ваш логин: {_user.Email}<br/>" +
                     $"Ваш пароль: {_user.Password}",

                IsBodyHtml = true
            };

            var smtp = new SmtpClient(configuration["SMTPServer:Client"])
            {
                Credentials = new NetworkCredential(serverAddress, configuration["SMTPServer:Password"]),
                EnableSsl = true
            };
            smtp.Send(message);
        }

        public void FillUserData()
        {
            if(_user is null) { throw new NullReferenceException(); }
            if(_user.Email.IsNullOrEmpty() || _user.Password.IsNullOrEmpty()) { return; }

            _user.Id = Guid.NewGuid();
            _user.UserName= _user.Email;

            var md5 = MD5.Create();
            var hash = md5.ComputeHash(Encoding.UTF8.GetBytes(_user.Password));
            _user.PasswordHash = Convert.ToHexString(hash);
            _user.Password = string.Empty;
        }
    }
}
