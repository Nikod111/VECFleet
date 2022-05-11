using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System;
using VECFleet.Data.Services;
using VECFleet.Web;
using VECFleet.Web.Controllers;
using Xunit;

namespace VECFleet.Test
{
    public class VECFleetTest
    {
        public class NubimetricsUnitTest
        {
            private readonly IServiceProvider _services = Program.CreateHostBuilder(new string[] { }).Build().Services;
            private readonly IVehiculoService _vehiculoService;
            private readonly VehiculoController _vehiculoController;

            public NubimetricsUnitTest()
            {
                _vehiculoService = _services.GetRequiredService<IVehiculoService>();
                _vehiculoController = new VehiculoController(_vehiculoService);
            }

            [Fact]
            public void TestGetVehiculo()
            {
                var result = _vehiculoController.Get().Result;
                Assert.IsType<OkObjectResult>(result);
            }
        }
    }
}
