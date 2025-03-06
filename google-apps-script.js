// Google Apps Script code to handle form submissions and store data in Google Sheets
// Copy this code into your Google Apps Script editor

// Main function to handle POST requests
function doPost(e) {
  try {
    // Get the form data - handle both form-encoded and JSON data
    let data;
    if (e && e.postData && e.postData.contents) {
      try {
        // Try to parse as JSON
        data = JSON.parse(e.postData.contents);
      } catch (e) {
        // If not JSON, use parameter data
        data = e.parameter;
      }
    } else {
      // Fallback to parameter data
      data = e && e.parameter ? e.parameter : {};
      
      // For testing in the script editor
      if (!data.email) {
        data.email = "test@example.com"; // Default test value
      }
    }
    
    // Validate data
    if (!data || !data.email) {
      return createJSONResponse({
        'status': 'error',
        'message': 'No email provided'
      });
    }
    
    // Access the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Submissions') || ss.insertSheet('Submissions');
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Timestamp', 'Submission Date']);
    }
    
    // Append the data to the sheet
    sheet.appendRow([
      data.email,
      data.timestamp || new Date().toISOString(),
      new Date().toLocaleString()
    ]);
    
    // Send email notification
    sendEmailNotification(data.email);
    
    // Return success response
    return createJSONResponse({
      'status': 'success',
      'message': 'Data successfully recorded'
    });
    
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost: ' + error.toString());
    
    // Return error response
    return createJSONResponse({
      'status': 'error',
      'message': error.toString()
    });
  }
}

// Function to handle GET requests
function doGet(e) {
  return createJSONResponse({
    'status': 'success',
    'message': 'GET request received successfully'
  });
}

// Function to handle CORS preflight OPTIONS requests
function doOptions(e) {
  return createJSONResponse({
    'status': 'success',
    'message': 'OPTIONS request handled successfully'
  });
}

// Helper function to create proper JSON responses
function createJSONResponse(data) {
  // Create the text output with JSON
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Function to send email notification
function sendEmailNotification(subscriberEmail) {
  const emailAddress = Session.getActiveUser().getEmail(); // Gets your email address
  const subject = 'New Framework Zero Subscriber';
  const body = `
    A new user has subscribed to Framework Zero updates:
    
    Email: ${subscriberEmail}
    Date: ${new Date().toLocaleString()}
    
    You can view all submissions in your Google Sheet.
  `;
  
  try {
    MailApp.sendEmail(emailAddress, subject, body);
  } catch (error) {
    console.error('Failed to send email notification: ' + error.toString());
  }
}

// Add this function for testing in the script editor
function testDoPost() {
  // Create a mock event object
  const mockEvent = {
    parameter: {
      email: "test@example.com",
      timestamp: new Date().toISOString()
    }
  };
  
  // Call doPost with the mock event
  const result = doPost(mockEvent);
  
  // Log the result
  console.log(result.getContent());
} 