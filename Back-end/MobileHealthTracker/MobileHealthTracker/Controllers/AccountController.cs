using Microsoft.AspNetCore.Mvc;
using MobileHealthTracker.Models;
using MobileHealthTracker.Tools;

namespace MobileHealthTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {

        private readonly ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }

        [HttpPost("SignUp")]
        public string SignUp([FromBody] Account account )
        {
            var accountService = new AccountService(account);
            accountService.SignUp();
            return "success";
        }
    }
}