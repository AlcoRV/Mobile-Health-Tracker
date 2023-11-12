using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MobileHealthTracker.Models;
using MobileHealthTracker.Tools;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
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
        private readonly IConfiguration _configuration;

        public class LoginData
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public bool RememberMe { get; set; }
        }

        public AppUserController(ILogger<AppUserController> logger, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration configuration)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpPost("SignUp")]
        [AllowAnonymous]
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

        [HttpPost("LogIn")]
        [AllowAnonymous]
        public async Task<IActionResult> LogIn([FromBody] LoginData loginData)
        {
            if (loginData is null) { throw new NullReferenceException(); }
            if (string.IsNullOrWhiteSpace(loginData.Email) || string.IsNullOrEmpty(loginData.Password)) { throw new ArgumentException("Not filled Email or Password!"); }

            var createdUser = await _userManager.FindByEmailAsync(loginData.Email.ToUpper());

            if (createdUser is null) { return Unauthorized("User has not been created yet!"); }
            if (loginData.Password.IsNullOrEmpty()) { return Unauthorized("Password is not written!"); }

            var result = await _signInManager.PasswordSignInAsync(createdUser, loginData.Password, loginData.RememberMe, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                //await _signInManager.SignInAsync(createdUser, isPersistent: true);

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, loginData.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var expires = DateTime.UtcNow.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

                var token = new JwtSecurityToken(
                    _configuration["JwtIssuer"],
                    _configuration["JwtAudience"],
                    claims,
                    expires: expires,
                    signingCredentials: creds
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = expires
                });

            }
            return Unauthorized();
        }

        //[AllowAnonymous]
        [HttpGet("Test")]
        public string Test()
        {
            return "Some string";
        }
    }
}