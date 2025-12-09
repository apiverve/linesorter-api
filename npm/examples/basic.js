/**
 * Basic Example - Line Sorter API
 *
 * This example demonstrates how to use the Line Sorter API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const linesorterAPI = require('../index.js');

// Initialize the API client
const api = new linesorterAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "lines": [
    "The quick brown fox jumps over the lazy dog",
    "An apple a day keeps the doctor away",
    "banana",
    "Cherry blossoms bloom in spring",
    "date"
  ],
  "order": "asc",
  "caseSensitive": false
};

// Make the API request using callback
console.log('Making request to Line Sorter API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
