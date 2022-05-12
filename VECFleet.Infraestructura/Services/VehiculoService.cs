using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VECFleet.Data.Models;

namespace VECFleet.Data.Services
{
    public class VehiculoService : IVehiculoService
    {
        private readonly VECFleetContext _context;

        public VehiculoService(VECFleetContext context)
        {
            _context = context;
        }

        public List<Vehiculo> List()
        {
            return _context.Vehiculos.ToList();
        }

        public async Task<int> Create(Vehiculo Vehiculo)
        {
            _context.Vehiculos.Add(Vehiculo);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(int id)
        {
            var Vehiculo = await _context.Vehiculos.FindAsync(id);
            if (Vehiculo == null)
                throw new Exception("Vehiculo no encontrado");

            _context.Vehiculos.Remove(Vehiculo);

            return await _context.SaveChangesAsync();
        }

        public async Task<int> Update(Vehiculo vehiculo)
        {
            _context.Vehiculos.Update(vehiculo);
            return await _context.SaveChangesAsync();
        }
    }
}
