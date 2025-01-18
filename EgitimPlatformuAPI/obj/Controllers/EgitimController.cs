using Microsoft.AspNetCore.Mvc;

namespace EgitimPlatformuAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EgitimController : ControllerBase
    {
        // Eğitimleri listeleme
        [HttpGet]
        public IActionResult GetEgitimler()
        {
            var egitimler = new[]
            {
                new { Id = 1, Ad = "Java Eğitimi", Aciklama = "Java programlamaya sıfırdan başla." },
                new { Id = 2, Ad = "C# Eğitimi", Aciklama = "C# programlama dilini öğren." },
                new { Id = 3, Ad = "SQL Eğitimi", Aciklama = "Veritabanı ve SQL dilini öğren." }
            };

            return Ok(egitimler);
        }

        // Tek bir eğitim getirme
        [HttpGet("{id}")]
        public IActionResult GetEgitim(int id)
        {
            var egitim = new { Id = id, Ad = "Java Eğitimi", Aciklama = "Java programlamaya sıfırdan başla." };

            return Ok(egitim);
        }
    }
}
