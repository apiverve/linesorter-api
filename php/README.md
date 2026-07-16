# Line Sorter API - PHP Package

Line Sorter organizes text by sorting lines alphabetically in ascending or descending order with case-sensitive options.

## Installation

Install via Composer:

```bash
composer require apiverve/linesorter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Linesorter\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'lines' => The quick brown fox jumps over the lazy dog,An apple a day keeps the doctor away,banana,Cherry blossoms bloom in spring,date,
    'order' => 'asc',
    'caseSensitive' => false
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Linesorter\Client;
use APIVerve\Linesorter\Exceptions\APIException;
use APIVerve\Linesorter\Exceptions\ValidationException;

try {
    $response = $client->execute(['lines' => The quick brown fox jumps over the lazy dog,An apple a day keeps the doctor away,banana,Cherry blossoms bloom in spring,date, 'order' => 'asc', 'caseSensitive' => false]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/linesorter?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://apiverve.com/marketplace/linesorter?utm_source=php&utm_medium=readme](https://apiverve.com/marketplace/linesorter?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
