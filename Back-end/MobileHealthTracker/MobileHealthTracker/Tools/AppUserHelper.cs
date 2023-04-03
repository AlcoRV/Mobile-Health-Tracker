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

        public bool IsPasswordValid(string password)
        {
            var regex = new Regex(@"[0-9a-zA-Z_\-.,]{8,16}");
            if (!regex.IsMatch(password)) { return false; }

            return true;
        }

        public void SendSignUpMessage(string email, string password)
        {
            var configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .Build();

            var serverAddress = configuration["SMTPServer:Address"];
            if(serverAddress is null) { throw new NullReferenceException("Not correct server's address!"); }

            //To Do: name of app from BD
            var from = new MailAddress(serverAddress, "Mobile Health Tracker");

            var to = new MailAddress(email);

            var message = new MailMessage(from, to)
            {
                //To Do: Subject and Body from BD
                Subject = "Регистрация в системе",
                Body = "<h2>Спасибо за регистрацию в системе!</h2><br/>" +
                     $"Ваш логин: {email}<br/>" +
                     $"Ваш пароль: {password}",

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
            //if(_user.Email.IsNullOrEmpty() || _user.Password.IsNullOrEmpty()) { return; }

            _user.Id = Guid.NewGuid();
            _user.UserName= _user.Email;
        }
    }
}
