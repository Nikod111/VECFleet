using System.Collections.Generic;
using System.Threading.Tasks;
using VECFleet.Data.Models;

namespace VECFleet.Data.Services
{
    public interface IVehiculoService
    {
        List<Vehiculo> List();
        Task<int> Create(Vehiculo user);
        Task<int> Delete(int id);
    }
}