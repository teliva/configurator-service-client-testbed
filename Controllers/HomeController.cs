using ConfiguratorAPIClientTestBed.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

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
        public IActionResult GetTilt([FromQuery] int dataString)
        {
            var ans = new TiltResponse();
            System.Diagnostics.Trace.WriteLine(JsonConvert.SerializeObject(ans));
            switch (dataString)
            {
                case 0:
                    return NoContent();
                case 1:
                    return Ok(JsonConvert.SerializeObject(ans));
                case 2:
                    return NotFound();
                case 3:
                    return BadRequest("tilt");
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
