using System.Text.Json.Serialization;

namespace ConfiguratorAPIClientTestBed.Models
{
    public class TiltResponse
    {
        [JsonPropertyName("reason")]
        public string Reason = "Hungry";
        [JsonPropertyName("howManyTimes")]
        public int HowManyTimes = 7;
        [JsonPropertyName("wasItMyFault")]
        public bool WasItMyFault = false;
    }
}
