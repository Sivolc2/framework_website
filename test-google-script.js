// This is a Node.js script to test the Google Apps Script directly
// Run with: node test-google-script.js

const https = require('https');
const querystring = require('querystring');

// Test data
const testData = {
  email: 'test@example.com',
  timestamp: new Date().toISOString()
};

// URL of the Google Apps Script
const scriptUrl = 'https://script.google.com/macros/s/AKfycbzoNCwmapJEdAax6IrB-arVQvcsekCrbxSUOtP3U6AONjRunMhmiDTUqNDvlL90R-D_/exec';

// Parse the URL to get hostname and path
const url = new URL(scriptUrl);

// Prepare the request options
const options = {
  hostname: url.hostname,
  path: url.pathname + url.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};

// Prepare the request data
const postData = querystring.stringify(testData);

console.log('Sending test request to Google Apps Script...');
console.log('URL:', scriptUrl);
console.log('Data:', testData);

// Send the request
const req = https.request(options, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  
  let data = '';
  
  // A chunk of data has been received
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received
  res.on('end', () => {
    console.log('Response Data:');
    console.log(data);
    console.log('\nTest completed. Check your Google Sheet for the test entry.');
  });
});

// Handle request errors
req.on('error', (error) => {
  console.error('Error:', error);
});

// Write data to request body
req.write(postData);
req.end();

console.log('Request sent, waiting for response...'); 