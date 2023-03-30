using Microsoft.EntityFrameworkCore;
using MobileHealthTracker.Models;

namespace MobileHealthTracker
{
    public class DBContent: DbContext
    {
        public DBContent(DbContextOptions<DBContent> options): base(options) { }

        DbSet<Account> Accounts { get; set; }
    }
}
