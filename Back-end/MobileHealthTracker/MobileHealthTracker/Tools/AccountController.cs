using System.Net.Mail;
using System.Net;
using System.Text.RegularExpressions;

namespace MobileHealthTracker.Tools
{
    public class AccountController
    {
        public string? Login { get; set; }
        public string? Password { get; set; }

        public void LogIn()
        {
            //For log in
        }

        public void SignUp()
        {
            if (IsDataValid())
            {
                SendHelloMessage();
            }
        }

        private bool IsDataValid()
        {
            if(string.IsNullOrEmpty(Login) || string.IsNullOrEmpty(Password)) { return false; }

            var regex = new Regex(@"[0-9a-zA-Z_\-.,]{8,16}");
            if(!regex.IsMatch(Password)) { return false; }

            return true;
        }

        private void SendHelloMessage()
        {
            var configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .Build();

            //To Do: name of app from BD
            var from = new MailAddress(configuration["SMTPServer:Address"], "Mobile Health Tracker");

            var to = new MailAddress(Login);

            var message = new MailMessage(from, to);

            //To Do: Subject and Body from BD
            message.Subject = "Регистрация в системе";
            message.Body = "<h2>Спасибо за регистрацию в системе!</h2><br/>" +
                     $"Ваш логин: {Login}<br/>" +
                     $"Ваш пароль: {Password}";

            message.IsBodyHtml = true;

            var smtp = new SmtpClient(configuration["SMTPServer:Client"]);

            smtp.Credentials = new NetworkCredential(configuration["SMTPServer:Address"], configuration["SMTPServer:Password"]);
            smtp.EnableSsl = true;
            smtp.Send(message);
        }
    }
}
