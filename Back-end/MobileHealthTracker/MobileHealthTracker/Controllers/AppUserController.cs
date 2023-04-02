using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MobileHealthTracker.Models;
using MobileHealthTracker.Tools;
using System.Security.Cryptography;
using System.Text;

namespace MobileHealthTracker.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AppUserController : ControllerBase
    {

        private readonly ILogger<AppUserController> _logger;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AppUserController(ILogger<AppUserController> logger, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [AllowAnonymous]
        [HttpPost("SignUp")]
        public async Task<string> SignUp([FromBody] AppUser user )
        {
            var createdUser = await _userManager.FindByEmailAsync(user.Email.ToUpper());

            if (createdUser != null) { return "User has been already created!"; }

            var helper = new AppUserHelper(user);
            if (helper.IsUsersDataValid())
            {
                helper.FillUserData();
                var result = await _userManager.CreateAsync(user);

                if(result.Succeeded)
                {
                    helper.SendSignUpMessage();
                }
                return "success";
            }
            return "not success";
        }

        [AllowAnonymous]
        [HttpPost("LogIn")]
        public async Task<string> LogIn([FromBody] AppUser user)
        {
            var createdUser = await _userManager.FindByEmailAsync(user.Email.ToUpper());

            if (createdUser is null) { return "User has not been created yet!"; }
            if (user.Password.IsNullOrEmpty()) { return "Password is not written!"; }

            //To Do: ....
            if (true)
            {
                return "success";
            }
            return "not success";
        }

        [HttpGet("Test")]
        public string Test()
        {
            return "Some string";
        }
    }
}