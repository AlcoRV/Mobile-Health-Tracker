using Microsoft.AspNetCore.Identity;

namespace MobileHealthTracker.Models
{
    public class AppUser: IdentityUser<Guid>
    {
        public bool RememberMe { get; set; }
    }
}
