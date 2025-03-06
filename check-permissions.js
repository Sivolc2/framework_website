// This script should be copied into the Google Apps Script editor and run there
// It will check if the script has the necessary permissions to access the spreadsheet

/**
 * Function to check if the script has the necessary permissions
 * Run this function in the Google Apps Script editor before deploying
 */
function checkPermissions() {
  try {
    // Log the active user for verification
    const user = Session.getActiveUser().getEmail();
    console.log("Active user:", user);
    
    // Try to access the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    console.log("Successfully accessed spreadsheet:", ss.getName());
    console.log("Spreadsheet ID:", ss.getId());
    console.log("Spreadsheet URL:", ss.getUrl());
    
    // Check if the Submissions sheet exists
    let sheet = ss.getSheetByName('Submissions');
    if (!sheet) {
      console.log("'Submissions' sheet does not exist, creating it now");
      sheet = ss.insertSheet('Submissions');
      // Add headers
      sheet.appendRow(['Email', 'Timestamp', 'Submission Date']);
      console.log("Created 'Submissions' sheet with headers");
    } else {
      console.log("'Submissions' sheet exists");
      
      // Check if headers exist
      const headers = sheet.getRange(1, 1, 1, 3).getValues()[0];
      console.log("Current headers:", headers);
      
      // Verify headers match expected format
      if (headers[0] !== 'Email' || headers[1] !== 'Timestamp' || headers[2] !== 'Submission Date') {
        console.log("Headers don't match expected format. Current headers:", headers);
      }
    }
    
    // Try to write a test row and then delete it
    console.log("Attempting to write a test row...");
    sheet.appendRow(['test@example.com', new Date().toISOString(), new Date().toLocaleString()]);
    const lastRow = sheet.getLastRow();
    console.log("Test row written at row", lastRow);
    
    // Delete the test row
    sheet.deleteRow(lastRow);
    console.log("Test row deleted");
    
    // Try to send a test email
    try {
      MailApp.sendEmail(
        Session.getActiveUser().getEmail(),
        "Google Apps Script Permission Test",
        "This is a test email to verify the script has permission to send emails."
      );
      console.log("Test email sent successfully");
    } catch (emailError) {
      console.error("Failed to send test email:", emailError.toString());
      console.log("Email functionality may not work, but this won't prevent form submissions from being recorded");
    }
    
    return {
      status: 'success',
      message: 'Script has all necessary permissions to access and modify the spreadsheet'
    };
  } catch (error) {
    console.error("Permission check failed:", error.toString());
    return {
      status: 'error',
      message: 'Permission issue: ' + error.toString()
    };
  }
}

/**
 * Function to get the current web app URL
 * Run this after deploying to verify the correct URL
 */
function getWebAppURL() {
  return ScriptApp.getService().getUrl();
}

/**
 * Function to test the doPost function
 * Run this to verify the script can process form submissions
 */
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