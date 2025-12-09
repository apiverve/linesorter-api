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
        /// Example: ["banana","apple","cherry"]
        /// </summary>
        [JsonProperty("lines")]
        public string Lines { get; set; }

        /// <summary>
        /// Sort order: 'asc' or 'desc'
        /// Example: asc
        /// </summary>
        [JsonProperty("order")]
        public string Order { get; set; }

        /// <summary>
        /// Enable case-sensitive sorting
        /// Example: false
        /// </summary>
        [JsonProperty("caseSensitive")]
        public string CaseSensitive { get; set; }
    }
}
