using System.Text.Json.Serialization;

namespace ConfiguratorAPIClientTestBed.Models
{
    public class TiltResponse
    {
        //private string _Reason;
        //private int _HowManyTimes;
        //private bool _WasItMyFault;

        [JsonPropertyName("reason")]
        public string? Reason { get; set; }
        [JsonPropertyName("howManyTimes")]
        public int HowManyTimes { get; set;}
        [JsonPropertyName("wasItMyFault")]
        public bool WasItMyFault { get; set; }

        public TiltResponse() {
            this.WasItMyFault = false;
            this.HowManyTimes = 7;
            this.Reason = "Hungry";
        }
    }
}
