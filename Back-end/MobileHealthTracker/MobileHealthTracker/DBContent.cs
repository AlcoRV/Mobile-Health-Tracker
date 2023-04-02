using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MobileHealthTracker.Models;

namespace MobileHealthTracker
{
    public class DBContent: IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>
    {
        public DBContent(DbContextOptions<DBContent> options): base(options) { }

        public override DbSet<AppUser> Users { get; set; }
    }
}
