using Microsoft.AspNetCore.Identity;

namespace MobileHealthTracker.Models
{
    public class AppUser: IdentityUser<Guid>
    {
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
