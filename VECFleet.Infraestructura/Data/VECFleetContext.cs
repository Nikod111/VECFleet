using Microsoft.EntityFrameworkCore;
using VECFleet.Data.Models;

namespace VECFleet.Data
{
    public class VECFleetContext : DbContext
    {
        public VECFleetContext(DbContextOptions<VECFleetContext> options) : base(options)
        {
        }

        public DbSet<Vehiculo> Vehiculos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vehiculo>().ToTable("Vehiculo");
        }
    }
}