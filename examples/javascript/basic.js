/**
 * Line Sorter API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the Line Sorter API.
 * API Documentation: https://docs.apiverve.com/ref/linesorter
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/linesorter';

/**
 * Make a POST request to the Line Sorter API
 */
async function callLineSorterAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;lines&quot;: [
        &quot;The quick brown fox jumps over the lazy dog&quot;,
        &quot;An apple a day keeps the doctor away&quot;,
        &quot;banana&quot;,
        &quot;Cherry blossoms bloom in spring&quot;,
        &quot;date&quot;
    ],
    &quot;order&quot;: &quot;asc&quot;,
    &quot;caseSensitive&quot;: false
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callLineSorterAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
