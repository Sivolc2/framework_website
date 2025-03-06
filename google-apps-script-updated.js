// Updated Google Apps Script code to handle form submissions and store data in Google Sheets
// Copy this code into your Google Apps Script editor and deploy as a new web app

// Main function to handle POST requests
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log("Received POST request:", JSON.stringify(e));
    
    // Get the form data - handle both form-encoded and JSON data
    let data;
    if (e && e.postData && e.postData.contents) {
      try {
        // Try to parse as JSON
        data = JSON.parse(e.postData.contents);
        console.log("Parsed JSON data:", JSON.stringify(data));
      } catch (jsonError) {
        // If not JSON, use parameter data
        data = e.parameter;
        console.log("Using parameter data:", JSON.stringify(data));
      }
    } else {
      // Fallback to parameter data
      data = e && e.parameter ? e.parameter : {};
      console.log("Fallback to parameter data:", JSON.stringify(data));
      
      // For testing in the script editor
      if (!data.email) {
        data.email = "test@example.com"; // Default test value
      }
    }
    
    // Validate data
    if (!data || !data.email) {
      console.error("Error: No email provided");
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'No email provided'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Access the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    console.log("Spreadsheet ID:", ss.getId());
    
    // Try to get the Submissions sheet, or create it if it doesn't exist
    let sheet;
    try {
      sheet = ss.getSheetByName('Submissions');
      if (!sheet) {
        console.log("Creating new 'Submissions' sheet");
        sheet = ss.insertSheet('Submissions');
      }
    } catch (sheetError) {
      console.error("Error accessing/creating sheet:", sheetError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Error accessing sheet: ' + sheetError.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      console.log("Adding headers to sheet");
      sheet.appendRow(['Email', 'Timestamp', 'Submission Date']);
    }
    
    // Append the data to the sheet
    try {
      console.log("Appending data to sheet:", data.email);
      sheet.appendRow([
        data.email,
        data.timestamp || new Date().toISOString(),
        new Date().toLocaleString()
      ]);
      console.log("Data successfully appended");
    } catch (appendError) {
      console.error("Error appending data:", appendError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Error appending data: ' + appendError.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Try to send email notification
    try {
      sendEmailNotification(data.email);
    } catch (emailError) {
      console.error("Email notification failed:", emailError.toString());
      // Continue even if email fails
    }
    
    // Return success response
    console.log("Returning success response");
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data successfully recorded'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error.toString());
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET requests
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'GET request received successfully'
  })).setMimeType(ContentService.MimeType.JSON);
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
    console.log("Email notification sent to:", emailAddress);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error.toString());
    return false;
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
  console.log("Test result:", result.getContent());
  
  return "Test completed. Check the logs and your spreadsheet.";
}

// Function to get the current web app URL
function getWebAppURL() {
  return ScriptApp.getService().getUrl();
}

// Function to check if the script has the necessary permissions
function checkPermissions() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Submissions') || ss.insertSheet('Submissions');
    sheet.appendRow(['Test', new Date().toISOString(), new Date().toLocaleString()]);
    sheet.deleteRow(sheet.getLastRow());
    
    return {
      status: 'success',
      message: 'Script has necessary permissions to access and modify the spreadsheet'
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Permission issue: ' + error.toString()
    };
  }
} 