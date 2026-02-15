using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.LineSorter
{
    /// <summary>
    /// Query options for the Line Sorter API
    /// </summary>
    public class LineSorterQueryOptions
    {
        /// <summary>
        /// Array of text lines to sort (max 10,000)
        /// </summary>
        [JsonProperty("lines")]
        public string Lines { get; set; }

        /// <summary>
        /// Sort order
        /// </summary>
        [JsonProperty("order")]
        public string Order { get; set; }

        /// <summary>
        /// Enable case-sensitive sorting
        /// </summary>
        [JsonProperty("caseSensitive")]
        public string CaseSensitive { get; set; }
    }
}
