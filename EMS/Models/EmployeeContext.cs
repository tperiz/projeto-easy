using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EMS.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {

        }
        public DbSet<Programador> Programador { get; set; }
        public DbSet<Conta> Conta { get; set; }
        public DbSet<Conhecimentos> Conhecimentos { get; set; }

    }
}
