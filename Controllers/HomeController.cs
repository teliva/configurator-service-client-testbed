using ConfiguratorAPIClientTestBed.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text.Json;


namespace ConfiguratorAPIClientTestBed.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpGet]
        [Route("tilt")]
        public async Task<IActionResult> GetTilt([FromQuery] int dataString)
        {
            TiltResponse ans = new TiltResponse();
            Console.WriteLine(JsonSerializer.Serialize(ans));
            switch (dataString)
            {
                case 0:
                    return NoContent();
                case 1:
                    return Ok(JsonSerializer.Serialize(ans));
                case 2:
                    return NotFound();
                case 3:
                    return BadRequest("tilt");
                case 4:
                    throw new HttpResponseException(413);
            }
            return NoContent();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
