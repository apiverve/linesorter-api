# Line Sorter API - Dart/Flutter Client

Line Sorter organizes text by sorting lines alphabetically in ascending or descending order with case-sensitive options.

[![pub package](https://img.shields.io/pub/v/apiverve_linesorter.svg)](https://pub.dev/packages/apiverve_linesorter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Line Sorter API](https://apiverve.com/marketplace/linesorter?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_linesorter: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_linesorter/apiverve_linesorter.dart';

void main() async {
  final client = LinesorterClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'lines': The quick brown fox jumps over the lazy dog,An apple a day keeps the doctor away,banana,Cherry blossoms bloom in spring,date,
      'order': 'asc',
      'caseSensitive': false
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Line Sorter API](https://apiverve.com/marketplace/linesorter?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/linesorter](https://docs.apiverve.com/ref/linesorter?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
