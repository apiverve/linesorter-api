# Line Sorter API - Ruby Gem

Line Sorter organizes text by sorting lines alphabetically in ascending or descending order with case-sensitive options.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_linesorter'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_linesorter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_linesorter'

# Initialize the client
client = APIVerve::Linesorter::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  lines: The quick brown fox jumps over the lazy dog,An apple a day keeps the doctor away,banana,Cherry blossoms bloom in spring,date,
  order: "asc",
  caseSensitive: false
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ lines: The quick brown fox jumps over the lazy dog,An apple a day keeps the doctor away,banana,Cherry blossoms bloom in spring,date, order: "asc", caseSensitive: false })
  puts response["data"]
rescue APIVerve::Linesorter::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Linesorter::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Linesorter::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "sorted": [
      "An apple a day keeps the doctor away",
      "banana",
      "Cherry blossoms bloom in spring",
      "date",
      "The quick brown fox jumps over the lazy dog"
    ],
    "lineCount": 5,
    "order": "asc",
    "caseSensitive": false
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/linesorter?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/linesorter?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/linesorter?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
