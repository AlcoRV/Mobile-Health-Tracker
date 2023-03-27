using System.Net.Mail;
using System.Net;

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
            //To Do: main logic and check Login and Password
            SendHelloMessage();
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
