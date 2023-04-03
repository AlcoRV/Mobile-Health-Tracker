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

        public class LoginData
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public bool RememberMe { get; set; }
        }

        public AppUserController(ILogger<AppUserController> logger, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [AllowAnonymous]
        [HttpPost("SignUp")]
        public async Task<string> SignUp([FromBody] LoginData loginData )
        {
            if(loginData is null) { throw new NullReferenceException(); }
            if(string.IsNullOrWhiteSpace(loginData.Email) || string.IsNullOrEmpty(loginData.Password)) { throw new ArgumentException("Not filled Email or Password!"); }

            var createdUser = await _userManager.FindByEmailAsync(loginData.Email.ToUpper());

            if (createdUser != null) { return "User has been already created!"; }

            var user = new AppUser() { 
                UserName = loginData.Email.Split('@')[0],
                Email = loginData.Email,
            };

            var helper = new AppUserHelper(user);
            if (helper.IsPasswordValid(loginData.Password))
            {
                helper.FillUserData();
                var result = await _userManager.CreateAsync(user, loginData.Password);

                if(result.Succeeded)
                {
                    //helper.SendSignUpMessage();
                }
                return "success";
            }
            return "not success";
        }

        [AllowAnonymous]
        [HttpPost("LogIn")]
        public async Task<string> LogIn([FromBody] LoginData loginData)
        {
            if (loginData is null) { throw new NullReferenceException(); }
            if (string.IsNullOrWhiteSpace(loginData.Email) || string.IsNullOrEmpty(loginData.Password)) { throw new ArgumentException("Not filled Email or Password!"); }

            var createdUser = await _userManager.FindByEmailAsync(loginData.Email.ToUpper());

            if (createdUser is null) { return "User has not been created yet!"; }
            if (loginData.Password.IsNullOrEmpty()) { return "Password is not written!"; }

            //To Do: ....

            var result = await _userManager.CheckPasswordAsync(createdUser, loginData.Password);

            if (result)
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