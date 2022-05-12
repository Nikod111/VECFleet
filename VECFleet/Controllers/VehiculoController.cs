using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using VECFleet.Data.Models;
using VECFleet.Data.Services;

namespace VECFleet.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class VehiculoController : ControllerBase
    {
        private readonly IVehiculoService _vehiculoService;

        public VehiculoController(IVehiculoService vehiculoService) =>
        _vehiculoService = vehiculoService;

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var vehiculos = _vehiculoService.List().ToList();

            return Ok(vehiculos);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Vehiculo vehiculo)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _vehiculoService.Create(vehiculo);

            return Ok(vehiculo);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (!(id > 0))
                return BadRequest("El Id de vehiculo debe ser mayor a 0");

            try
            {
                await _vehiculoService.Delete(id);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult> Update(Vehiculo vehiculo)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                await _vehiculoService.Update(vehiculo);
                return Ok(vehiculo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
