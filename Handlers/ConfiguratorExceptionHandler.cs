using Microsoft.AspNetCore.Diagnostics;
using System.Reflection;

namespace ConfiguratorAPIClientTestBed.Handlers
{
    public class ConfiguratorExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<ConfiguratorExceptionHandler> logger;
        public ConfiguratorExceptionHandler (ILogger<ConfiguratorExceptionHandler> logger)
        {
            this.logger = logger;
        }
        public ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            var exceptionMessage = exception.Message;
            logger.LogError(
                "Error Message: {exceptionMessage}, Time of occurrence {time}",
                exceptionMessage, DateTime.UtcNow);
            return ValueTask.FromResult(false);
        }
    }
}
