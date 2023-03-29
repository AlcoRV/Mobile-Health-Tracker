using System.Net.Mail;
using System.Net;
using System.Text.RegularExpressions;
using MobileHealthTracker.Models;

namespace MobileHealthTracker.Tools
{
    public class AccountController
    {
        public Account Account { get; }

        public AccountController(Account account)
        {
            this.Account = account;
        }

        public void LogIn()
        {
            //For log in
        }

        public void SignUp()
        {
            if (IsDataValid())
            {
                SendSignUpMessage();
                CreateAccount();
                PushToBD();
            }
        }

        private bool IsDataValid()
        {
            if (Account is null) { return false; }
            if(string.IsNullOrEmpty(Account.Login) || string.IsNullOrEmpty(Account.Password)) { return false; }

            var regex = new Regex(@"[0-9a-zA-Z_\-.,]{8,16}");
            if(!regex.IsMatch(Account.Password)) { return false; }

            return true;
        }

        private void SendSignUpMessage()
        {
            var configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .Build();

            //To Do: name of app from BD
            var from = new MailAddress(configuration["SMTPServer:Address"], "Mobile Health Tracker");

            var to = new MailAddress(Account.Login);

            var message = new MailMessage(from, to);

            //To Do: Subject and Body from BD
            message.Subject = "Регистрация в системе";
            message.Body = "<h2>Спасибо за регистрацию в системе!</h2><br/>" +
                     $"Ваш логин: {Account.Login}<br/>" +
                     $"Ваш пароль: {Account.Password}";

            message.IsBodyHtml = true;

            var smtp = new SmtpClient(configuration["SMTPServer:Client"]);

            smtp.Credentials = new NetworkCredential(configuration["SMTPServer:Address"], configuration["SMTPServer:Password"]);
            smtp.EnableSsl = true;
            smtp.Send(message);
        }

        private void CreateAccount()
        {
            throw new NotImplementedException();
        }

        private void PushToBD()
        {
            throw new NotImplementedException();
        }
    }
}
