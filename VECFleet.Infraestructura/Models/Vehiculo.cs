using System.ComponentModel.DataAnnotations;

namespace VECFleet.Data.Models
{
    public class Vehiculo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(10)]
        public string TipoVehiculo { get; set; }

        [Required]
        public int CantidadRuedas { get; set; }

        [Required]
        [MaxLength(10)]
        public string Marca { get; set; }

        [Required]
        [MaxLength(20)]
        public string Modelo { get; set; }

        [Required]
        [MaxLength(20)]
        public string Patente { get; set; }

        [Required]
        [MaxLength(20)]
        public string NumeroChasis { get; set; }

        [Required]
        public int KMsRecorridos { get; set; }

        [Required]
        public int KMsParaMantenimiento { get; set; }
    }
}
